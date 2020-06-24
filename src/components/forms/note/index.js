import React from "react";

function init(initialNote) {
  if (initialNote !== null) return { noteData: initialNote };
  else {
    return {
      noteData: {
        title: "",
        content: "",
        isPinned: false,
        isArchived: false
      }
    };
  }
}

function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_NOTE_DATA":
      return { ...state, noteData: payload.noteData };
    default:
      return state;
  }
}

const NoteForm = ({ initialNote, handleSubmit }) => {
  const [state, updateState] = React.useReducer(reducer, initialNote, init);

  React.useEffect(() => {
    if (initialNote !== null)
      updateState({
        type: "UPDATE_NOTE_DATA",
        payload: { noteData: initialNote }
      });
  }, [initialNote]);

  function handleInputChange(e) {
    const newNoteData = state.noteData;
    const name = e.target.name;
    const value = e.target.value;
    newNoteData[name] = value.trim();
    updateState({
      type: "UPDATE_NOTE_DATA",
      payload: { noteData: newNoteData }
    });
  }

  const submitData = () => {
    const newNoteData = { ...state.noteData };
    return handleSubmit(newNoteData);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <div>
              <p>Title</p>
              <input
                name="title"
                required={true}
                type="text"
                placeholder="Enter Title"
                value={state.noteData.title}
                onChange={(e) => {
                  e.preventDefault();
                  handleInputChange(e);
                }}
              />
            </div>
          </div>
          <div>
            <div>
              <p>Content</p>
              <input
                name="content"
                required={true}
                type="text"
                placeholder="Write Your Note"
                value={state.noteData.content}
                onChange={(e) => {
                  e.preventDefault();
                  handleInputChange(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              submitData();
            }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteForm;
