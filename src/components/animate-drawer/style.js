import styled, { keyframes, css } from "styled-components";
import styleConfig from "../../style-configs";
import { Bulb } from "@styled-icons/ionicons-outline/Bulb";
import { Archive } from "@styled-icons/ionicons-outline/Archive";

const expand = keyframes`
  from {
    width: 80px;
  }
  to {
    width: 250px;
  }
`;

const activeExpand = css`
  animation: ${expand} 150ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

export const Container = styled.div`
  z-index: 999;
  position: fixed;
  transform-origin: 48px 0;
  width: 80px;
  height: 100%;
  background-color: #fff;

  display: flex;
  flex-direction: column;
  ${(props) => (props.isOpened ? activeExpand : "")};

  @media (max-width: 480px) {
    box-shadow: ${(props) =>
      props.isOpened
        ? "1px 1px 0 rgba(0, 0, 0, 0.1), 0 -1px 0 rgba(0, 0, 0, 0.07)"
        : ""};
  }
`;

export const AnimateIcon = styled.div`
  width: 100%;
  height: 48px;
  margin-top: 15px;
  position: relative;
  border-radius: 0 25px 25px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: ${(props) => (props.isActive ? "#feefc3" : "transparent")};
  &:hover {
    background: ${(props) => (props.isActive ? "#feefc3" : "#f1f3f4")};
  }
`;

export const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${(props) => (props.isActive ? "#feefc3" : "transparent")};
  cursor: pointer;
  position: fixed;
  left: 24px;
`;

export const MenuText = styled.span`
  margin-left: 53px;
  position: relative;
  display: ${(props) => (props.isOpened ? "block" : "none")};
  color: ${styleConfig.textColor};
  letter-spacing: 0.01785714em;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;

export const ArchiveIcon = styled(Archive)`
  width: 28px;
  height: 28px;
  opacity: 0.7;
  cursor: pointer;
`;

export const NoteIcon = styled(Bulb)`
  width: 28px;
  height: 28px;
  opacity: 0.7;
  cursor: pointer;
`;
