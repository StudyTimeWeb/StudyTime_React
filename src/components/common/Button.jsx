import styled from "styled-components";

const Button = ({ style, text, onClick }) => {
  return (
    <ButtonStyle style={style} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
};

export default Button;

const ButtonStyle = styled.div`
  width: 7.0625rem;
  height: 3.3125rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background-color: #e6e6e6;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000;
  font-family: "Pretendard Variable";
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 600;
  line-height: 140%; /* 1.575rem */
  letter-spacing: -0.01125rem;
`;
