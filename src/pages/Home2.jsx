import React, { useState } from "react";
import styled from "styled-components";
import * as s from "./../css/CommonStyled";
import RightSideBar from "../components/common/RightSideBar";
import SubjectSettingBox from "./../components/common/SubjectSettingBox";
import GreenSetterBox from "./../components/common/GeenSetterBox";
import TimeSettigBox from "./../components/common/TimeSettingBox";
import Button from "./../components/common/Button";

function Home2() {
  const [subjects, setSubjects] = useState([]);

  // 우측 패널 폼
  const [newSubjectName, setNewSubjectName] = useState("");
  const [studyHour, setStudyHour] = useState("1");
  const [studyMin, setStudyMin] = useState("20");
  const [studySec, setStudySec] = useState("00");
  const [breakHour, setBreakHour] = useState("0");
  const [breakMin, setBreakMin] = useState("10");
  const [breakSec, setBreakSec] = useState("00");

  // 과목 추가
  const handleAddSubject = () => {
    // 파스텔톤 색상 예시
    const colorPalette = [
      "#d8f3dc",
      "#fcd5ce",
      "#caf0f8",
      "#fff3b0",
      "#e2e2e2",
    ];
    const randomColor =
      colorPalette[Math.floor(Math.random() * colorPalette.length)];

    const newSubject = {
      name: newSubjectName || "새 과목",
      studyTime: `${studyHour}시간 ${studyMin}분`,
      breakTime: `${breakHour}시간 ${breakMin}분`,
      color: randomColor,
    };
    setSubjects((prev) => [...prev, newSubject]);

    // 폼 초기화
    setNewSubjectName("");
    setStudyHour("1");
    setStudyMin("20");
    setStudySec("00");
    setBreakHour("0");
    setBreakMin("10");
    setBreakSec("00");
  };

  // 과목 삭제
  const handleDeleteSubject = (idx) => {
    setSubjects((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <s.PageLayout>
      <Container>
        <TitleArea>
          <PageTitle>과목별 시간 설정하기</PageTitle>
        </TitleArea>

        <MainSection>
          {subjects.length === 0 && (
            <EmptyMessage>
              아직 등록된 과목이 없습니다. 우측에서 과목을 추가해주세요.
            </EmptyMessage>
          )}
          {subjects.map((subj, idx) => (
            <SubjectItem key={idx} color={subj.color}>
              <SubjectName>{subj.name}</SubjectName>
              <BreakBox>휴식 {subj.breakTime}</BreakBox>
              <StudyTime>{subj.studyTime}</StudyTime>
              <DeleteBtn onClick={() => handleDeleteSubject(idx)}>X</DeleteBtn>
            </SubjectItem>
          ))}
        </MainSection>
      </Container>
      <RightSideBar prev="/" next="/timer">
        <GreenSetterBox>
          <SubjectSettingBox
            title="추가할 과목 이름"
            onChange={(e) => setNewSubjectName(e.target.value)}
            value={newSubjectName}
          ></SubjectSettingBox>
          <TimeSettigBox
            title="시간 설정"
            hour={studyHour}
            min={studyMin}
            sec={studySec}
            setHour={setStudyHour}
            setMin={setStudyMin}
            setSec={setStudySec}
          ></TimeSettigBox>
        </GreenSetterBox>
        <GreenSetterBox>
          <TimeSettigBox
            title="휴식 시간 설정"
            hour={breakHour}
            min={breakMin}
            sec={breakSec}
            setHour={setBreakHour}
            setMin={setBreakMin}
            setSec={setBreakSec}
          ></TimeSettigBox>
        </GreenSetterBox>
        <Button
          text="추가"
          style={{ alignSelf: "end", backgroundColor: "#CBE9CB" }}
          onClick={handleAddSubject}
        />
      </RightSideBar>
    </s.PageLayout>
  );
}

export default Home2;

// styled-components

const Container = styled.div`
  margin-left: 116px; /* 사이드바 폭 */
  min-height: 100vh;
  position: relative;
  background-color: #f9f9f9;
  display: block;
`;

// 제목 영역
const TitleArea = styled.div`
  margin-bottom: 32px;
`;

const PageTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-top: 40px;
  margin-bottom: 0;
`;

/** 메인 영역(과목 박스 리스트) */
const MainSection = styled.div`
  padding-right: 520px; /* 우측 패널 폭(480)보다 조금 넉넉히 */
`;

const EmptyMessage = styled.div`
  background: #fff4e2;
  padding: 16px;
  border-radius: 8px;
  color: #666;
`;

const SubjectItem = styled.div`
  position: relative;
  margin-bottom: 16px;
  margin-left: 180px;
  background-color: ${(props) => props.color || "#ddd"};
  border-radius: 8px;
  padding: 24px 20px;
  width: 480px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  gap: 16px;
`;

const SubjectName = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #333;
`;

const BreakBox = styled.div`
  background: rgba(255, 255, 255, 0.5);
  padding: 6px 12px;
  border-radius: 4px;
  color: #555;
  font-size: 14px;
`;

const StudyTime = styled.div`
  margin-left: auto;
  margin-right: 50px;
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;

const DeleteBtn = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  background: #ff6666;
  border: none;
  color: #fff;
  border-radius: 4px;
  padding: 6px 10px;
  font-weight: bold;
  cursor: pointer;
`;

/** 우측 패널 */
const RightPanel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 480px;
  min-height: 100vh;
  background: #ffffff;
  border-left: 1px solid #ddd;
  padding: 24px;
`;

const HeaderBox = styled.div`
  margin-bottom: 16px;
`;

const DateText = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const SubInfo = styled.div`
  color: #999;
  margin-top: 4px;
`;

const GreenPanel = styled.div`
  background: #e2f9e1;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
`;

const PanelTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
  width: 100%;
`;

const TimeRow = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
  select {
    padding: 4px 8px;
  }
`;

const AddBtn = styled.button`
  background: #4caf50;
  border: none;
  border-radius: 6px;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
`;

const BottomButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 24px;
`;

const GrayBtn = styled.button`
  background: #ccc;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
`;

const GreenBtn = styled.button`
  background: #4caf50;
  border: none;
  border-radius: 4px;
  color: #fff;
  padding: 8px 16px;
  cursor: pointer;
`;
