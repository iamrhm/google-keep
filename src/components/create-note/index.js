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
  function handleClick() {
    toggleForm(!showForm);
  }
  return (
    <Container>
      {showForm ? (
        <NoteForm initialNote={null} handleSubmit={saveNote} toggleForm={handleClick} />
      ) : (
        <TakeNote onClick={(e) => handleClick()}>Take a note...</TakeNote>
      )}
    </Container>
  );
};

export default CreateNote;
