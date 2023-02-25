export default function InputArea({
  studentName,
  setStudentName,
  allStudents,
  setAllStudents,
  editMode,
  setEditMode,
  editableStudent,
  setEditableStudent,
}) {
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

  const updateHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
      alert("Please enter a valid name");
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

  return (
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
  );
}
