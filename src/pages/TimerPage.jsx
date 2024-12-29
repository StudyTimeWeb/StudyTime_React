import { useState } from "react";
import Timer from "../components/Timer/Timer";
import PauseBtn from "./../assets/icons/PauseBtn.svg";
import PlayBtn from "./../assets/icons/PlayBtn.svg";
import AddIcon from "./../assets/icons/button/AddIcon.svg";
import * as s from "./../css/CommonStyled";
import RightSideBar from "../components/common/RightSideBar";
import RoundButton from "../components/common/RoundButton";
import WhiteBox from "../components/common/WhiteBox";
import BigTextBox from "../components/common/BigTextBox";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const TimerPage = () => {
  const [isStopped, setIsStopped] = useState(false);
  const [stopImg, setStopImg] = useState(0);
  const stopImages = [PauseBtn, PlayBtn];

  const subjects = useLocation().state;
  console.log(subjects);
  return (
    <>
      <s.PageLayout>
        <s.CenterAlignedContainerDiv>
          <s.CenterJustifiedContainerDiv>
            <RoundButton
              text="10:00"
              img={AddIcon}
              style={{
                backgroundColor: "#DADADA",
                height: "7rem",
                width: "11.5rem",
                borderRadius: "3.4375rem",
                fontSize: "2rem",
                alignSelf: "end",
              }}
            />
            <Timer subject={"국어"} initialTime={326} stop={isStopped} />

            <img
              src={stopImages[stopImg]}
              onClick={() => {
                setIsStopped((prev) => !prev);
                setStopImg((prev) => (prev + 1) % 2);
              }}
              style={{
                alignSelf: "end",
              }}
            />
          </s.CenterJustifiedContainerDiv>
          <Grid>
            <WhiteBox>
              <BigTextBox title="오늘 목표 시간" content="5시간 30분" />
            </WhiteBox>
            <WhiteBox>
              <BigTextBox title="오늘 목표 시간" content="5시간 30분" />
            </WhiteBox>
            <WhiteBox>
              <BigTextBox title="오늘 목표 시간" content="5시간 30분" />
            </WhiteBox>
          </Grid>
        </s.CenterAlignedContainerDiv>
        <RightSideBar prev="/2" />
      </s.PageLayout>
    </>
  );
};

export default TimerPage;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.05rem;
  margin: 5.75rem 0 0 0;
`;
