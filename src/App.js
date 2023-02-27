import UsingUseEffect from "./components/UsingUseEffect";

function App() {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-amber-500 to-amber-300">
      <h1 className="text-center text-4xl font-bold py-5">
        Data fetching from fake server
      </h1>
      <div className="text-center">
        <UsingUseEffect />
      </div>
    </div>
  );
}

export default App;
