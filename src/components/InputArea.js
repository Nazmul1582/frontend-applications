import { useStudent } from "../contexts/StudentContext";

const InputArea = () => {
  const { state, dispatch } = useStudent();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!state.studentName) {
          alert("Please type a valid name!");
          return;
        }
        state.editMode
          ? dispatch({
              type: "UPDATE_STUDENT",
              payload: {
                property: "name",
                studentId: state.editableStudent.id,
                value: state.studentName,
              },
            })
          : dispatch({ type: "CREATE_STUDENT" });
      }}
      className="mb-10 bg-white shadow-xl p-5 rounded-xl text-center font-bold flex justify-center items-center gap-5"
    >
      <input
        type="text"
        value={state.studentName}
        onChange={(e) => {
          dispatch({ type: "CHANGE_NAME", payload: e.target.value });
        }}
        className="p-2 rounded-md bg-slate-200 w-full border border-slate-200 focus:border-green-500 outline-0"
      />
      <button className="btn bg-green-500 shadow-green-500/50">
        {state.editMode ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default InputArea;
