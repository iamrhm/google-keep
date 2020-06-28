import React from "react";
import { useHistory } from "react-router-dom";

import { Container, IconContainer, MenuIcon } from "./style";

import IconDrawer from "../icon-drawer";
import AnimateDrawer from "../animate-drawer";

const initialState = {
  noteIcon: {
    isActive: true,
    isHovered: false
  },
  archiveIcon: {
    isActive: false,
    isHovered: false
  }
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE_STATE":
      return { ...state, ...payload };
    default:
      return state;
  }
}

const Sidebar = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const [isShown, toggleShown] = React.useState(false);
  const history = useHistory();

  const handleClick = (name) => {
    const newState = { ...state };
    if (name === "note") {
      newState.noteIcon = { isActive: true, isHovered: false };
      newState.archiveIcon = { isActive: false, isHovered: false };
    } else if (name === "archive") {
      newState.noteIcon = { isActive: false, isHovered: false };
      newState.archiveIcon = { isActive: true, isHovered: false };
    }
    dispatch({ type: "UPDATE_STATE", payload: newState });
    if (name === "archive") history.push({ hash: `/${name}` });
    else if (name === "note") history.push("/");
  };

  const handleHover = (name, isHovered) => {
    const newState = { ...state };
    if (name === "note") {
      newState.noteIcon = { ...newState.noteIcon, isHovered: isHovered };
    } else if (name === "archive") {
      newState.archiveIcon = { ...newState.archiveIcon, isHovered: isHovered };
    }
    dispatch({ type: "UPDATE_STATE", payload: newState });
  };

  React.useLayoutEffect(() => {
    let currentLocation = history.location.hash.split("/")[1];
    if (currentLocation === "archive") {
      let newState = { ...state };
      newState.noteIcon.isActive = false;
      newState.archiveIcon.isActive = true;
      dispatch({ type: "UPDATE_STATE", payload: newState });
    } else if (currentLocation === undefined) {
      let newState = { ...state };
      newState.noteIcon.isActive = true;
      newState.archiveIcon.isActive = false;
      dispatch({ type: "UPDATE_STATE", payload: newState });
    }
  }, []);

  React.useLayoutEffect(() => {
    let currentLocation = history.location.hash.split("/")[1];
    if (currentLocation === undefined && !state.noteIcon.isActive) {
      let newState = { ...state };
      newState.noteIcon.isActive = true;
      newState.archiveIcon.isActive = false;
      dispatch({ type: "UPDATE_STATE", payload: newState });
    }
  });

  return (
    <>
      <IconContainer>
        <MenuIcon
          onClick={(e) => {
            toggleShown(!isShown);
          }}
        />
      </IconContainer>
      <Container
        isActive={isShown}
        onMouseEnter={() => toggleShown(true)}
        onMouseLeave={() => toggleShown(false)}
      >
        <AnimateDrawer
          isActive={isShown}
          handleHover={handleHover}
          handleClick={handleClick}
          iconState={state}
        />
        <IconDrawer
          isActive={isShown}
          handleHover={handleHover}
          handleClick={handleClick}
          iconState={state}
        />
      </Container>
    </>
  );
};

export default Sidebar;
