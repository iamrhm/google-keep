import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import List from "../../components/list";
import CreateNote from "../../components/create-note";

import { fetchAllNotes } from "../../redux/actions";

import {
  ListContainer,
  ListType,
  ListWrapper,
  Container,
  CreateNoteContainer
} from "./style";

const LandingPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { allNotes } = useSelector((state) => state);
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
    <Container>
      <CreateNoteContainer>
        <CreateNote />
      </CreateNoteContainer>
      <ListWrapper>
        {getPinnedNotes(allNotes, openNoteModal)}
        {getOtherNotes(allNotes, openNoteModal)}
      </ListWrapper>
    </Container>
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
        <>
          <ListType>Pinned</ListType>
          <ListContainer>{list}</ListContainer>
        </>
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
        <>
          <ListType>{pinnedNotes.length ? "Other" : "Note"}</ListType>
          <ListContainer>{list}</ListContainer>
        </>
      );
  }
}

