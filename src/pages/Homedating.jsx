import { useState } from "react";
import PropTypes from "prop-types"; // PropTypes 패키지 추가
import styled from "styled-components";

const HomeDating = ({ days, initialDay }) => {
  const [selectedDay, setSelectedDay] = useState(initialDay); // 초기값으로 현재 요일 설정

  return (
    <DatesGrid>
      {days.map((day, index) => (
        <DayBox
          key={index}
          isSelected={selectedDay === day}
          onClick={() => setSelectedDay(day)} // 클릭 시 선택 상태 업데이트
        >
          {day}
        </DayBox>
      ))}
    </DatesGrid>
  );
};

// PropTypes를 사용해 props 검증 추가
HomeDating.propTypes = {
  days: PropTypes.arrayOf(PropTypes.string).isRequired, // days는 문자열 배열로 필수
  initialDay: PropTypes.string.isRequired, // initialDay는 문자열로 필수
};

export default HomeDating;

const DatesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr); /* 7개의 열 */
  gap: 10px;
  width: 100%;
  justify-items: center;
`;

const DayBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 70px;
  background-color: ${(props) =>
    props.isSelected ? "#50C878" : "#f5f5f5"}; /* 선택 여부에 따라 색상 변경 */
  color: ${(props) => (props.isSelected ? "#fff" : "#333")};
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? "#45A167" : "#e0e0e0"}; /* 호버 효과 */
  }
`;
