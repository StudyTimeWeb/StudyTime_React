import * as s from "../../css/CommonStyled";
import styled from "styled-components";
import Button from "./Button";
import closeIcon from "./../../assets/icons/button/CloseIcon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Tag from "../Tag";

const RightSideBar = ({ children, prev, next }) => {
  const nav = useNavigate();
  const today = new Date();
  const days = ["월", "화", "수", "목", "금", "토", "일"];
  const [sideBarClosed, setSideBarClosed] = useState(false);
  return (
    <ColoredSideBarDiv
      isClosed={sideBarClosed}
      onClick={() => {
        if (sideBarClosed) {
          setSideBarClosed(false);
        }
      }}
    >
      <ContentSection>
        <CloseBtn onClick={() => setSideBarClosed(true)}>
          <img src={closeIcon} />
        </CloseBtn>
        <h3 style={{ margin: "0" }}>
          {`${today.getFullYear()}년 ${
            today.getMonth() + 1
          }월 ${today.getDate()}일 ${days[today.getDay() - 1]}요일`}
        </h3>
        <TagSection>
          <Tag />
        </TagSection>
        <ChildrenContainer>{children}</ChildrenContainer>
      </ContentSection>
      <div>
        <div style={{ border: "1px solid #D8D8D8", margin: "1.5rem 0" }}></div>
        <ButtonSection>
          <Button
            text="이전"
            onClick={() => {
              nav(prev);
            }}
          ></Button>
          <Button
            text="다음"
            style={{ backgroundColor: "#50C878" }}
            onClick={() => {
              nav(next);
            }}
          ></Button>
        </ButtonSection>
      </div>
    </ColoredSideBarDiv>
  );
};

export default RightSideBar;

const ColoredSideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  right: 0;
  box-sizing: border-box;
  width: 25vw;
  max-width: 30rem;
  min-width: fit-content;
  min-height: 100vh;
  height: 100%;
  flex-shrink: 0;
  background: #fff;
  padding: 5.25rem 2.8rem;
  transform: ${(props) =>
    props.isClosed ? `translatex(92%)` : `translatex(0%)`};
  transition: transform 0.4s ease-in-out;
`;
const TagSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 1.6rem;
`;
const ChildrenContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const CloseBtn = styled.div`
  position: absolute;
  top: 3.69rem;
  right: 3.13rem;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1.62rem;
`;
const ButtonSection = styled.div`
  display: flex;
  justify-self: end;
  flex-direction: row;
  justify-content: end;
  gap: 0.54rem;
`;