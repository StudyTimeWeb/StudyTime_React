import styled from "styled-components";

export const CenterAlignedContainerDiv = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  justify-self: center;
`;

export const CenterJustifiedContainerDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-self: center;
`;

export const AppGridLayout = styled.div`
  display: grid;
  justify-items: center;
  justify-content: center;
  align-items: center;
  grid-template-columns: minmax(max-content, 6fr) minmax(auto, 94fr);
  height: 100vh;
`;

export const OverflowContainer = styled.div`
  box-sizing: border-box;
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;

  &::-webkit-scrollbar {
    height: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 1rem;
  }

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 1rem;
    }
  }

  margin: 0;
  padding: 0;
`;

export const PageLayout = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 0;
`;
