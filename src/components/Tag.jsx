import styled from "styled-components";
import AddIcon from "./../assets/icons/button/AddIcon.svg";

const Tag = ({ content, img }) => {
  return (
    <>
      <ColoredRoundDiv>
        {content ? (
          content
        ) : (
          <img
            src={AddIcon}
            style={{ width: "0.9375rem", height: "0.9375rem" }}
          />
        )}
      </ColoredRoundDiv>
    </>
  );
};

export default Tag;

const ColoredRoundDiv = styled.div`
  width: 2.4375rem;
  height: 2.4375rem;
  flex-shrink: 0;
  border-radius: 0.625rem;
  background: #f3f3f3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
