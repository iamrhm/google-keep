import React from "react";
import { IconContainer, ArchiveIcon, NoteIcon, Container } from "./style";

const Sidebar = ({
  isActive,
  handleHover = () => {},
  handleClick = () => {},
  iconState
}) => {
  const { noteIcon, archiveIcon } = iconState;
  return (
    <Container>
      <IconContainer
        isActive={noteIcon.isActive}
        onClick={(e) => handleClick("note")}
      >
        <NoteIcon />
      </IconContainer>
      <IconContainer
        isActive={archiveIcon.isActive}
        onClick={(e) => handleClick("archive")}
      >
        <ArchiveIcon />
      </IconContainer>
    </Container>
  );
};

export default Sidebar;
