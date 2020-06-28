import React from "react";

import { Container, AnimateIcon, MenuText } from "./style";

const AnimateDrawer = ({
  isActive,
  handleHover = () => {},
  handleClick = () => {},
  iconState
}) => {
  const { noteIcon, archiveIcon } = iconState;
  return (
    <Container isActive={isActive}>
      <AnimateIcon
        isActive={noteIcon.isActive}
        isHovered={noteIcon.isHovered}
        onClick={(e) => {
          handleClick("note");
        }}
        onMouseEnter={() =>
          handleHover({
            name: "note",
            isHovered: true
          })
        }
        onMouseLeave={() =>
          handleHover({
            name: "note",
            isHovered: false
          })
        }
      >
        <MenuText isActive={isActive}>Note</MenuText>
      </AnimateIcon>
      <AnimateIcon
        isActive={archiveIcon.isActive}
        isHovered={archiveIcon.isHovered}
        onClick={(e) => {
          handleClick("archive");
        }}
        onMouseEnter={() =>
          handleHover({
            name: "archive",
            isHovered: true
          })
        }
        onMouseLeave={() =>
          handleHover({
            name: "archive",
            isHovered: false
          })
        }
      >
        <MenuText isActive={isActive}>Archive</MenuText>
      </AnimateIcon>
    </Container>
  );
};

export default AnimateDrawer;
