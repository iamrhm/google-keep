import React from "react";
import { useHistory } from "react-router-dom";

import NoteModal from "../note-modal";
import LandingPage from "../landing";
import Search from "../search";
import ArchivePage from "../archive";

import getSearchQuery from "../../helpers/getSearchQuery";

const WrapperContainer = () => {
  const history = useHistory();

  const openNoteModal = () => {
    const hashArray = history.location.hash.split("/");
    const isNoteModal = hashArray[1] === "note" ? true : false;
    const noteId = hashArray[hashArray.length - 1];
    if (isNoteModal && noteId) return <NoteModal noteId={noteId} />;
    else return null;
  };

  const openSearch = () => {
    const searchQuery = getSearchQuery(history);
    return <Search queryParams={searchQuery} />;
  };

  const displayComponent = () => {
    const hashArray = history.location.hash.split("/");
    if (hashArray[1] === "search") {
      return openSearch();
    } else if (hashArray[1] === "archive") {
      return <ArchivePage />
    } else return <LandingPage />;
  };

  return (
    <>
      {displayComponent()}
      {openNoteModal()}
    </>
  );
};

export default WrapperContainer;
