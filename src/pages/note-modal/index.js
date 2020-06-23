import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNoteDetailById, updateNote } from "../../redux/actions";
import NoteForm from "../../components/forms/note";

const NoteModal = () => {
  const dispatch = useDispatch();
  const { router, currentNote } = useSelector((state) => state);
  const hashArray = router.location.hash.split("/");
  const noteId = hashArray[hashArray.length - 1];

  const fetchNote = React.useCallback(() => {
    if (noteId) dispatch(getNoteDetailById(noteId));
  }, [dispatch, noteId]);

  function updateNoteData(newPost) {
    dispatch(updateNote(newPost));
  }

  React.useEffect(() => {
    fetchNote();
  }, [fetchNote, dispatch]);

  return (
    <div>
      {console.log(currentNote, noteId)}
      {currentNote && noteId ? (
        <div>
          <NoteForm initialNote={currentNote} saveNote={updateNoteData} />
        </div>
      ) : null}
    </div>
  );
};

export default NoteModal;
