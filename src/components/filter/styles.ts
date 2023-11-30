import styled from "styled-components";
import { FaSearchLocation } from "react-icons/fa";

export const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px 0px;

  @media ${({ theme }) => theme.tablet} {
    margin: 50px 0px;
  }
`;

export const InputBoxContainer = styled.div`
  height: 50px;
  width: 50%;
  background-color: #ffff;
  display: flex;
  align-items: center;
  padding: 0px 10px;

  @media ${({ theme }) => theme.tablet} {
    width: 50%;
  }
`;

export const FilterInputBox = styled.input<{ props }>`
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.1);
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  height: 100%;
  width: 100%;
  text-indent: 5px;
  font-family: "Mali", sans-serif;
  padding: 0px 15px;
  border: ${({ props, theme }) =>
    props.error && `2px solid ${theme.errorRed};`};

  &::placeholder {
    color: ${({ theme }) => theme.lightGrey};
  }
`;

export const FilterButton = styled(FaSearchLocation)`
  margin-left: auto;
  border: none;
  background: none;
  cursor: pointer;
  padding-left: 10px;
`;

export const InputErrorText = styled.p`
  color: ${({ theme }) => theme.errorRed};
  font-weight: 800;
  padding: 10px 0px;
`;
