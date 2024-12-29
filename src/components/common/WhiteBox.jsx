import styled from "styled-components";
import * as s from "./../../css/CommonStyled";

const WhiteBox = ({ children, title = null, style }) => {
  return (
    <WhiteBoxLayout style={style}>
      {title && <Title>{title}</Title>}

      {children}
    </WhiteBoxLayout>
  );
};

export default WhiteBox;

const Title = styled.div`
  color: #081e00;
  font-family: "Pretendard Variable";
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1.4rem;
`;

const WhiteBoxLayout = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  box-sizing: border-box;
  white-space: nowrap;
  max-width: 43rem;
  width: flex;
  min-height: fit-content;
  max-height: flex;
  border-radius: 0.9375rem;
  background: #fff;
  padding: 1.72rem 1.5rem;
`;
