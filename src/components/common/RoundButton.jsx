import styled from "styled-components";

const RoundButton = ({ style = null, text, img, onClick }) => {
  return (
    <ButtonStyle type="button" style={style} onClick={onClick}>
      <img src={img} />
      {text}
    </ButtonStyle>
  );
};

export default RoundButton;

const ButtonStyle = styled.button`
  box-sizing: border-box;
  width: 6.80719rem;
  height: 3.1875rem;
  border: none;
  color: #797979;
  flex-shrink: 0;
  border-radius: 1.6875rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  align-content: center;
  padding: 0.5rem;
  cursor: pointer;
`;
