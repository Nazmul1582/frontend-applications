import React from "react";

const InputArea = ({
  noteTitle,
  setNoteTitle,
  notes,
  setNotes,
  editMode,
  setEditMode,
  editableNote,
  setEditableNote,
}) => {
  const createHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      alert("Please type a valid text");
      return;
    }
    setNotes([
      {
        id: Date.now() + "",
        title: noteTitle,
      },
      ...notes,
    ]);
    setNoteTitle("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      alert("Please type a valid text");
      return;
    }
    const newNotes = notes.filter((note) => {
      if (note.id === editableNote.id) {
        note.title = noteTitle;
      }
      return note;
    });
    setNotes(newNotes);
    setEditMode(false);
    setEditableNote(null);
    setNoteTitle("");
  };

  return (
    <form
      onSubmit={(e) => {
        editMode ? updateHandler(e) : createHandler(e);
      }}
      className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex justify-center items-center gap-5"
    >
      <input
        type="text"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-cyan-500 outline-0"
      />
      <button className="btn bg-cyan-500 shadow-cyan-500/50">
        {editMode ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default InputArea;
