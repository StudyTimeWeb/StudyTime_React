import styled from "styled-components";

const TimeSettingBox = ({ small, title }) => {
  return (
    <div>
      <Exp>
        <h3 style={{ margin: "0" }}>{title}</h3>
        {small && <small style={{ color: "#797979" }}>{small}</small>}
      </Exp>
      <SelectionGrid>
        <Select></Select>
        <Select></Select>
        <Select></Select>
        <div style={{ justifySelf: "right" }}>시간</div>
        <div style={{ justifySelf: "right" }}>분</div>
        <div style={{ justifySelf: "right" }}>초</div>
      </SelectionGrid>
    </div>
  );
};

export default TimeSettingBox;

const Select = styled.select`
  box-sizing: border-box;
  width: 6.875rem;
  height: 3.375rem;
  border: none;
  border-radius: 0.5625rem;
  background: #fff;
  flex-shrink: 0;
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
