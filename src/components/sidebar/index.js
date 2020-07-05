import React from "react";
import { useHistory } from "react-router-dom";

import { Container, IconContainer, MenuIcon, MenuIconWrapper } from "./style";

import AnimateDrawer from "../animate-drawer";

const initialState = {
  noteIcon: {
    isActive: true
  },
  archiveIcon: {
    isActive: false
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
      newState.noteIcon = { isActive: true };
      newState.archiveIcon = { isActive: false };
    } else if (name === "archive") {
      newState.noteIcon = { isActive: false };
      newState.archiveIcon = { isActive: true };
    }
    dispatch({ type: "UPDATE_STATE", payload: newState });
    if (name === "archive") history.push({ hash: `/${name}` });
    else if (name === "note") history.push("/");
  };

  const handleSideBarToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log(isShown);
    if (!isShown) {
      toggleShown(true);
    } else {
      toggleShown(false);
    }
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <MenuIconWrapper>
          <MenuIcon
            onClick={(e) => {
              handleSideBarToggle(e);
            }}
          />
        </MenuIconWrapper>
      </IconContainer>
      <Container
        isActive={isShown}
        onMouseEnter={() => toggleShown(true)}
        onMouseLeave={() => toggleShown(false)}
      >
        <AnimateDrawer
          isOpened={isShown}
          handleClick={handleClick}
          iconState={state}
        />
      </Container>
    </>
  );
};

export default Sidebar;
