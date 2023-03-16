const noteReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        notes: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case "CHANGE_TITLE":
      return {
        ...state,
        noteTitle: action.payload,
      };
    case "CREATE_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
        noteTitle: "",
      };
    case "EDIT_NOTE":
      return {};
    case "UPDATE_NOTE":
      return {};
    case "REMOVE_NOTE":
      // return fetch(`http://localhost:4000/notes/${action.payload}`, {
      //   method: "DELETE",
      // });
      return {};
    default:
      return state;
  }
};

export default noteReducer;
