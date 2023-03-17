import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

function App() {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-amber-500 to-amber-300">
      <div className="text-center font-bold py-5">
        <h1 className="text-4xl">Simple Student Attendance Application</h1>
        <p className="text-xl">using Context API</p>
      </div>
      <div className="flex flex-col items-center justify-center custom-height">
        <InputArea />
        <OutputArea />
      </div>
    </div>
  );
}

export default App;
