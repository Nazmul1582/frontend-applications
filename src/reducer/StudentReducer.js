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
      const updatedStudent = state.students.map((student) => {
        if (student.id === action.payload.studentId) {
          student[action.payload.property] = action.payload.value;
        }
        return student;
      });
      return {
        students: updatedStudent,
        studentName: "",
        editMode: false,
        editableStudent: null,
      };
    case "REMOVE_STUDENT":
      return {
        ...state,
        students: state.students.filter(
          (student) => student.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default studentReducer;
