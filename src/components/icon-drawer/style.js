import styled from "styled-components";
import { Bulb } from "@styled-icons/ionicons-outline/Bulb";
import { Archive } from "@styled-icons/ionicons-outline/Archive";

export const Container = styled.div`
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
