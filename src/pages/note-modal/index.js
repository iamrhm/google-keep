import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNoteDetailById, updateNote } from "../../redux/actions";
import NoteForm from "../../components/forms/note";

const NoteModal = () => {
  const dispatch = useDispatch();
  const { router, currentNote } = useSelector((state) => state);
  const noteId = router.location.hash.split("/")[
    router.location.hash.length - 1
  ];

  const fetchNote = React.useCallback(() => {
    if (noteId) dispatch(getNoteDetailById(noteId));
  }, [dispatch, noteId]);

  function updateNoteData(newPost) {
    dispatch(updateNote(newPost));
  }

  React.useEffect(() => {
    fetchNote();
  }, [fetchNote]);

  return (
    <div>
      {currentNote && noteId ? (
        <div>
          <NoteForm initialNote={currentNote} saveNote={updateNoteData} />
        </div>
      ) : null}
    </div>
  );
};

export default NoteModal;
