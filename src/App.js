import { useEffect, useState } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  const [studentName, setStudentName] = useState("");
  const [allStudents, setAllStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const getAllStudents = () => {
    fetch("http://localhost:5000/students")
      .then((response) => response.json())
      .then((data) => setAllStudents(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div className="min-h-screen  bg-gradient-to-r from-amber-500 to-amber-300">
      <h1 className="text-center text-4xl font-bold py-5">
        Simple Student Attendance Application
      </h1>
      <div className="flex flex-col items-center justify-center custom-height">
        <InputArea
          states={{
            studentName,
            setStudentName,
            editMode,
            setEditMode,
            editableStudent,
            setEditableStudent,
            getAllStudents,
          }}
        />
        <OutputArea
          states={{
            allStudents,
            setStudentName,
            setEditMode,
            setEditableStudent,
            getAllStudents,
          }}
        />
      </div>
    </div>
  );
}

export default App;
