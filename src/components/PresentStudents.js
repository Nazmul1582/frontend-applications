import React from "react";
import { useStudent } from "../contexts/StudentContext";

const PresentStudents = () => {
  const { students, toggleHandler } = useStudent();

  return (
    <div
      className={`bg-white shadow-xl rounded-xl text-center p-3 ${
        students.length >= 4 && "overflow-y-scroll"
      }  max-h-[50vh]`}
    >
      <h2 className="mb-5 text-xl font-bold">Present Students</h2>
      {students.map(
        (student) =>
          student.isPresent && (
            <div
              key={student.id}
              className="flex justify-between flex-wrap gap-1 font-semibold my-2 bg-slate-200 p-2 rounded-md"
            >
              <p>{student.name}</p>
              <button
                onClick={() => toggleHandler(student.id)}
                className="btn  bg-green-500 shadow-green-500/50"
              >
                Accidentally Added
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default PresentStudents;
