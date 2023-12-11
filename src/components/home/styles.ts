import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledLink = styled(Link)`
  margin-top: 45px;
`;

export const HomeContainer = styled.section`
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  gap: 50px;
  background-color: #fefae0;

  @media ${({ theme }) => theme.tablet} {
    flex-direction: row;
    padding: 40px;
  }

  @media ${({ theme }) => theme.desktop} {
    padding: 90px;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 2rem;

  @media ${({ theme }) => theme.tablet} {
    font-size: 3rem;
  }

  @media ${({ theme }) => theme.desktop} {
    font-size: 4rem;
  }
`;

export const Subheading = styled.p`
  color: ${({ theme }) => theme.lightGrey};
  font-weight: 400;
`;

export const HomeButton = styled.button`
  padding: 15px;
  font-size: 1.2rem;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  width: 100%;
  color: white;
  letter-spacing: 2px;
  background-color: #ffbe0b;
  transition: 300ms ease-in-out;
  white-space: nowrap;

  &:hover {
    transition: 300ms ease-in-out;
    transform: scale(1.08);
  }

  @media ${({ theme }) => theme.tablet} {
    width: 70%;
  }

  @media ${({ theme }) => theme.desktop} {
    width: 50%;
  }
`;

export const StyledImg = styled.img`
  width: 100%;
  border-radius: 50%;
  position: relative;
  transform: translateX(100%);
  animation: slideIn 250ms forwards;

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0%);
    }
  }
`;

export const HomeRightContainer = styled.div`
  flex: 1;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
`;

export const HomeLeftContainer = styled.div`
  flex: 0.9;
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
