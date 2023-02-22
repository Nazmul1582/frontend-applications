import { useState } from "react";

function App() {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const addStudent = (e) => {
    e.preventDefault();
    if (!studentName) {
      alert("Please type a valid name");
      return;
    }
    setAllStudents([
      {
        id: Date.now() + "",
        name: studentName,
        isPresent: undefined,
      },
      ...allStudents,
    ]);
    setStudentName("");
  };

  const editHandler = (studentId) => {
    setEditMode(true);
    const toBeEdited = allStudents.find((student) => student.id === studentId);
    setEditableStudent(toBeEdited);
    setStudentName(toBeEdited.name);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
      alert("Please enter a vali name");
      return;
    }
    const newStudentsList = allStudents.map((student) => {
      if (student.id === editableStudent.id) {
        student.name = studentName;
      }
      return student;
    });
    setAllStudents(newStudentsList);
    setEditMode(false);
    setEditableStudent(null);
    setStudentName("");
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
        }
      }
      return student;
    });
    setAllStudents(newStudentsList);
  };

  const accidentallyAddedHandler = (studentId) => {
    const newStudentsList = allStudents.map((student) => {
      if (student.id === studentId) {
        student.isPresent = !student.isPresent;
      }
      return student;
    });
    setAllStudents(newStudentsList);
  };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-amber-500 to-amber-300">
      <h1 className="text-center text-4xl font-bold py-5">
        Simple Student Attendance Application
      </h1>
      <div className="flex flex-col items-center justify-center custom-height">
        <form
          onSubmit={(e) => (editMode ? updateHandler(e) : addStudent(e))}
          className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex justify-center items-center gap-5"
        >
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-green-500 outline-0"
          />
          <button className="btn bg-green-500 shadow-green-500/50">
            {editMode ? "Update" : "Add"}
          </button>
        </form>
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 p-5">
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
          <div
            className={`bg-white shadow-xl rounded-xl text-center p-3 ${
              allStudents.length > 4 && "overflow-y-scroll"
            }  max-h-[50vh]`}
          >
            <h2 className="mb-5 text-xl font-bold">Present Students</h2>
            {allStudents.map(
              (student) =>
                student.isPresent && (
                  <div className="flex justify-between flex-wrap gap-1 font-semibold my-2 bg-slate-200 p-2 rounded-md">
                    <p>{student.name}</p>
                    <button
                      onClick={() => accidentallyAddedHandler(student.id)}
                      className="btn  bg-green-500 shadow-green-500/50"
                    >
                      Accidentally Added
                    </button>
                  </div>
                )
            )}
          </div>
          <div
            className={`bg-white shadow-xl rounded-xl text-center p-3 ${
              allStudents.length > 4 && "overflow-y-scroll"
            }  max-h-[50vh]`}
          >
            <h2 className="mb-5 text-xl font-bold">Absent Students</h2>
            {allStudents.map(
              (student) =>
                student.isPresent === false && (
                  <div className="flex justify-between flex-wrap gap-1 font-semibold my-2 bg-slate-200 p-2 rounded-md">
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
        </div>
      </div>
    </div>
  );
}

export default App;
