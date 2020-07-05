import styled from "styled-components";
import styleConfig from "../../style-configs";

export const ListType = styled.div`
  letter-spacing: 0.07272727em;
  font-size: 0.8rem;
  font-weight: 600;
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
  margin: 15px 0 84px 0;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  margin: 24px;
  margin-bottom: 0px;
  min-height: 590px;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 0.1px;
    height: 0.1px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const CreateNoteContainer = styled.div`
  width: 100%;
`;
