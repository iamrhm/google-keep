import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllNotes } from "../../redux/actions";

import ListContainer from "../../components/list-container";

import { TextInfo, TextContainer } from "./style";

const Archive = () => {
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
    else
      return (
        <TextContainer>
          <TextInfo>No Data To Display</TextInfo>
        </TextContainer>
      );
  }
}

export default Archive;
