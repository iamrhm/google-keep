import React from "react";
import { useHistory } from "react-router-dom";

import List from "../../components/list";
import { ListWrapper, Container } from "./style";

const ListContainer = ({ notes }) => {
  const history = useHistory();
  function openNoteModal(noteId) {
    history.push({
      hash: `/note/${noteId}`
    });
  }
  return (
    <Container>
      <ListWrapper>{getNotes(notes, openNoteModal)}</ListWrapper>
    </Container>
  );
};

export default ListContainer;

function getNotes(notes, openNoteModal) {
  if (Array.isArray(notes)) {
    const list = notes.map((note) => (
      <List key={note.id} note={note} openNoteModal={openNoteModal} />
    ));
    if (list.length) return <>{list}</>;
  }
}
