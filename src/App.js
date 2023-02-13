import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = (value) =>
    setCount((prevState) => prevState + value);
  const decrementHandler = (value) =>
    setCount((prevState) => prevState - value);

  return (
    <div className="h-screen bg-gradient-to-r from-cyan-500 to-pink-500 flex items-center justify-center">
      <div className="w-[500] bg-white shadow-xl p-5 rounded-xl text-center font-bold">
        <h1 className="text-2xl font-bold">Multiple Counter</h1>
        <h2 className="text-4xl my-3">{count}</h2>
        <div className="grid grid-cols-3">
          <button
            onClick={() => incrementHandler(1)}
            className="btn bg-cyan-500 shadow-cyan-500/50"
          >
            Increment By 1
          </button>
          <button
            onClick={() => incrementHandler(10)}
            className="btn bg-pink-500 shadow-pink-500/50"
          >
            Increment By 10
          </button>
          <button
            onClick={() => incrementHandler(100)}
            className="btn bg-indigo-500 shadow-indigo-500/50"
          >
            Increment By 100
          </button>
          <button
            onClick={() => decrementHandler(1)}
            className="btn bg-cyan-500 shadow-cyan-500/50"
          >
            Decrement By 1
          </button>
          <button
            onClick={() => decrementHandler(10)}
            className="btn bg-pink-500 shadow-pink-500/50"
          >
            Decrement By 10
          </button>
          <button
            onClick={() => decrementHandler(100)}
            className="btn bg-indigo-500 shadow-indigo-500/50"
          >
            Decrement By 100
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
