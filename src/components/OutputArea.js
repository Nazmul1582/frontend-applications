import React from "react";
import AbsentStudents from "./AbsentStudents";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";

export default function OutputArea({
  setStudentName,
  allStudents,
  setAllStudents,
  setEditMode,
  setEditableStudent,
}) {
  const toggleHandler = (studentId) => {
    const newStudentsList = allStudents.map((student) => {
      if (student.id === studentId) {
        student.isPresent = !student.isPresent;
      }
      return student;
    });
    setAllStudents(newStudentsList);
  };

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 p-5">
      <AllStudents
        setStudentName={setStudentName}
        allStudents={allStudents}
        setAllStudents={setAllStudents}
        setEditMode={setEditMode}
        setEditableStudent={setEditableStudent}
      />
      <PresentStudents
        allStudents={allStudents}
        setAllStudents={setAllStudents}
        toggleHandler={toggleHandler}
      />
      <AbsentStudents
        allStudents={allStudents}
        setAllStudents={setAllStudents}
        toggleHandler={toggleHandler}
      />
    </div>
  );
}
