import { createContext, useContext, useState } from "react";

const StudentContext = createContext();

export const useStudent = () => useContext(StudentContext);

const StudentContextProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const createStudent = (e) => {
    e.preventDefault();
    if (!studentName) {
      alert("Please type a valid name!");
      return;
    }
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: undefined,
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };

  const editStudent = (stuId) => {
    setEditMode(true);
    const toBeEditedStudent = students.find((student) => student.id === stuId);
    setEditableStudent(toBeEditedStudent);
    setStudentName(toBeEditedStudent.name);
  };

  const updateStudent = (e) => {
    e.preventDefault();
    if (!studentName) {
      alert("Please type a valid text!");
      return;
    }
    const updatedStudents = students.filter((student) => {
      if (student.id === editableStudent.id) {
        student.name = studentName;
      }
      return student;
    });
    setStudents(updatedStudents);
    setStudentName("");
    setEditMode(false);
    setEditableStudent(null);
  };

  const deleteStudent = (stuId) => {
    const updatedStudents = students.filter((student) => student.id !== stuId);
    setStudents(updatedStudents);
  };

  const toggleStudent = (stuId) => {
    const updatedStudents = students.filter((student) => {
      if (student.id === stuId) {
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
    createStudent,
    editStudent,
    updateStudent,
    deleteStudent,
    toggleStudent,
  };
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

export default StudentContextProvider;
