function App() {
  return (
    <div className="h-screen  bg-gradient-to-r from-cyan-500 to-pink-500">
      <h1 className="text-center text-4xl font-bold py-3 text-white">
        CRUD Application
      </h1>
      <div className="flex items-center justify-center min-h-[500px]">
        <form>
          <div className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex gap-5">
            <input
              type="text"
              className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-cyan-500 outline-0"
            />
            <button className="btn bg-cyan-500 shadow-cyan-500/50">
              Create
            </button>
          </div>

          <div className="bg-white shadow-xl p-5 rounded-xl text-center font-semibold max-h-[300px]">
            <div className="bg-slate-200 flex gap-5 items-center rounded-md p-3 mb-3">
              <p>A crud application created by reactjs and tailwind css</p>
              <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                Edit
              </button>
              <button className="btn  bg-pink-500 shadow-pink-500/50">
                Update
              </button>
            </div>

            <div className="bg-slate-200 flex gap-5 items-center rounded-md p-3 mb-3">
              <p>Note 2</p>
              <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                Edit
              </button>
              <button className="btn  bg-pink-500 shadow-pink-500/50">
                Update
              </button>
            </div>
            <div className="bg-slate-200 flex gap-5 items-center rounded-md p-3 mb-3">
              <p>Note 3</p>
              <button className="btn bg-indigo-500 shadow-indigo-500/50">
                Edit
              </button>
              <button className="btn bg-pink-500 shadow-pink-500/50">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
