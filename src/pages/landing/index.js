import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import List from "../../components/list";
import CreateNote from "../../components/create-note";

import { fetchAllNotes } from "../../redux/actions";

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { allNotes, displayPanelStatus } = useSelector((state) => state);
  const fetchNotes = React.useCallback(() => dispatch(fetchAllNotes()), [
    dispatch
  ]);
  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  function openNoteModal(noteId) {
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
    </div>
  );
};

export default LandingPage;

function getPinnedNotes(allNotes, openNoteModal) {
  if (Array.isArray(allNotes)) {
    const pinnedNotes = allNotes.filter(
      (note) => note.isPinned === true && note.isArchived !== true
    );
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
