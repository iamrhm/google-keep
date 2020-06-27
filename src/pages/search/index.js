import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllNotes } from "../../redux/actions";

import noteFilter from "./note-filter";
import ListContainer from "../../components/list-container";

const Search = ({ queryParams }) => {
  const dispatch = useDispatch();
  const { allNotes } = useSelector((state) => state);
  const fetchNotes = React.useCallback(() => dispatch(fetchAllNotes()), [
    dispatch
  ]);

  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);
  return <div>{getFilteredNote(queryParams, allNotes)}</div>;
};

function getFilteredNote(queryParams, allNotes) {
  if (queryParams) {
    const notes = noteFilter(queryParams, allNotes);
    return <ListContainer notes={notes} />;
  }
}

export default React.memo(Search);
