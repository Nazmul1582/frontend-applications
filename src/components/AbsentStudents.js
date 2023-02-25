import React from "react";

export default function AbsentStudents({
  allStudents,
  accidentallyAddedHandler,
}) {
  return (
    <div
      className={`bg-white shadow-xl rounded-xl text-center p-3 ${
        allStudents.length > 4 && "overflow-y-scroll"
      }  max-h-[50vh]`}
    >
      <h2 className="mb-5 text-xl font-bold">Absent Students</h2>
      {allStudents.map(
        (student) =>
          student.isPresent === false && (
            <div
              key={student.id}
              className="flex justify-between flex-wrap gap-1 font-semibold my-2 bg-slate-200 p-2 rounded-md"
            >
              <p>{student.name}</p>
              <button
                onClick={() => accidentallyAddedHandler(student.id)}
                className="btn  bg-rose-500 shadow-rose-500/50"
              >
                Accidentally Added
              </button>
            </div>
          )
      )}
    </div>
  );
}
