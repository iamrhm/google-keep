import styled from "styled-components";
import { Bulb } from "@styled-icons/ionicons-outline/Bulb";
import { Archive } from "@styled-icons/ionicons-outline/Archive";

export const Container = styled.div`
  position: relative;
  width: ${(props) => (props.isActive ? "250px" : "80px")};
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const IconDrawer = styled.div`
  position: fixed;
  left: 0;
  width: 80px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? "#feefc3" : "transparent")};
  cursor: pointer;
`;

export const ArchiveIcon = styled(Archive)`
  width: 28px;
  height: 28px;
  opacity: 0.7;
`;

export const NoteIcon = styled(Bulb)`
  width: 28px;
  height: 28px;
  opacity: 0.7;
`;

export const AnimateDrawer = styled.div`
  position: relative;
  transform-origin: 48px 0;
  width: ${(props) => (props.isActive ? "250px" : "0px")};
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AnimateIcon = styled.div`
  width: 100%;
  height: 48px;
  margin: 15px 0;
  background: ${(props) =>
    props.isActive ? "#feefc3" : props.isHovered ? "#f1f3f4" : "transparent"};
  border-radius: 0 25px 25px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const MenuText = styled.span`
  padding: 0 25px;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  color: #202124;
  letter-spacing: 0.01785714em;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;
