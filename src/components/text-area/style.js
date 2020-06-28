import styled from "styled-components";
import styleConfig from "../../style-configs";

export const InputTextArea = styled.textarea`
  display: block;
  height: auto;
  border: none;
  width: 100%;
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
`;
