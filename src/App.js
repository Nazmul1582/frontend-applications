function App() {
  return (
    <div className="min-h-screen  bg-gradient-to-r from-amber-300 to-amber-500">
      <h1 className="text-center text-4xl font-bold py-5">
        Simple Student Attendance Application
      </h1>
      <div className="flex flex-col items-center justify-center custom-height">
        <form className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex justify-center items-center gap-5">
          <input
            type="text"
            className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-green-500 outline-0"
          />
          <button className="btn bg-green-500 shadow-green-500/50">Add</button>
        </form>
        <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 p-5">
          <div className="bg-white shadow-xl rounded-xl text-center p-3">
            <h2 className="mb-5 text-xl font-bold">All Students</h2>
            <div className="flex justify-between gap-3 font-semibold my-2 bg-slate-200 px-1 py-2 rounded-md">
              <p>Student Name</p>
              <div className=" flex gap-1">
                <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                  Edit
                </button>
                <button className="btn  bg-cyan-500 shadow-cyan-500/50">
                  Remove
                </button>
                <button className="btn  bg-amber-500 shadow-amber-500/50">
                  Make present
                </button>
                <button className="btn  bg-pink-500 shadow-pink-500/50">
                  Make Absent
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-3 font-semibold my-2 bg-slate-200 px-1 py-2 rounded-md">
              <p>Student Name</p>
              <div className=" flex gap-1">
                <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                  Edit
                </button>
                <button className="btn  bg-cyan-500 shadow-cyan-500/50">
                  Remove
                </button>
                <button className="btn  bg-amber-500 shadow-amber-500/50">
                  Make present
                </button>
                <button className="btn  bg-pink-500 shadow-pink-500/50">
                  Make Absent
                </button>
              </div>
            </div>
            <div className="flex justify-between gap-3 font-semibold my-2 bg-slate-200 px-1 py-2 rounded-md">
              <p>Student Name</p>
              <div className=" flex gap-1">
                <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                  Edit
                </button>
                <button className="btn  bg-cyan-500 shadow-cyan-500/50">
                  Remove
                </button>
                <button className="btn  bg-amber-500 shadow-amber-500/50">
                  Make present
                </button>
                <button className="btn  bg-pink-500 shadow-pink-500/50">
                  Make Absent
                </button>
              </div>
            </div>
            {/* <div className="flex flex-wrap gap-1 font-semibold my-2 bg-slate-200 py-2 rounded-md">
              <p>Student Name</p>
              <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                Edit
              </button>
              <button className="btn  bg-cyan-500 shadow-cyan-500/50">
                Remove
              </button>
              <button className="btn  bg-amber-500 shadow-amber-500/50">
                Make present
              </button>
              <button className="btn  bg-pink-500 shadow-pink-500/50">
                Make Absent
              </button>
            </div>
            <div className="flex flex-wrap gap-1 font-semibold my-2 bg-slate-200 py-2 rounded-md">
              <p>Student Name</p>
              <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                Edit
              </button>
              <button className="btn  bg-cyan-500 shadow-cyan-500/50">
                Remove
              </button>
              <button className="btn  bg-amber-500 shadow-amber-500/50">
                Make present
              </button>
              <button className="btn  bg-pink-500 shadow-pink-500/50">
                Make Absent
              </button>
            </div> */}
          </div>
          <div className="bg-white shadow-xl rounded-xl text-center p-3">
            <h2 className="mb-5 text-xl font-bold">Present Students</h2>
            <div className="flex flex-wrap gap-1 font-semibold my-2 bg-slate-200 p-2 rounded-md">
              <p>Student Name</p>
              <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                Accidentally Added
              </button>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl text-center p-3">
            <h2 className="mb-5 text-xl font-bold">Absent Students</h2>
            <div className="flex flex-wrap gap-1 font-semibold my-2 bg-slate-200 p-2 rounded-md">
              <p>Student Name</p>
              <button className="btn  bg-indigo-500 shadow-indigo-500/50">
                Accidentally Added
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// <form
//   onSubmit={(e) => {
//     editMode ? updateHandler(e) : createHandler(e);
//   }}
//   className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex justify-center items-center gap-5"
// >
//   <input
//     type="text"
//     value={noteTitle}
//     onChange={(e) => setNoteTitle(e.target.value)}
//     className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-cyan-500 outline-0"
//   />
//   <button
//     type="submit"
//     className="btn bg-cyan-500 shadow-cyan-500/50"
//   >
//     {editMode ? "Update" : "Add"}
//   </button>
// </form>

// <div
//   className={`bg-white shadow-xl rounded-xl text-center font-bold p-5  ${
//     notes.length === 0 ? "hidden" : "block"
//   }`}
// >
//   <div
//     className={` max-h-[300px] ${
//       notes.length >= 4 && "overflow-y-scroll"
//     }`}
//   >
//     {notes.map((note) => (
//       <div
//         key={note.id}
//         className="bg-slate-200 flex gap-5 items-center justify-between rounded-md p-3 my-3"
//       >
//         <p className="text-xl">{note.title}</p>
//         <div className="flex gap-3">
//           <button
//             onClick={() => editHandler(note.id)}
//             type="button"
//             className="btn  bg-indigo-500 shadow-indigo-500/50"
//           >
//             Edit
//           </button>
//           <button
//             onClick={() => removeHandler(note.id)}
//             type="button"
//             className="btn  bg-pink-500 shadow-pink-500/50"
//           >
//             Remove
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
