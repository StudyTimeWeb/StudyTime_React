import styled from "styled-components";
import "./home.css";

const Home = () => {
  return (
    <>
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
  gap: 20px; /* 수평 간격 */
  align-items: flex-start; /* 세로 정렬 기준 */
`;

// LastBoxesContainer: 세로 정렬 컨테이너
export const LastBoxesContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  row-gap: 20px; /* 각 박스 간의 간격 */
  width: auto; /* 필요하면 너비를 설정 */
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
`;

// BoxThisWeekTarget (boxthisweektarget)
export const BoxThisWeekTarget = styled.div`
  width: 399px;
  height: 341px;
  flex-shrink: 0;
  box-sizing: border-box;
  border-radius: 15px;
  background-color: #fff;
`;

// BoxDateNTime (boxdatentime)
export const BoxDateNTime = styled.div`
  display: flex; /* Flexbox로 자식 요소 배치 */
  flex-direction: column; /* 자식 요소를 세로로 정렬 */
  justify-content: center; /* 자식 요소를 수직 정렬 */
  align-items: center; /* 자식 요소를 수평 정렬 */
  width: 688px;
  height: 481px;
  border-radius: 15px;
  flex-shrink: 0;
  background: #fff;
  box-sizing: border-box;
  gap: 13px; /* 자식 요소 간 간격 */
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
  text-margin: 20px;
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
`;

export const BoxDates = styled.div`
  margin-top: 90px;
  width: 640px;
  height: 80px;
  box-sizing: border-box;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
`;

export const BoxTimes = styled.div`
  width: 640px;
  height: 276px;
  border-radius: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f5f5f5;
`;

// BoxLast
export const BoxLast = styled.div`
  width: 399px;
  height: 157px;
  flex-shrink: 0;
  border-radius: 15px;
  background: #cbe9cb;
  border: 2px solid #50c878;
  box-sizing: border-box;
  text-align: center;
`;

export default Home;

const Container = styled.div``;
