export const initialState = {
  studentName: "",
  students: [],
  editMode: false,
  editableStudent: null,
};

export const StudentReducer = (state = initialState, action) => {
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
        studentName: toBeEditedStudent.name,
        editMode: true,
        editableStudent: toBeEditedStudent,
      };
    case "UPDATE_STUDENT":
      const updatedStudents = state.students.map((student) => {
        if (student.id === action.payload.studentId) {
          student[action.payload.property] = action.payload.value;
        }
        return student;
      });
      return {
        ...state,
        students: updatedStudents,
        studentName: "",
        editMode: false,
        editableStudent: null,
      };
    case "REMOVE_STUDENT":
      const deleteStudent = state.students.filter(
        (student) => student.id !== action.payload
      );
      return {
        ...state,
        students: deleteStudent,
      };
    case "ATTENDANCE_STUDENT":
      const updateStudent = state.students.map((student) => {
        if (student.id === action.payload.studentId) {
          if (student.isPresent !== undefined) {
            alert(`${student.name} is already in a list!`);
          } else {
            student.isPresent = action.payload.value;
          }
        }
        return student;
      });
      return {
        ...state,
        students: updateStudent,
      };
    case "TOGGLE_STUDENT":
      const modifiedStudents = state.students.map((student) => {
        if (student.id === action.payload) {
          student.isPresent = !student.isPresent;
        }
        return student;
      });
      return {
        ...state,
        students: modifiedStudents,
      };
    default:
      return state;
  }
};
