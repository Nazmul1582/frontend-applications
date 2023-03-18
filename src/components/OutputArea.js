import React from "react";
import AbsentStudents from "./AbsentStudents";
import AllStudents from "./AllStudents";
import PresentStudents from "./PresentStudents";

export default function OutputArea() {
  return (
    <div className="grid grid-cols-[2fr_1fr_1fr] gap-5 p-5">
      <AllStudents />
      <PresentStudents />
      <AbsentStudents />
    </div>
  );
}
