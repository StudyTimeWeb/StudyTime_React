import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import RightPanel from "../components/RightPanel";

const Home = () => {
    return (
        <Container>
            <Sidebar />
            <RightPanel />
        </Container>
    )
}

export default Home;

const Container = styled.div`
`;