import styled from "styled-components";
import styleConfig from "../../../style-configs";

import { ArchiveIn as Archive } from "@styled-icons/boxicons-regular/ArchiveIn";
import { ArchiveIn as ActiveArchive } from "@styled-icons/boxicons-solid/ArchiveIn";
import { Pin } from "@styled-icons/boxicons-regular/Pin";
import { Pin as ActivePin } from "@styled-icons/boxicons-solid/Pin";

export const Container = styled.div`
  position: relative;
  min-height: 132px;
  max-height: 600px;
  max-width: 540px;
  border: 1px solid ${styleConfig.borderColor};
  border-radius: 5px;
  width: 60%;
  background: ${styleConfig.backgroundColor};
  display: flex;
  align-items: center;
  color: ${styleConfig.secondaryTextColor};
  padding: 0 15px 38px 15px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Header = styled.div`
  min-height: 38px;
  width: 100%;
  > input {
    width: auto;
  }
`;

export const ContentInputSection = styled.div`
  min-height: 38px;
  width: 100%;
  padding: 10px 0px 20px 0;
  display: flex;
`;

export const TitleInputSection = styled.div`
  min-height: 38px;
  max-height: 200px;
  width: 100%;
  padding: 10px 0px 20px 0;
  display: flex;
`;

export const InputField = styled.span`
  border: none;
  width: 100%;
  background: ${styleConfig.backgroundColor};
  min-height: 38px;
  display: flex;
  align-items: center;
  color: ${styleConfig.secondaryTextColor};
  display: block;
  letter-spacing: 0.00625em;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  overflow: none;
`;

export const Footer = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CloseButton = styled.div`
  padding: 0 15px;
  color: ${styleConfig.textColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: 0.01785714em;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  height: 36px;
  padding: 8px 24px;
  cursor: pointer;
`;

export const ArchiveIcon = styled(Archive)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 15px;
  bottom: 24px;
  cursor: pointer;
`;

export const ActiveArchiveIcon = styled(ActiveArchive)`
  width: 24px;
  height: 24px;
  position: absolute;
  left: 15px;
  bottom: 24px;
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

export const IconContainer = styled.div`
  width: 42px;
  height: 36px;
  float: right;
  cursor: pointer;
`;
