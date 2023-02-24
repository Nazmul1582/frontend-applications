import React from "react";

export default function AllStudents({
  setStudentName,
  allStudents,
  setAllStudents,
  setEditMode,
  setEditableStudent,
}) {
  const editHandler = (studentId) => {
    setEditMode(true);
    const toBeEdited = allStudents.find((student) => student.id === studentId);
    setEditableStudent(toBeEdited);
    setStudentName(toBeEdited.name);
  };

  const removeStudent = (studentId) => {
    const newStudentsList = allStudents.filter(
      (student) => student.id !== studentId
    );
    setAllStudents(newStudentsList);
  };

  const makePresentHandler = (studentId) => {
    const newStudentsList = allStudents.map((student) => {
      if (student.id === studentId) {
        if (student.isPresent === undefined) {
          student.isPresent = true;
        } else if (student.isPresent === true) {
          alert(`${student.name} is already in present list`);
        } else {
          alert(`${student.name} is already in absent list`);
        }
      }
      return student;
    });
    setAllStudents(newStudentsList);
  };

  const makeAbsentHandler = (studentId) => {
    const newStudentsList = allStudents.map((student) => {
      if (student.id === studentId) {
        if (student.isPresent === undefined) {
          student.isPresent = false;
        } else if (student.isPresent === true) {
          alert(`${student.name} is already in present list`);
        } else {
          alert(`${student.name} is already in absent list`);
        }
      }
      return student;
    });
    setAllStudents(newStudentsList);
  };

  return (
    <div
      className={`bg-white shadow-xl rounded-xl text-center p-3 ${
        allStudents.length > 4 && "overflow-y-scroll"
      }  max-h-[50vh]`}
    >
      <h2 className="mb-5 text-xl font-bold">All Students</h2>
      {allStudents.map((student) => (
        <div
          key={student.id}
          className="flex justify-between gap-3 font-semibold my-2 bg-slate-200 p-2 rounded-md"
        >
          <p>{student.name}</p>
          <div className=" flex gap-1">
            <button
              onClick={() => editHandler(student.id)}
              className="btn  bg-indigo-500 shadow-indigo-500/50"
            >
              Edit
            </button>
            <button
              onClick={() => removeStudent(student.id)}
              className="btn  bg-cyan-500 shadow-cyan-500/50"
            >
              Remove
            </button>
            <button
              onClick={() => makePresentHandler(student.id)}
              className="btn  bg-amber-500 shadow-amber-500/50"
            >
              Make present
            </button>
            <button
              onClick={() => makeAbsentHandler(student.id)}
              className="btn  bg-pink-500 shadow-pink-500/50"
            >
              Make Absent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
