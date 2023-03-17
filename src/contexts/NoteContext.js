import { createContext, useContext, useReducer } from "react";
import noteReducer from "../reducer/noteReducer";

const NoteContext = createContext();
export const useNote = () => useContext(NoteContext);

const initialState = {
  noteTitle: "",
  notes: [],
  editMode: false,
  editableNote: null,
};

const NoteContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(noteReducer, initialState);

  return (
    <NoteContext.Provider value={{ state, dispatch }}>
      {children}
    </NoteContext.Provider>
  );
};
export default NoteContextProvider;
