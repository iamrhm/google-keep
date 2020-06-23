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

  return (
    <div>
      <div>
        <CreateNote />
      </div>
      {displayPanelStatus.showArchived ? (
        <div>{getArchivedNotes(allNotes)}</div>
      ) : (
        <React.Fragment>
          <div>
            <p>Pinned Notes</p>
            {getPinnedNotes(allNotes)}
          </div>
          <div>
            <p>Other Notes</p>
            {getOtherNotes(allNotes)}
          </div>
        </React.Fragment>
      )}
      <NoteModal />
    </div>
  );
};

export default LandingPage;

function getPinnedNotes(allNotes) {
  if (Array.isArray(allNotes)) {
    const pinnedNotes = allNotes.filter((note) => note.isPinned === true);
    const list = pinnedNotes.map((note) => <List key={note.id} note={note} />);
    return (
      <div>
        <span>Pinned</span>
        {list}
      </div>
    );
  }
}

function getOtherNotes(allNotes) {
  if (Array.isArray(allNotes)) {
    const otherNotes = allNotes.filter(
      (note) => note.isPinned !== true && note.isArchived !== true
    );
    const list = otherNotes.map((note) => <List key={note.id} note={note} />);
    return (
      <div>
        <span>Other</span>
        {list}
      </div>
    );
  }
}

function getArchivedNotes(allNotes) {
  if (Array.isArray(allNotes)) {
    const archivedNotes = allNotes.filter((note) => note.isArchived === true);
    const list = archivedNotes.map((note) => (
      <List key={note.id} note={note} />
    ));
    return (
      <div>
        <span>Archived</span>
        {list}
      </div>
    );
  }
}
