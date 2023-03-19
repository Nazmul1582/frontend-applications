import { createContext, useContext, useEffect, useState } from "react";

const StudentContext = createContext();
export const useStudent = () => useContext(StudentContext);

const StudentContextProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const getStudents = () => {
    fetch(`http://localhost:5000/students`)
      .then((response) => response.json())
      .then((data) => setStudents(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getStudents();
  }, []);

  const updateStudents = (studentId, method, obj) => {
    return fetch(`http://localhost:5000/students/${studentId}`, {
      method: method,
      body: JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
  };

  const toggleHandler = (studentId) => {
    const student = students.find((student) => student.id === studentId);
    updateStudents(studentId, "PATCH", { isPresent: !student.isPresent }).then(
      () => getStudents()
    );
  };

  const value = {
    studentName,
    setStudentName,
    students,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,
    getStudents,
    updateStudents,
    toggleHandler,
  };

  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};
export default StudentContextProvider;
