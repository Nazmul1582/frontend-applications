import React, { useEffect } from "react";
import { useNote } from "../contexts/NoteContext";

const OutputArea = () => {
  const { note, dispatch } = useNote();

  useEffect(() => {
    fetch("http://localhost:4000/notes")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((err) => dispatch({ type: "FETCH_FAILURE", payload: err }));
  }, [dispatch]);

  return note.isLoading ? (
    <h1 className="text-white">Loading ...</h1>
  ) : (
    <div
      className={`bg-white shadow-xl rounded-xl text-center font-bold p-5  ${
        note.notes.length === 0 ? "hidden" : "block"
      }`}
    >
      <div
        className={` max-h-[300px] ${
          note.notes.length >= 4 && "overflow-y-scroll"
        }`}
      >
        {note.notes.map((note) => (
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
