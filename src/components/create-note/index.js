import React from "react";
import { useDispatch } from "react-redux";

import NoteForm from "../forms/note";

import { addNewNote } from "../../redux/actions";

const CreateNote = () => {
  const dispatch = useDispatch();
  const [showForm, toggleForm] = React.useState(false);
  function saveNote(newPost) {
    dispatch(addNewNote(newPost));
  }
  function handleClick() {
    toggleForm(!showForm);
  }
  return (
    <div>
      {showForm ? (
        <NoteForm initialNote={null} saveNote={saveNote} />
      ) : (
        <div onClick={(e) => handleClick()}>Add Forms</div>
      )}
    </div>
  );
};

export default CreateNote;
