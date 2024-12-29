import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styled from "styled-components";
import TimerInnerText from "./TimerInnerText";

const Timer = ({ subject, initialTime, stop }) => {
  return (
    <TimerContainer>
      <Absolute>
        <CountdownCircleTimer
          isPlaying={!stop}
          isGrowing
          duration={initialTime}
          colors={["#01D281", "#01D281"]}
          colorsTime={[initialTime / 2, 5, 0]}
          rotation="counterclockwise"
          size={438}
          strokeWidth={15}
        >
          {({ remainingTime }) => {
            return (
              <TimerInnerText
                subject={subject}
                remainingTime={initialTime - remainingTime}
              />
            );
          }}
        </CountdownCircleTimer>
      </Absolute>
    </TimerContainer>
  );
};

export default Timer;
const TimerContainer = styled.div`
  position: relative;
  padding: 3.69rem 0;
  width: 24.19rem;
  height: 24.19rem;
`;

const Absolute = styled.div`
  position: absolute;
  top: 0;
  transform: translatex(-5.7%);
`;
