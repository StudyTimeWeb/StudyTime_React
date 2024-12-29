
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import homeIcon from "../assets/icons/home.svg";
import timerIcon from "../assets/icons/timer.svg";
import statsIcon from "../assets/icons/stats.svg";
import settingsIcon from "../assets/icons/settings.svg";

const Sidebar = () => {
  const location = useLocation();
  return (
    <Container>
      <IconList>
        <NavWrapper>
          {location.pathname === "/" && <ActiveIndicator />}
          <NavLink to="/" $isActive={location.pathname === "/"}>
            <img src={homeIcon} />
          </NavLink>
        </NavWrapper>

        <NavWrapper>
          {location.pathname === "/timer" && <ActiveIndicator />}
          <NavLink to="/timer" $isActive={location.pathname === "/timer"}>
            <img src={timerIcon} />
          </NavLink>
        </NavWrapper>

        <NavWrapper>
          {location.pathname === "/stats" && <ActiveIndicator />}
          <NavLink to="/stats" $isActive={location.pathname === "/stats"}>
            <img src={statsIcon} />
          </NavLink>
        </NavWrapper>

        <NavWrapper>
          {location.pathname === "/settings" && <ActiveIndicator />}
          <NavLink to="/settings" $isActive={location.pathname === "/settings"}>
            <img src={settingsIcon} />
          </NavLink>
        </NavWrapper>
      </IconList>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 116px;
  background-color: #797979;
`;

const IconList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 252px 37px 0 37px; // 아이콘과 사이드바 사이 여백
  gap: 57px; // 아이콘 사이 간격
`;

const NavLink = styled(Link)`
  color: ${(props) => (props.$isActive ? "#ffffff" : "#8b8b8b")};
`;

const ActiveIndicator = styled.div`
  // 왼쪽 표시 바
  position: absolute;
  width: 5px;
  height: 72px;
  left: -37px; // IconList의 padding-left 값만큼 왼쪽으로
  background: #ffffff;
`;

const NavWrapper = styled.div`
  position: relative;
  height: 72px;
  display: flex;
  align-items: center;
`;
