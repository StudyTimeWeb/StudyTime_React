import styled from "styled-components";

const BigTextBox = ({ title, content, style }) => {
  return (
    <Container style={style}>
      <Title>{title}</Title>
      <Content>{content}</Content>
    </Container>
  );
};

export default BigTextBox;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.div`
  display: block;
  color: #081e00;
  font-family: "Pretendard Variable";
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 550;
  line-height: normal;
`;
const Content = styled.div`
  display: block;
  color: #081e00;
  font-feature-settings: "ss10" on;
  font-family: "Pretendard Variable";
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 300;
  line-height: 150%; /* 2.25rem */
`;
