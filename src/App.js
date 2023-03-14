import { useEffect, useState } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

const App = () => {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  // fist time fetch all notes
  const getAllNotes = () => {
    fetch("http://localhost:4000/notes")
      .then((response) => response.json())
      .then((data) => setNotes(data));
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  // create handler
  const createHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      alert("Please type a valid text!");
      return;
    }

    const newNote = {
      id: Date.now() + "",
      title: noteTitle,
    };

    // post request to create a new note
    fetch(`http://localhost:4000/notes`, {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      getAllNotes();
      setNoteTitle("");
    });
  };

  // edit handler
  const editHandler = (noteId) => {
    setEditMode(true);
    const toBeEdited = notes.find((note) => note.id === noteId);
    setEditableNote(toBeEdited);
    setNoteTitle(toBeEdited.title);
  };

  // update handler
  const updateHandler = (e) => {
    e.preventDefault();
    if (!noteTitle) {
      alert("Please type a valid text!");
      return;
    }
    const updatedNote = {
      title: noteTitle,
    };
    // patch request only for title update
    fetch(`http://localhost:4000/notes/${editableNote.id}`, {
      method: "PATCH",
      body: JSON.stringify(updatedNote),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      getAllNotes();
      setEditMode(false);
      setEditableNote(null);
      setNoteTitle("");
    });
  };

  // create remove handler
  const removeHandler = (noteId) => {
    fetch(`http://localhost:4000/notes/${noteId}`, {
      method: "DELETE",
    }).then(() => {
      getAllNotes();
    });
  };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-green-500 to-lime-500">
      <h1 className="text-center text-4xl font-bold py-5 text-white">
        Note Taking App with Fetch API
      </h1>
      <div className="flex items-center justify-center custom-height">
        <div>
          <InputArea
            noteTitle={noteTitle}
            setNoteTitle={setNoteTitle}
            editMode={editMode}
            createHandler={createHandler}
            updateHandler={updateHandler}
          />
          <OutputArea
            notes={notes}
            editHandler={editHandler}
            removeHandler={removeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
