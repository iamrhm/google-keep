import React from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  IconContainer,
  ArchiveIcon,
  NoteIcon,
  IconDrawer,
  AnimateDrawer,
  AnimateIcon,
  MenuText
} from "./style";

const Sidebar = () => {
  const [isActive, toggleActive] = React.useState(false);
  const [currentIcon, setCurrentIcon] = React.useState("note");
  const [hovered, toggleHovered] = React.useState({
    name: "",
    isHovered: false
  });

  return (
    <Container
      isActive={isActive}
      onMouseEnter={() => toggleActive(true)}
      onMouseLeave={() => toggleActive(false)}
    >
      <IconDrawer>
        <IconContainer isActive={currentIcon === "note"}>
          <NoteIcon />
        </IconContainer>
        <IconContainer isActive={currentIcon === "archive"}>
          <ArchiveIcon />
        </IconContainer>
      </IconDrawer>
      <AnimateDrawer isActive={isActive}>
        <AnimateIcon
          isActive={currentIcon === "note"}
          isHovered={hovered.name === "note" && hovered.isHovered}
          onMouseEnter={() =>
            toggleHovered({
              name: "note",
              isHovered: true
            })
          }
          onMouseLeave={() =>
            toggleHovered({
              name: "note",
              isHovered: false
            })
          }
          onClick={(e) => {
            e.preventDefault();
            setCurrentIcon("note");
          }}
        >
          <MenuText isActive={isActive}>Note</MenuText>
        </AnimateIcon>
        <AnimateIcon
          isActive={currentIcon === "archive"}
          isHovered={hovered.name === "archive" && hovered.isHovered}
          onMouseEnter={() =>
            toggleHovered({
              name: "archive",
              isHovered: true
            })
          }
          onMouseLeave={() =>
            toggleHovered({
              name: "archive",
              isHovered: false
            })
          }
          onClick={(e) => {
            e.preventDefault();
            setCurrentIcon("archive");
          }}
        >
          <MenuText isActive={isActive}>Archive</MenuText>
        </AnimateIcon>
      </AnimateDrawer>
    </Container>
  );
};

export default Sidebar;
