import styled from "styled-components";
import { Search } from "@styled-icons/boxicons-regular/Search";
import { CloseOutline as Close } from "@styled-icons/evaicons-outline/CloseOutline";

import styleConfig from "../../style";

export const Container = styled.div`
  position: relative;
  height: 84px;
  width: 100%;
  left: 0;
  top: 0;
  box-shadow: inset 0 -1px 0 0 #dadce0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBoxWrapper = styled.div`
  position: relative;
  height: 48px;
  min-width: 248px;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: ${(props) =>
    !props.isShown
      ? " 0 1px 1px 0 rgba(65,69,73,0.3), 0 1px 3px 1px rgba(65,69,73,0.15);"
      : "-2px -3px 13px 2px rgba(0,0,0,0.034), 0 6.7px 5.3px rgba(0,0,0,0.048), 0 12.5px 10px rgba(0,0,0,0.06)"};
`;

export const SearchInput = styled.input`
  border: none;
  display: block;
  background: ${styleConfig.backgroundColor};
  height: auto;
  color: #80868b;
  border-radius: 3px;
  resize: none;
  letter-spacing: 0.00625em;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  line-height: 24px;
  width: 80%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    letter-spacing: 0.00625em;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
    line-height: 24px;
  }
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) =>
    props.isShown === undefined ? 0.5 : props.isShown ? 0.5 : 0};
`;

export const SearchIcon = styled(Search)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  width: 32px;
  height: 32px;
  cursor: pointer;
`;
