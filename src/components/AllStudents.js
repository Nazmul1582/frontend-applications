import React from "react";
import { useStudent } from "../contexts/StudentContext";

const AllStduents = () => {
  const { state, dispatch } = useStudent();

  return (
    <div
      className={`bg-white shadow-xl rounded-xl text-center p-3 ${
        state.students.length >= 4 && "overflow-y-scroll"
      }  max-h-[50vh]`}
    >
      <h2 className="mb-5 text-xl font-bold">All Students</h2>
      {state.students.map((student) => (
        <div
          key={student.id}
          className="flex justify-between gap-3 font-semibold my-2 bg-slate-200 p-2 rounded-md"
        >
          <p>{student.name}</p>
          <div className=" flex gap-1">
            <button
              onClick={() =>
                dispatch({ type: "EDIT_STUDENT", payload: student.id })
              }
              className="btn  bg-indigo-500 shadow-indigo-500/50"
            >
              Edit
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_STUDENT", payload: student.id })
              }
              className="btn  bg-cyan-500 shadow-cyan-500/50"
            >
              Remove
            </button>
            <button
              onClick={() => {
                if (student.isPresent !== undefined) {
                  alert(`${student.name} is already in a list!`);
                  return;
                }
                dispatch({
                  type: "UPDATE_STUDENT",
                  payload: {
                    property: "isPresent",
                    studentId: student.id,
                    value: true,
                  },
                });
              }}
              className="btn  bg-amber-500 shadow-amber-500/50"
            >
              Make present
            </button>
            <button
              onClick={() => {
                if (student.isPresent !== undefined) {
                  alert(`${student.name} is already in a list!`);
                  return;
                }
                dispatch({
                  type: "UPDATE_STUDENT",
                  payload: {
                    property: "isPresent",
                    studentId: student.id,
                    value: false,
                  },
                });
              }}
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
