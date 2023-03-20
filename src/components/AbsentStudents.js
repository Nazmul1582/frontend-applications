import { useStudent } from "../contexts/StudentContext";

const AbsentStudents = () => {
  const { state, dispatch } = useStudent();
  return (
    <div
      className={`bg-white shadow-xl rounded-xl text-center p-3 ${
        state.students.length >= 4 && "overflow-y-scroll"
      }  max-h-[50vh]`}
    >
      <h2 className="mb-5 text-xl font-bold">Absent Students</h2>
      {state.students.map(
        (student) =>
          student.isPresent === false && (
            <div
              key={student.id}
              className="flex justify-between flex-wrap gap-1 font-semibold my-2 bg-slate-200 p-2 rounded-md"
            >
              <p>{student.name}</p>
              <button
                onClick={() =>
                  dispatch({
                    type: "UPDATE_STUDENT",
                    payload: {
                      property: "isPresent",
                      studentId: student.id,
                      value: true,
                    },
                  })
                }
                className="btn  bg-rose-500 shadow-rose-500/50"
              >
                Accidentally Added
              </button>
            </div>
          )
      )}
    </div>
  );
};

export default AbsentStudents;
