import styled from "styled-components";

export const ListWrapper = styled.div`
  margin: 15px 0 84px 0;
  position: relative;
  display: flex;
  flex-wrap: wrap;
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
