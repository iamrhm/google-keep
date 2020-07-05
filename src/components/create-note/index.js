import React from "react";
import { useDispatch } from "react-redux";

import NoteForm from "../forms/note";

import { submitNewNote } from "../../redux/actions";

import { Container, TakeNote } from "./style";

const CreateNote = () => {
  const dispatch = useDispatch();
  const [showForm, toggleForm] = React.useState(false);
  function saveNote(newPost) {
    toggleForm(!showForm);
    dispatch(submitNewNote(newPost));
  }
  function handleClose() {
    toggleForm(!showForm);
  }
  return (
    <Container>
      {showForm ? (
        <NoteForm initialNote={null} handleSubmit={saveNote} toggleForm={handleClose} />
      ) : (
        <TakeNote onClick={(e) => handleClose()}>Take a note...</TakeNote>
      )}
    </Container>
  );
};

export default CreateNote;
