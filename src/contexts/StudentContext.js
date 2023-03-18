import { createContext, useContext, useState } from "react";

const StudentContext = createContext();
export const useStudent = () => useContext(StudentContext);

const StudentContextProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const toggleHandler = (studentId) => {
    const updatedStudents = students.map((student) => {
      if (student.id === studentId) {
        student.isPresent = !student.isPresent;
      }
      return student;
    });
    setStudents(updatedStudents);
  };

  const value = {
    studentName,
    setStudentName,
    students,
    setStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    toggleHandler,
  };
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

export default StudentContextProvider;
