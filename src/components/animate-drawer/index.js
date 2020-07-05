import React from "react";

import {
  Container,
  AnimateIcon,
  IconContainer,
  MenuText,
  ArchiveIcon,
  NoteIcon
} from "./style";

const AnimateDrawer = ({ isOpened, handleClick = () => {}, iconState }) => {
  const { noteIcon, archiveIcon } = iconState;
  return (
    <Container isOpened={isOpened}>
      <AnimateIcon
        isActive={noteIcon.isActive && isOpened}
        onClick={(e) => {
          handleClick("note");
        }}
      >
        <IconContainer isActive={noteIcon.isActive}>
          <NoteIcon />
        </IconContainer>
        <MenuText isOpened={isOpened}>Note</MenuText>
      </AnimateIcon>
      <AnimateIcon
        isActive={archiveIcon.isActive && isOpened}
        onClick={(e) => {
          handleClick("archive");
        }}
      >
        <IconContainer isActive={archiveIcon.isActive}>
          <ArchiveIcon />
        </IconContainer>
        <MenuText isOpened={isOpened}>Archive</MenuText>
      </AnimateIcon>
    </Container>
  );
};

export default AnimateDrawer;
