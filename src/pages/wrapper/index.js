import React from "react";
import { useHistory } from "react-router-dom";

import NoteModal from "../note-modal";
import LandingPage from "../landing";

const WrapperContainer = () => {
  const history = useHistory();
  const openNoteModal = () => {
    const hashArray = history.location.hash.split("/");
    const noteId = hashArray[hashArray.length - 1];
    if (noteId) return <NoteModal noteId={noteId} />;
    else return null;
  };

  return (
    <div>
      <LandingPage />
      {openNoteModal()}
    </div>
  );
};

export default WrapperContainer;
