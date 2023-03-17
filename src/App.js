import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

const App = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-green-500 to-lime-500">
      <div className="text-center font-bold py-5 text-white">
        <h1 className="text-center text-4xl">Note-Taking App </h1>
        <p className="text-xl">using Context API and useReducer Hook</p>
      </div>
      <div className="flex items-center justify-center custom-height">
        <div>
          <InputArea />
          <OutputArea />
        </div>
      </div>
    </div>
  );
};

export default App;
