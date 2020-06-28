import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  transform-origin: 48px 0;
  width: ${(props) => (props.isActive ? "250px" : "0px")};
  display: flex;
  flex-direction: column;
`;

export const AnimateIcon = styled.div`
  width: 100%;
  height: 48px;
  margin: 15px 0;
  background: ${(props) =>
    props.isActive ? "#feefc3" : props.isHovered ? "#f1f3f4" : "transparent"};
  border-radius: 0 25px 25px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
`;

export const MenuText = styled.span`
  padding: 0 25px;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  color: #202124;
  letter-spacing: 0.01785714em;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
`;
