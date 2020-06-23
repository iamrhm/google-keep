import React from "react";
import { useSelector } from "react-redux";

import NoteModal from "../note-modal";
import LandingPage from "../landing";

const Wrapper = () => {
  const { router } = useSelector((state) => state);

  const openNoteModal = React.useCallback(() => {
    const hashArray = router.location.hash.split("/");
    const noteId = hashArray[hashArray.length - 1];
    if (noteId) return <NoteModal noteId={noteId} />;
    else return null;
  }, [router]);

  return (
    <div>
      <LandingPage />
      {openNoteModal()}
    </div>
  );
};

export default Wrapper;
