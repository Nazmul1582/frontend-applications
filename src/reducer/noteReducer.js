const noteReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...state,
        noteTitle: action.payload,
      };
    case "CREATE_NOTE":
      const newNote = {
        id: Date.now() + "",
        title: state.noteTitle,
      };
      return {
        ...state,
        notes: [...state.notes, newNote],
        noteTitle: "",
      };
    case "EDIT_NOTE":
      const toBeEditedNote = state.notes.find(
        (item) => item.id === action.payload
      );
      return {
        ...state,
        editMode: true,
        noteTitle: toBeEditedNote.title,
        editableNote: toBeEditedNote,
      };
    case "UPDATE_NOTE":
      const updatedNotes = state.notes.filter((note) => {
        if (note.id === state.editableNote.id) {
          note.title = state.noteTitle;
        }
        return note;
      });
      return {
        ...state,
        notes: updatedNotes,
        noteTitle: "",
        editMode: false,
        editableNote: null,
      };
    case "REMOVE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload),
      };
    default:
      return state;
  }
};

export default noteReducer;
