import AbsentStudents from "./AbsentStudents";
import AllStduents from "./AllStudents";
import PresentStudents from "./PresentStudents";

const OutputArea = ({ state, dispatch }) => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 p-5">
      <AllStduents state={state} dispatch={dispatch} />
      <PresentStudents state={state} dispatch={dispatch} />
      <AbsentStudents state={state} dispatch={dispatch} />
    </div>
  );
};

export default OutputArea;
