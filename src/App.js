import InputArea from "./components/InputArea";
import OutputArea from "./components/OutputArea";

const App = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-green-500 to-lime-500">
      <h1 className="text-center text-4xl font-bold py-5 text-white">
        Note Taking App using Context API and useReducer Hook
      </h1>
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
