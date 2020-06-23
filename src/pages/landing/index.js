import React from "react";
import { useDispatch, useSelector } from "react-redux";

import List from "../../components/list";
import NoteModal from "../note-modal";
import CreateNote from "../../components/create-note";

import { fetchAllNotes } from "../../redux/actions";

const LandingPage = ({ history }) => {
  const dispatch = useDispatch();
  const { allNotes, displayPanelStatus } = useSelector((state) => state);
  const fetchNotes = React.useCallback(() => dispatch(fetchAllNotes()), [
    dispatch
  ]);
  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  function openNoteModal(noteId) {
    console.log("noteId", noteId);
    history.push({
      hash: `/note/${noteId}`
    });
  }
  return (
    <div>
      <div>
        <CreateNote />
      </div>
      {displayPanelStatus.showArchived ? (
        <div>{getArchivedNotes(allNotes, openNoteModal)}</div>
      ) : (
        <>
          <div>{getPinnedNotes(allNotes, openNoteModal)}</div>
          <div>{getOtherNotes(allNotes, openNoteModal)}</div>
        </>
      )}
      <NoteModal />
    </div>
  );
};

export default LandingPage;

function getPinnedNotes(allNotes, openNoteModal) {
  if (Array.isArray(allNotes)) {
    const pinnedNotes = allNotes.filter((note) => note.isPinned === true);
    const list = pinnedNotes.map((note) => (
      <List key={note.id} note={note} openNoteModal={openNoteModal} />
    ));
    if (list.length)
      return (
        <div>
          <span>Pinned</span>
          {list}
        </div>
      );
  }
}

function getOtherNotes(allNotes, openNoteModal) {
  if (Array.isArray(allNotes)) {
    const pinnedNotes = allNotes.filter((note) => note.isPinned === true);
    const otherNotes = allNotes.filter(
      (note) => note.isPinned !== true && note.isArchived !== true
    );
    const list = otherNotes.map((note) => (
      <List key={note.id} note={note} openNoteModal={openNoteModal} />
    ));
    if (list.length)
      return (
        <div>
          <span>{pinnedNotes.length ? "Other" : "Note"}</span>
          {list}
        </div>
      );
  }
}

function getArchivedNotes(allNotes, openNoteModal) {
  if (Array.isArray(allNotes)) {
    const archivedNotes = allNotes.filter((note) => note.isArchived === true);
    const list = archivedNotes.map((note) => (
      <List key={note.id} note={note} openNoteModal={openNoteModal} />
    ));
    return (
      <div>
        <span>Archived</span>
        {list}
      </div>
    );
  }
}
