import React from "react";

export default function AbsentStudents({ students, toggleStudent }) {
  // const toggleStudent = (studentId) => {
  //   // const singleStudent = students.find((student) => student.id === studentId);
  //   // console.log(singleStudent.isPresent);

  //   // if (singleStudent.isPresent) {
  //   //   singleStudent.isPresent = false;
  //   //   console.log(singleStudent.isPresent, "if");
  //   // } else {
  //   //   singleStudent.isPresent = true;
  //   //   console.log(singleStudent.isPresent, "else");
  //   // }
  //   fetch(`http://localhost:5000/students/${studentId}`, {
  //     method: "PATCH",
  //     body: JSON.stringify({
  //       isPresent: true,
  //     }),
  //     headers: {
  //       "Content-Type": "application/json; charset=UTF-8",
  //     },
  //   }).then(() => getStudents());
  // };
  return (
    <div
      className={`bg-white shadow-xl rounded-xl text-center p-3 ${
        students.length >= 4 && "overflow-y-scroll"
      }  max-h-[50vh]`}
    >
      <h2 className="mb-5 text-xl font-bold">Absent Students</h2>
      {students.map(
        (student) =>
          student.isPresent === false && (
            <div
              key={student.id}
              className="flex justify-between flex-wrap gap-1 font-semibold my-2 bg-slate-200 p-2 rounded-md"
            >
              <p>{student.name}</p>
              <button
                onClick={() => toggleStudent(student.id)}
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
