const studentReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return {
        ...state,
        studentName: action.payload,
      };
    case "CREATE_STUDENT":
      const newStudent = {
        id: Date.now() + "",
        name: state.studentName,
        isPresent: undefined,
      };
      return {
        ...state,
        students: [...state.students, newStudent],
        studentName: "",
      };
    case "EDIT_STUDENT":
      const toBeEditedStudent = state.students.find(
        (student) => student.id === action.payload
      );
      return {
        ...state,
        editMode: true,
        studentName: toBeEditedStudent.name,
        editableStudent: toBeEditedStudent,
      };
    case "UPDATE_STUDENT":
      const updateStudents = state.students.map((student) => {
        if (student.id === action.payload.studentId) {
          student[action.payload.property] = action.payload.value;
        }
        return student;
      });
      return {
        ...state,
        students: updateStudents,
        studentName: "",
        editMode: false,
        editableStudent: null,
      };
    case "REMOVE_STUDENT":
      const updatedStudents = state.students.filter(
        (student) => student.id !== action.payload
      );
      return {
        ...state,
        students: updatedStudents,
      };
    default:
      return state;
  }
};
export default studentReducer;
