import { useEffect, useReducer } from "react";

const initialState = {
  isLoading: true,
  notes: [],
  error: false,
  noteTitle: "",
  editMode: false,
  editableNote: null,
};
const noteReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        notes: action.payload,
        error: false,
      };

    case "FETCH_FAILURE":
      return {
        isLoading: false,
        notes: [],
        error: action.payload,
      };

    case "CHANGE_TITLE":
      return {
        ...state,
        noteTitle: action.payload,
      };

    case "CREATE_NOTE":
      return {
        ...state,
        note: [...state.note, action.payload],
      };

    case "EDIT_NOTE":
      return {};
    case "UPDATE_NOTE":
      return {};
    case "REMOVE_NOTE":
      return {};
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  const getAllNotes = () => {
    fetch("http://localhost:4000/notes")
      .then((response) => response.json())
      .then((data) => dispatch({ type: "FETCH_SUCCESS", payload: data }))
      .catch((err) =>
        dispatch({ type: "FETCH_FAILURE", payload: err.message })
      );
  };

  useEffect(() => {
    getAllNotes();
  }, []);

  return state.isLoading ? (
    <h1 className="text-4xl">Loading ...</h1>
  ) : (
    <div className="min-h-screen  bg-gradient-to-r from-green-500 to-lime-500">
      <div className="text-center text-4xl font-bold py-5 text-white">
        <h1>Note-Taking App</h1>
        <p className="text-xl">using Fetch API and useReducer Hook</p>
      </div>
      <div className="flex items-center justify-center custom-height">
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!state.noteTitle) {
                alert("Please enter a valid text!");
                return;
              }
              state.editMode
                ? dispatch({ type: "UPDATE_NOTE" })
                : dispatch({ type: "CREATE_NOTE" });
            }}
            className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex justify-center items-center gap-5"
          >
            <input
              type="text"
              value={state.noteTitle}
              onChange={(e) =>
                dispatch({ type: "CHANGE_TITLE", payload: e.target.value })
              }
              className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-green-500 outline-0"
            />
            <button className="btn bg-green-500 shadow-green-500/50">
              {state.editMode ? "Update" : "Add"}
            </button>
          </form>
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
        </div>
      </div>
    </div>
  );
};

export default App;
