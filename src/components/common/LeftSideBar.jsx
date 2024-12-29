import * as s from "../../css/CommonStyled";
import HomeIcon from "./../../assets/icons/HomeIcon.svg";
import TimerIcon from "./../../assets/icons/TimerIcon.svg";
import ChartIcon from "./../../assets/icons/ChartIcon.svg";
import SettingsIcon from "./../../assets/icons/SettingsIcon.svg";
import styled from "styled-components";

const LeftSideBar = () => {
  return (
    <ColoredSideBarDiv>
      <div>
        <img src={HomeIcon} />
      </div>
      <div>
        <img src={TimerIcon} />
      </div>
      <div>
        <img src={ChartIcon} />
      </div>
      <div>
        <img src={SettingsIcon} />
      </div>
    </ColoredSideBarDiv>
  );
};

export default LeftSideBar;

const ColoredSideBarDiv = styled.div`
  position: sticky;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 3.56rem;
  box-sizing: border-box;
  width: 6vw;
  max-width: 7.25rem;
  height: 100%;
  min-height: 100vh;
  flex-shrink: 0;
  background: #797979;
  z-index: 1;
`;
