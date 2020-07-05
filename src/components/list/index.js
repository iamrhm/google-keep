import React from "react";
import { useDispatch } from "react-redux";
import { updateNote, deleteNoteById } from "../../redux/actions";

import {
  Container,
  Wrapper,
  Header,
  Footer,
  ArchiveIcon,
  ActiveArchiveIcon,
  PinIcon,
  ActivePinIcon,
  Text,
  IconContainer,
  ContentText,
  DeleteIcon,
  ActionPanel
} from "./style";

import textFormatter from "../../helpers/formatText";

const List = ({ note, openNoteModal = () => {} }) => {
  const dispatch = useDispatch();
  const [isHovered, setIiHovered] = React.useState(false);

  const toggleArchive = (e) => {
    e.stopPropagation();
    let updatedNote = { ...note };
    updatedNote.isArchived = !updatedNote.isArchived;
    dispatch(updateNote(updatedNote));
  };

  const togglePin = (e) => {
    e.stopPropagation();
    let updatedNote = { ...note };
    updatedNote.isPinned = !updatedNote.isPinned;
    dispatch(updateNote(updatedNote));
  };

  const deleteNote = (e, noteId) => {
    e.stopPropagation();
    dispatch(deleteNoteById(noteId));
  };

  return (
    <Wrapper
      isHovered={isHovered}
      onMouseEnter={() => setIiHovered(true)}
      onMouseLeave={() => setIiHovered(false)}
      onClick={() => openNoteModal(note.id)}
    >
      <Container>
        <Header>
          <IconContainer isHovered={isHovered || note.isPinned}>
            {note.isPinned ? (
              <ActivePinIcon onClick={(e) => togglePin(e)} />
            ) : (
              <PinIcon onClick={(e) => togglePin(e)} />
            )}
          </IconContainer>
          <Text>{textFormatter(note.title, 50)}</Text>
        </Header>
        <ContentText>{textFormatter(note.content, 360)}</ContentText>
      </Container>
      <Footer>
        <ActionPanel isHovered={isHovered || note.isArchived}>
          {note.isArchived ? (
            <ActiveArchiveIcon onClick={(e) => toggleArchive(e)} />
          ) : (
            <ArchiveIcon onClick={(e) => toggleArchive(e)} />
          )}
          <DeleteIcon onClick={(e) => deleteNote(e, note.id)} />
        </ActionPanel>
      </Footer>
    </Wrapper>
  );
};

export default List;
