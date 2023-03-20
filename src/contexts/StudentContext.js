import React, { createContext, useContext, useReducer } from "react";
import studentReducer from "../reducer/studentReducer";

const StudentContext = createContext();
export const useStudent = () => useContext(StudentContext);

const initialState = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
};

export const StudentContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initialState);
  return (
    <StudentContext.Provider value={{ state, dispatch }}>
      {children}
    </StudentContext.Provider>
  );
};
