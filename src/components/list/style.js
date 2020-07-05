import styled from "styled-components";
import styleConfig from "../../style-configs";

import { ArchiveIn as Archive } from "@styled-icons/boxicons-regular/ArchiveIn";
import { ArchiveIn as ActiveArchive } from "@styled-icons/boxicons-solid/ArchiveIn";
import { Pin } from "@styled-icons/boxicons-regular/Pin";
import { Pin as ActivePin } from "@styled-icons/boxicons-solid/Pin";
import { Delete } from "@styled-icons/material/Delete";

export const Wrapper = styled.div`
  min-height: 220px;
  max-height: 600px;
  width: 240px;
  color: ${styleConfig.textColor};
  white-space: pre-wrap;
  border-radius: 8px;
  border: 1px solid ${styleConfig.borderColor};
  background-color: ${styleConfig.backgroundColor};
  overflow: hidden;
  position: relative;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  box-shadow: ${(props) =>
    !props.isHovered
      ? "1px 2px 1px 0px rgba(0,0,0,0.034), -1px 2px 1.3px 0px rgba(0,0,0,0.048)"
      : "0 2.8px 2.2px rgba(0, 0, 0, 0.034), 0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06)"};
  cursor: default;
`;

export const Container = styled.div`
  min-height: 30px;
  margin-bottom: 45px;
`;

export const Header = styled.div`
  min-height: 38px;
  max-height: 120px;
`;

export const Footer = styled.div`
  height: 32px;
  width: 100%;
  position: absolute;
  bottom: 0;
`;

export const ActionPanel = styled.div`
  position: relative;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  opacity: ${(props) => (props.isHovered ? 0.8 : 0)};
`;

export const ArchiveIcon = styled(Archive)`
  width: 24px;
  height: 24px;
  opacity: 0.8;
  cursor: pointer;
`;

export const ActiveArchiveIcon = styled(ActiveArchive)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const DeleteIcon = styled(Delete)`
  width: 24px;
  height: 24px;
  opacity: 0.8;
  cursor: pointer;
`;

export const PinIcon = styled(Pin)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

export const ActivePinIcon = styled(ActivePin)`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;
`;

export const Text = styled.div`
  letter-spacing: 0.00625em;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  outline: none;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding: 10px 16px;
`;

export const IconContainer = styled.div`
  width: 42px;
  height: 36px;
  float: right;
  opacity: ${(props) => (props.isHovered ? 0.8 : 0)};
  cursor: pointer;
`;

export const ContentText = styled(Text)`
  letter-spacing: 0.01428571em;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.25rem;
  padding: 2px 16px;
`;
