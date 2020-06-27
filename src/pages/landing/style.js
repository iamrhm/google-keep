import styled from "styled-components";
import styleConfig from "../../style";

export const ListType = styled.div`
  letter-spacing: 0.07272727em;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1rem;
  text-transform: uppercase;
  margin: 32px 20px 8px;
  color: ${styleConfig.offTextColor};
`;

export const ListContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
`;

export const ListWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
`;

export const Container = styled.div`
  width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  margin-top: 24px;
  margin-left: 24px;
  overflow-y: auto;
`;

export const CreateNoteContainer = styled.div`
  width: 100%;
`;
