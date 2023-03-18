import React, { createContext, useContext, useState } from "react";

const StudentContext = createContext();
export const useStudent = () => useContext(StudentContext);

const StudentContextProvider = ({ children }) => {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([{ id: "1", name: "Demo" }]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const addStudent = () => {
    const newStudent = {
      id: new Date().getTime() + "",
      name: studentName,
      isPresent: undefined,
    };
    setAllStudents([...allStudents, newStudent]);
    setStudentName("");
  };

  const editHandler = (studentId) => {
    setEditMode(true);
    const toBeEditedStudent = allStudents.find(
      (student) => student.id === studentId
    );
    setStudentName(toBeEditedStudent.name);
    setEditableStudent(toBeEditedStudent);
  };

  const updateHandler = () => {
    const updatedStudents = allStudents.filter((student) => {
      if (student.id === editableStudent.id) {
        student.name = studentName;
      }
      return student;
    });
    setAllStudents(updatedStudents);
    setStudentName("");
    setEditMode(false);
    setEditableStudent(null);
  };

  const removeHandler = (studentId) => {
    const updatedStudents = allStudents.filter(
      (student) => student.id !== studentId
    );
    setAllStudents(updatedStudents);
  };

  const makePresentHandler = (studentId) => {
    const presentStudents = allStudents.map((student) => {
      if (student.id === studentId) {
        if (student.isPresent === undefined) {
          student.isPresent = true;
        } else {
          alert(`${student.name} is already in a list!`);
        }
      }
      return student;
    });
    setAllStudents(presentStudents);
  };

  const makeAbsentHandler = (studentId) => {
    const absentStudents = allStudents.map((student) => {
      if (student.id === studentId) {
        if (student.isPresent === undefined) {
          student.isPresent = false;
        } else {
          alert(`${student.name} is already in a list!`);
        }
      }
      return student;
    });
    setAllStudents(absentStudents);
  };

  const toggleHandler = (studentId) => {
    const toggleStudent = allStudents.map((student) => {
      if (student.id === studentId) {
        student.isPresent = !student.isPresent;
      }
      return student;
    });
    setAllStudents(toggleStudent);
  };

  const value = {
    studentName,
    setStudentName,
    allStudents,
    setAllStudents,
    editMode,
    setEditMode,
    editableStudent,
    setEditableStudent,

    addStudent,
    editHandler,
    updateHandler,
    removeHandler,
    makePresentHandler,
    makeAbsentHandler,
    toggleHandler,
  };
  return (
    <StudentContext.Provider value={value}>{children}</StudentContext.Provider>
  );
};

export default StudentContextProvider;
