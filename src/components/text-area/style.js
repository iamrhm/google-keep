import styled from "styled-components";
import styleConfig from "../../style-configs";

export const InputTextArea = styled.textarea`
  display: block;
  height: auto;
  border: none;
  width: 100%;
  background: ${styleConfig.backgroundColor};
  height: auto;
  color: ${styleConfig.textColor};
  border-radius: 3px;
  resize: none;
  letter-spacing: 0.00625em;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  line-height: 24px;
  font-family: "Roboto", sans-serif;
  overflow: auto;

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

  ::-webkit-scrollbar {
    width: 5px;
    height: 0.1px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(47, 46, 46, 0.03);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(158, 158, 158, 0.5);
  }
`;
