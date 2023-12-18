import styled from "styled-components";
import { AiFillHeart } from "react-icons/ai";

export const StyledAiFillHeart = styled(AiFillHeart)`
  color: #ef233c;
`;

export const CardContainer = styled.div`
  box-shadow: 10px 10px 10px grey;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding: 1.5em;
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
  grid-gap: 25px;
  justify-content: center;
  align-content: center;

  @media ${({ theme }) => theme.tablet} {
    grid-gap: 40px;
  }
`;

export const CardTopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardImageContainer = styled.div`
  height: 50%;
  margin: 0.5em 0;
`;

export const CardImage = styled.img`
  border-radius: 20px;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  grid-gap: 20px;
  justify-content: center;
  align-content: center;
`;

export const CardBottomSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: scroll;
  font-size: 0.9rem;
`;

export const CardInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const CardEmailLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const CardHashtags = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-end;
  gap: 2px;
  flex-wrap: wrap;
`;

export const CardDescription = styled.div`
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-y: scroll;
  line-height: 1.5em;
`;

export const NoFavoritesContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export const NoFavoritesText = styled.h2`
  font-size: 1.5rem;
  padding-top: 50px;
`;
