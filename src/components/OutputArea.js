import React from "react";
import AbsentStudents from "./AbsentStudents";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";

export default function OutputArea({ states }) {
  const toggleStudent = (studentId) => {
    const singleStudent = states.students.find(
      (student) => student.id === studentId
    );

    fetch(`http://localhost:5000/students/${studentId}`, {
      method: "PATCH",
      body: JSON.stringify({ isPresent: !singleStudent.isPresent }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => states.getStudents());
  };

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 p-5">
      <AllStudents states={states} />
      <PresentStudents
        students={states.students}
        toggleStudent={toggleStudent}
      />
      <AbsentStudents
        students={states.students}
        toggleStudent={toggleStudent}
      />
    </div>
  );
}
