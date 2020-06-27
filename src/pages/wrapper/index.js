import React from "react";
import { useHistory } from "react-router-dom";

import NoteModal from "../note-modal";
import LandingPage from "../landing";
import Search from "../search";

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

  const showSearch = () => {
    const hashArray = history.location.hash.split("/");
    const isSearch = hashArray[1] === "search" ? true : false;
    const searchQuery = getSearchQuery(history);
    if (isSearch) {
      return <Search queryParams={searchQuery} />;
    } else return <LandingPage />;
  };

  return (
    <>
      {showSearch()}
      {openNoteModal()}
    </>
  );
};

export default WrapperContainer;
