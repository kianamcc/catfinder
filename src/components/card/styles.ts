import styled from "styled-components";

export const CardContainer = styled.div`
  box-shadow: 10px 10px 10px grey;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 1em;
  background-color: white;
  transition: all 250ms ease-in-out;

  &:hover {
    transition: all 250ms ease-in-out;
    transform: scale(1.05);
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 50px;
  justify-content: center;
  align-content: center;
`;

export const CardTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
