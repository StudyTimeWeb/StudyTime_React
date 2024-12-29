import styled from "styled-components";

const SubjectSettingBox = ({ small, title, onChange, value }) => {
  return (
    <div>
      <Exp>
        <h3 style={{ margin: "0", padding: "0" }}>{title}</h3>
        {small && <small style={{ color: "#797979" }}>{small}</small>}
      </Exp>
      <InputDiv placeholder="과목 이름" value={value} onChange={onChange} />
    </div>
  );
};

export default SubjectSettingBox;

const InputDiv = styled.input`
  box-sizing: border-box;
  width: 21.5625rem;
  height: 3.375rem;
  flex-shrink: 0;
  border-radius: 0.5625rem;
  background: #fff;
  border: none;
  outline: none;
  padding: 0.8rem 1.44rem;
`;

const SelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 0.41rem;
`;

const Exp = styled.div`
  margin-bottom: 1rem;
`;
