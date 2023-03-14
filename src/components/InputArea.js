import React from "react";
import { useNote } from "../contexts/NoteContext";

const InputArea = () => {
  const { noteTitle, setNoteTitle, editMode, createHandler, updateHandler } =
    useNote();
  return (
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
  );
};

export default InputArea;
