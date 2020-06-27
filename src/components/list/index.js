import React from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../../redux/actions";

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
  ContentText
} from "./style";

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
  return (
    <Wrapper
      isHovered={isHovered}
      onMouseEnter={() => setIiHovered(true)}
      onMouseLeave={() => setIiHovered(false)}
    >
      <Container onClick={() => openNoteModal(note.id)}>
        <Header>
          <IconContainer isHovered={isHovered || note.isPinned}>
            {note.isPinned ? (
              <ActivePinIcon onClick={(e) => togglePin(e)} />
            ) : (
              <PinIcon onClick={(e) => togglePin(e)} />
            )}
          </IconContainer>
          <Text>{note.title}</Text>
        </Header>
        <ContentText>{note.content}</ContentText>
      </Container>
      <Footer isHovered={isHovered || note.isArchived}>
        {note.isArchived ? (
          <ActiveArchiveIcon onClick={(e) => toggleArchive(e)} />
        ) : (
          <ArchiveIcon onClick={(e) => toggleArchive(e)} />
        )}
      </Footer>
    </Wrapper>
  );
};

export default List;
