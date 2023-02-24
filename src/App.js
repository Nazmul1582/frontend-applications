import { useState } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [noteTitle, setNoteTitle] = useState("");
  const [notes, setNotes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);

  return (
    <div className="min-h-screen  bg-gradient-to-r from-violet-500 to-indigo-500">
      <h1 className="text-center text-4xl font-bold py-5 text-white">
        Note Taking Application
      </h1>
      <div className="flex items-center justify-center custom-height">
        <div>
          <InputArea
            noteTitle={noteTitle}
            setNoteTitle={setNoteTitle}
            notes={notes}
            setNotes={setNotes}
            editMode={editMode}
            setEditMode={setEditMode}
            editableNote={editableNote}
            setEditableNote={setEditableNote}
          />

          <OutputArea
            setNoteTitle={setNoteTitle}
            notes={notes}
            setNotes={setNotes}
            setEditMode={setEditMode}
            setEditableNote={setEditableNote}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
