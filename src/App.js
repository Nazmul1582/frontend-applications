import { useState } from "react";
function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const createHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      alert("Please type a valid text!");
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

  const removeHandler = (noteId) => {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };

  const editHandler = (noteId) => {
    setEditMode(true);
    const toBeEditable = notes.find((note) => note.id === noteId);
    setEditableNote(toBeEditable);
    setNoteTitle(toBeEditable.title);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      alert("Please type a valid text!");
      return;
    }
    const newNotes = notes.filter((note) => {
      if (note.id === editableNote.id) {
        note.title = noteTitle;
      }
      return note;
    });
    setNotes(newNotes);
    setNoteTitle("");
    setEditMode(false);
    setEditableNote(null);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-cyan-500 to-pink-500">
      <h1 className="text-center text-4xl font-bold py-5 text-white">
        CRUD Application
      </h1>
      <div className="flex items-center justify-center custom-height">
        <div>
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
            <button
              type="submit"
              className="btn bg-cyan-500 shadow-cyan-500/50"
            >
              {editMode ? "Update" : "Add"}
            </button>
          </form>

          <div
            className={`bg-white shadow-xl rounded-xl text-center font-bold p-5  ${
              notes.length === 0 ? "hidden" : "block"
            }`}
          >
            <div
              className={` max-h-[300px] ${
                notes.length >= 4 && "overflow-y-scroll"
              }`}
            >
              {notes.map((note) => (
                <div
                  key={note.id}
                  className="bg-slate-200 flex gap-5 items-center justify-between rounded-md p-3 my-3"
                >
                  <p className="text-xl">{note.title}</p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => editHandler(note.id)}
                      type="button"
                      className="btn  bg-indigo-500 shadow-indigo-500/50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeHandler(note.id)}
                      type="button"
                      className="btn  bg-pink-500 shadow-pink-500/50"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
