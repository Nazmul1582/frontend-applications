import { useState } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  return (
    <div className="min-h-screen  bg-gradient-to-r from-amber-500 to-amber-300">
      <h1 className="text-center text-4xl font-bold py-5">
        Simple Student Attendance Application
      </h1>
      <div className="flex flex-col items-center justify-center custom-height">
        <InputArea
          studentName={studentName}
          setStudentName={setStudentName}
          allStudents={allStudents}
          setAllStudents={setAllStudents}
          editMode={editMode}
          setEditMode={setEditMode}
          editableStudent={editableStudent}
          setEditableStudent={setEditableStudent}
        />
        <OutputArea
          allStudents={allStudents}
          setAllStudents={setAllStudents}
          setStudentName={setStudentName}
          setEditMode={setEditMode}
          setEditableStudent={setEditableStudent}
        />
      </div>
    </div>
  );
}

export default App;
