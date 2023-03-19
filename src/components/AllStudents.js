import React from "react";
import { useStudent } from "../contexts/StudentContext";

const AllStduents = () => {
  const {
    students,
    setStudentName,
    setEditMode,
    setEditableStudent,
    updateStudents,
    getStudents,
  } = useStudent();

  const editHandler = (studentId) => {
    const toBeEditedStudent = students.find(
      (student) => student.id === studentId
    );
    setEditMode(true);
    setStudentName(toBeEditedStudent.name);
    setEditableStudent(toBeEditedStudent);
  };

  const removeHandler = (studentId) => {
    fetch(`http://localhost:5000/students/${studentId}`, {
      method: "DELETE",
    }).then(() => getStudents());
  };

  const attendanceHandler = (studentId, value) => {
    const singleStudent = students.find((student) => student.id === studentId);

    if (singleStudent.isPresent !== "") {
      alert(`${singleStudent.name} is already in a list!`);
      return;
    }

    updateStudents(studentId, "PATCH", { isPresent: value }).then(() =>
      getStudents()
    );
  };

  return (
    <div
      className={`bg-white shadow-xl rounded-xl text-center p-3 ${
        students.length >= 4 && "overflow-y-scroll"
      }  max-h-[50vh]`}
    >
      <h2 className="mb-5 text-xl font-bold">All Students</h2>
      {students.map((student) => (
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
              onClick={() => removeHandler(student.id)}
              className="btn  bg-cyan-500 shadow-cyan-500/50"
            >
              Remove
            </button>
            <button
              onClick={() => attendanceHandler(student.id, true)}
              className="btn  bg-amber-500 shadow-amber-500/50"
            >
              Make present
            </button>
            <button
              onClick={() => attendanceHandler(student.id, false)}
              className="btn  bg-pink-500 shadow-pink-500/50"
            >
              Make Absent
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllStduents;
