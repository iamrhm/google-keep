import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { getNoteDetailById, updateNote } from "../../redux/actions";
import NoteForm from "../../components/forms/note";

import { NotFormContainer } from "./style";

const NoteModal = ({ noteId }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentNote } = useSelector((state) => state);

  const fetchNote = React.useCallback(() => {
    if (noteId) dispatch(getNoteDetailById(noteId));
  }, [dispatch, noteId]);

  function updateNoteData(newNoteData) {
    dispatch(updateNote(newNoteData));
    history.goBack();
  }

  React.useEffect(() => {
    fetchNote();
  }, [fetchNote, noteId]);

  function handleClick() {
    history.goBack();
  }

  const showNoteForm = () => {
    if (currentNote && noteId)
      return (
        <NoteForm
          initialNote={currentNote}
          handleSubmit={updateNoteData}
          toggleForm={handleClick}
        />
      );
  };
  return <NotFormContainer>{showNoteForm()}</NotFormContainer>;
};

export default NoteModal;
