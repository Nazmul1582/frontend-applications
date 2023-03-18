import AbsentStudents from "./AbsentStudents";
import AllStduents from "./AllStduents";
import PresentStudents from "./PresentStudents";

const OutputArea = ({ states }) => {
  const toggleHandler = (studentId) => {
    const student = states.allStudents.find(
      (student) => student.id === studentId
    );
    fetch(`http://localhost:5000/students/${studentId}`, {
      method: "PATCH",
      body: JSON.stringify({ isPresent: !student.isPresent }),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    }).then(() => states.getAllStudents());
  };

  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 p-5">
      <AllStduents states={states} />
      <PresentStudents
        allStudents={states.allStudents}
        toggleHandler={toggleHandler}
      />
      <AbsentStudents
        allStudents={states.allStudents}
        toggleHandler={toggleHandler}
      />
    </div>
  );
};

export default OutputArea;
