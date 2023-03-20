import { useReducer } from "react";
import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";
import studentReducer from "./reducer/studentReducer";

const initialState = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
};

function App() {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  return (
    <div className="min-h-screen  bg-gradient-to-r from-amber-500 to-amber-300">
      <h1 className="text-center text-4xl font-bold py-5">
        Simple Student Attendance Application
      </h1>
      <div className="flex flex-col items-center justify-center custom-height">
        <InputArea state={state} dispatch={dispatch} />
        <OutputArea state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
