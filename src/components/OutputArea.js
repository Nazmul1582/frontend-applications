import AbsentStudents from "./AbsentStudents";
import AllStduents from "./AllStudents";
import PresentStudents from "./PresentStudents";

const OutputArea = () => {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 p-5">
      <AllStduents />
      <PresentStudents />
      <AbsentStudents />
    </div>
  );
};

export default OutputArea;
