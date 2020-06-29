import React from "react";
import {
  Container,
  Footer,
  CloseButton,
  Header,
  IconContainer,
  ActivePinIcon,
  PinIcon,
  ActiveArchiveIcon,
  ArchiveIcon
} from "./style";

import { useOutsideClick } from "../../../hooks/useOutsideClick";

import TextArea from "../../text-area";

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

const NoteForm = ({ initialNote, handleSubmit, toggleForm }) => {
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
    newNoteData[name] = value;
    updateState({
      type: "UPDATE_NOTE_DATA",
      payload: { noteData: newNoteData }
    });
  }

  const submitData = () => {
    const newNoteData = { ...state.noteData };
    if (newNoteData.title !== "" || newNoteData.content !== "")
      return handleSubmit(newNoteData);
    else return toggleForm();
  };

  const togglePin = (e) => {
    e.stopPropagation();
    let updatedNote = { ...state.noteData };
    updatedNote.isPinned = !updatedNote.isPinned;
    updateState({
      type: "UPDATE_NOTE_DATA",
      payload: { noteData: updatedNote }
    });
  };

  const toggleArchive = (e) => {
    e.stopPropagation();
    let updatedNote = { ...state.note };
    updatedNote.isArchived = !updatedNote.isArchived;
    updateState({
      type: "UPDATE_NOTE_DATA",
      payload: { noteData: updatedNote }
    });
  };

  const wrapperRef = React.useRef(null);
  useOutsideClick(wrapperRef, submitData);

  return (
    <Container ref={wrapperRef}>
      <Header>
        <IconContainer>
          {state.noteData.isPinned ? (
            <ActivePinIcon onClick={(e) => togglePin(e)} />
          ) : (
            <PinIcon onClick={(e) => togglePin(e)} />
          )}
        </IconContainer>
        <TextArea
          propsRow={2}
          propsName="title"
          propsPlaceholder="Title"
          propsValue={state.noteData.title}
          handleInputChange={handleInputChange}
        />
      </Header>
      <TextArea
        propsName="content"
        propsPlaceholder="Take a note..."
        propsValue={state.noteData.content}
        handleInputChange={handleInputChange}
      />
      <Footer>
        {state.noteData.isArchived ? (
          <ActiveArchiveIcon onClick={(e) => toggleArchive(e)} />
        ) : (
          <ArchiveIcon onClick={(e) => toggleArchive(e)} />
        )}
        <CloseButton
          onClick={(e) => {
            e.stopPropagation();
            submitData();
            toggleForm();
          }}
        >
          Close
        </CloseButton>
      </Footer>
    </Container>
  );
};

export default NoteForm;
