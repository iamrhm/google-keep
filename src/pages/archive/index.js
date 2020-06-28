import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllNotes } from "../../redux/actions";

import ListContainer from "../../components/list-container";

const Archive = () => {
  console.log("iam loading");
  const dispatch = useDispatch();
  const { allNotes } = useSelector((state) => state);
  const fetchNotes = React.useCallback(() => dispatch(fetchAllNotes()), [
    dispatch
  ]);

  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);
  return <>{getArchivedNotes(allNotes)}</>;
};

function getArchivedNotes(allNotes) {
  if (Array.isArray(allNotes)) {
    const archivedNotes = allNotes.filter((note) => note.isArchived === true);
    if (archivedNotes.length) return <ListContainer notes={archivedNotes} />;
    else return <>No Data To Display</>;
  }
}

export default Archive;
