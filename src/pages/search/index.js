import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllNotes } from "../../redux/actions";

import noteFilter from "./note-filter";
import ListContainer from "../../components/list-container";

import { TextInfo, TextContainer } from "./style";

const Search = ({ queryParams }) => {
  const dispatch = useDispatch();
  const { allNotes } = useSelector((state) => state);
  const fetchNotes = React.useCallback(() => dispatch(fetchAllNotes()), [
    dispatch
  ]);

  React.useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);
  return <>{getFilteredNote(queryParams, allNotes)}</>;
};

function getFilteredNote(queryParams, allNotes) {
  if (queryParams) {
    const notes = noteFilter(queryParams, allNotes);
    if (notes.length) return <ListContainer notes={notes} />;
    else
      return (
        <TextContainer>
          <TextInfo>No Data To Display</TextInfo>
        </TextContainer>
      );
  }
}

export default React.memo(Search);
