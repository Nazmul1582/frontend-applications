import React, { useEffect, useState } from "react";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  const getAllNotes = () => {
    fetch("http://localhost:4000/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getAllNotes();
  }, []);

  const createHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      alert("Please type a valid text");
      return;
    }
    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };

    fetch("http://localhost:4000/notes", {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      getAllNotes();
      setNoteTitle("");
    });
  };

  const removeHandler = (noteId) => {
    fetch(`http://localhost:4000/notes/${noteId}`, {
      method: "delete",
    }).then(() => getAllNotes());
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
      alert("Please type a valid text");
      return;
    }
    const newNote = {
      title: noteTitle,
    };
    fetch(`http://localhost:4000/notes/${editableNote.id}`, {
      method: "PATCH",
      body: JSON.stringify(newNote),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      getAllNotes();
      setNoteTitle("");
      setEditMode(false);
      setEditableNote(null);
    });
  };
  return (
    <div className="min-h-screen  bg-gradient-to-r from-green-500 to-lime-500">
      <h1 className="text-center text-4xl font-bold py-5 text-white">
        Note Taking App with Fetch API
      </h1>
      <div className="flex items-center justify-center custom-height">
        <div>
          <form
            onSubmit={(e) => (editMode ? updateHandler(e) : createHandler(e))}
            className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex justify-center items-center gap-5"
          >
            <input
              type="text"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-green-500 outline-0"
            />
            <button className="btn bg-green-500 shadow-green-500/50">
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
                      className="btn bg-indigo-500 shadow-indigo-500/50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeHandler(note.id)}
                      className="btn bg-rose-500 shadow-rose-500/50"
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
