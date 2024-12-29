import styled from "styled-components";
import * as s from "./../css/CommonStyled";
import RightSideBar from "../components/common/RightSideBar";
import NextIcon from "../assets/icons/home_dates_next.svg";
import PrevIcon from "../assets/icons/home_dates_previous.svg";
import { useState } from "react";
import HomeDating from "./Homedating";
import TimeSettigBox from "./../components/common/TimeSettingBox";
import GreenSetterBox from "./../components/common/GeenSetterBox";

const Home = () => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [studyHour, setStudyHour] = useState("5");
  const [studyMin, setStudyMin] = useState("30");
  const [studySec, setStudySec] = useState("00");
  const today = days[new Date().getDay()];

  return (
    <>
      <s.PageLayout>
        <Container>
          <MainBox>
            <BoxStudyingFor365>365일 간 총 공부 시간</BoxStudyingFor365>
            <BoxThisWeekTarget>이번 주 목표 달성률</BoxThisWeekTarget>
            <Row>
              <BoxDateNTime>
                <BoxDates></BoxDates>
                <BoxTimes></BoxTimes>
              </BoxDateNTime>
              <LastBoxesContainer>
                <BoxLastWeek>지난 주 평균 공부 시간</BoxLastWeek>
                <BoxThisWeek>이번 주 평균 공부 시간</BoxThisWeek>
                <BoxLast>오늘도 한 걸음씩 시작해볼까요?</BoxLast>
              </LastBoxesContainer>
            </Row>
          </MainBox>
        </Container>
        <RightSideBar next="/2">
          <GreenSetterBox>
            <TimeSettigBox
              title="오늘 총 공부 시간"
              small="휴식을 제외한 목표 시간을 설정해주세요."
              hour={studyHour}
              min={studyMin}
              sec={studySec}
              setHour={setStudyHour}
              setMin={setStudyMin}
              setSec={setStudySec}
            ></TimeSettigBox>
          </GreenSetterBox>
        </RightSideBar>
      </s.PageLayout>
      <Container>
        <MainBox>
          <BoxStudyingFor365>
            <P>365일 간 총 공부 시간</P>
          </BoxStudyingFor365>
          <BoxThisWeekTarget>
            <P>이번 주 목표 달성률</P>
          </BoxThisWeekTarget>
          <Row>
            <BoxDateNTime>
              <P>날짜별 / 시간별 공부 시간</P>
              <GridContainer>
                <BoxDates>
                  <DatesContainer>
                    <IconButton>
                      <img src={PrevIcon} />
                    </IconButton>
                    <HomeDating days={days} initialDay={today} />

                    <IconButton>
                      <img src={NextIcon} />
                    </IconButton>
                  </DatesContainer>
                </BoxDates>
                <BoxTimes></BoxTimes>
              </GridContainer>
            </BoxDateNTime>
            <LastBoxesContainer>
              <BoxLastWeek>
                <P>지난 주 평균 공부 시간</P>
              </BoxLastWeek>
              <BoxThisWeek>
                <P>이번 주 평균 공부 시간</P>
              </BoxThisWeek>
              <BoxLast>
                <P>오늘도 한 걸음씩 시작해볼까요?</P>
              </BoxLast>
            </LastBoxesContainer>
          </Row>
        </MainBox>
      </Container>
    </>
  );
};

// MainBox (mainbox)
export const MainBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 1110px;
  height: 840px;
  background-color: #efefef;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -50%);
  row-gap: 18px;
  column-gap: 20px;
`;

// Row: BoxDateNTime와 LastBoxesContainer를 수평 정렬
export const Row = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`;

// LastBoxesContainer: 세로 정렬 컨테이너
export const LastBoxesContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: auto;
  align-items: flex-start;
`;

// BoxStudyingFor365 (boxstudyingfor365)
export const BoxStudyingFor365 = styled.div`
  width: 688px;
  height: 341px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
  border: 15px solid transparent;
  box-sizing: border-box;
  padding: 20px 30px;
`;

// BoxThisWeekTarget (boxthisweektarget)
export const BoxThisWeekTarget = styled.div`
  width: 399px;
  height: 341px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #fff;
  padding: 34px 37px;
`;

// BoxDateNTime (boxdatentime)
export const BoxDateNTime = styled.div`
  width: 688px;
  height: 481px;
  border-radius: 15px;
  flex-shrink: 0;
  background: #fff;
  box-sizing: border-box;
  gap: 27px;
  padding: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-rows: 80px 276px;
  grid-gap: 13px;
  justify-items: center;
`;

export const BoxDates = styled.div`
  display: flex;
  margin-top: 27px;
  width: 640px;
  height: 80px;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
`;

export const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7개의 열 */
  gap: 10px; /* 각 칸 사이의 간격 */
  width: 100%; /* 부모 컨테이너의 전체 너비 */
  padding: 0 30px;
`;

export const BoxDay = styled.div`
  display: flex;
  justify-content: center; /* 가로 중앙 정렬 */
  align-items: center; /* 세로 중앙 정렬 */
  width: 60px;
  height: 70px;
  background-color: #f5f5f5;
  border-radius: 10px;
  color: #333;
  &:hover {
    background-color: #e0e0e0; /* 호버 시 배경 변경 */
    cursor: pointer;
  }
  color: #797979;
  font-feature-settings: "ss10" on;
  font-family: "Pretendard Variable";
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 24px */
`;

export const IconButton = styled.div`
  box-sizing: border-box;
  width: 8px;
  height: 15px;
  flex-shrink: 0;
  stroke-width: 2px;
  stroke: #9c9c9c;

  &:hover {
    cursor: pointer;
  }
`;

export const DatesContainer = styled.div`
  display: flex;
  justify-content: space-between; /* 양 끝으로 배치 */
  align-items: center; /* 세로 축 정렬 */
  width: 100%; /* 부모의 너비 */
  padding: 0 30px; /* 양쪽 여백 설정 (선택 사항) */
`;

export const BoxTimes = styled.div`
  margin-top: 27px;
  width: 640px;
  height: 276px;
  border-radius: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
`;

// BoxLastWeek
export const BoxLastWeek = styled.div`
  width: 399px;
  height: 144px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
  box-sizing: border-box;
  text-align: center;
  padding-top: 37px;
`;

// BoxThisWeek
export const BoxThisWeek = styled.div`
  width: 399px;
  height: 144px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #fff;
  box-sizing: border-box;
  text-align: center;
  padding-top: 37px;
`;

// BoxLast
export const BoxLast = styled.div`
  display: flex;
  width: 399px;
  height: 157px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #cbe9cb;
  border: 2px solid #50c878;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const P = styled.div`
  color: #081e00;
  font-family: "Pretendard Variable";
  font-size: 22px !important;
  font-style: normal;
  font-weight: 500 !important;
  line-height: normal;
`;

export default Home;

const Container = styled.div``;
