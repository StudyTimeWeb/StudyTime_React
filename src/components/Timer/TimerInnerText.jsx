import styled from "styled-components";
import * as s from "./../../css/CommonStyled";
import RoundButton from "../common/RoundButton";
import alertIcon from "./../../assets/icons/timer/AlertIcon.svg";

const TimerInnerText = ({ subject, remainingTime }) => {
  const hour = Math.floor(remainingTime / 3600);
  const min = Math.floor(remainingTime / 60);
  const sec = remainingTime % 60;
  return (
    <s.CenterAlignedContainerDiv>
      <Subject>{subject}</Subject>
      <Time>
        {String(hour).padStart(2, "0")}:{String(min).padStart(2, "0")}:
        {String(sec).padStart(2, "0")}
      </Time>
      <RoundButton
        text="10:00"
        style={{ background: "#E6E6E6" }}
        img={alertIcon}
      />
    </s.CenterAlignedContainerDiv>
  );
};

export default TimerInnerText;

const Subject = styled.div`
  color: #797979;
  font-family: "Pretendard Variable";
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 140%; /* 2.625rem */
  letter-spacing: -0.01875rem;
`;

const Time = styled.div`
  color: #414e2e;
  font-family: "Pretendard Variable";
  font-size: 3.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 5.25rem */
  letter-spacing: -0.0375rem;
`;
