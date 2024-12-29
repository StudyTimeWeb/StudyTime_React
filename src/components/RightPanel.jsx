import React from "react";
import styled from "styled-components";
import closeIcon from "../assets/icons/close.svg";

const RightPanel = () => {
  return (
    <Container>
      <CloseButton>
        <img src={closeIcon} />
      </CloseButton>
    </Container>
  );
};

export default RightPanel;

const Container = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 480px;
  height: 100vh;
  background: #ffffff;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 32px;
  top: 32px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #000;
`;
