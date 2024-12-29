import styled from "styled-components";

const GreenSetterBox = ({ children }) => {
  return <GreenDiv>{children}</GreenDiv>;
};

export default GreenSetterBox;

const GreenDiv = styled.div`
  box-sizing: border-box;
  min-width: 24.0625rem;
  height: fit-content;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #cbe9cb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  row-gap: 2.5rem;
  padding: 1.25rem;
`;
