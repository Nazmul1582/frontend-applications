import React from "react";
import { useNote } from "../contexts/NoteContext";

const InputArea = () => {
  const { note, dispatch } = useNote();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!note.noteTitle) {
          alert("Please enter a valid text!");
          return;
        }
        note.editMode
          ? dispatch({ type: "UPDATE_NOTE", payload: e })
          : dispatch({ type: "CREATE_NOTE", payload: e });
      }}
      className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex justify-center items-center gap-5"
    >
      <input
        type="text"
        value={note.noteTitle}
        onChange={(e) =>
          dispatch({ type: "CHANGE_TITLE", payload: e.target.value })
        }
        className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-green-500 outline-0"
      />
      <button className="btn bg-green-500 shadow-green-500/50">
        {note.editMode ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default InputArea;
