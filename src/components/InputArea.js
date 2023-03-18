import React from "react";

const InputArea = ({ states }) => {
  const {
    editMode,
    setEditMode,
    studentName,
    setStudentName,
    editableStudent,
    setEditableStudent,
    getAllStudents,
  } = states;

  const addStudent = () => {
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      isPresent: "",
    };
    fetch("http://localhost:5000/students", {
      method: "POST",
      body: JSON.stringify(newStudent),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      getAllStudents();
      setStudentName("");
    });
  };

  const updateHandler = () => {
    fetch(`http://localhost:5000/students/${editableStudent.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        name: studentName,
      }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => {
      getAllStudents();
      setStudentName("");
      setEditMode(false);
      setEditableStudent(null);
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!studentName) {
          alert("Please type a valid name!");
        }
        editMode ? updateHandler(e) : addStudent(e);
      }}
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
  );
};

export default InputArea;
