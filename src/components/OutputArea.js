import React from "react";
import { useNote } from "../contexts/NoteContext";

const OutputArea = () => {
  const { state, dispatch } = useNote();

  return (
    <div
      className={`bg-white shadow-xl rounded-xl text-center font-bold p-5  ${
        state.notes.length === 0 ? "hidden" : "block"
      }`}
    >
      <div
        className={` max-h-[300px] ${
          state.notes.length >= 4 && "overflow-y-scroll"
        }`}
      >
        {state.notes.map((note) => (
          <div
            key={note.id}
            className="bg-slate-200 flex gap-5 items-center justify-between rounded-md p-3 my-3"
          >
            <p className="text-xl">{note.title}</p>
            <div className="flex gap-3">
              <button
                onClick={() =>
                  dispatch({ type: "EDIT_NOTE", payload: note.id })
                }
                className="btn bg-indigo-500 shadow-indigo-500/50"
              >
                Edit
              </button>
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_NOTE", payload: note.id })
                }
                className="btn bg-rose-500 shadow-rose-500/50"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OutputArea;
