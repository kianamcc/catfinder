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
    padding: 70px 90px;
  }
`;

export const HomeTitle = styled.h1`
  font-size: 1.8rem;

  @media ${({ theme }) => theme.tablet} {
    font-size: 2.8rem;
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
  border-radius: 25px;
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
    width: 50%;
  }

  @media ${({ theme }) => theme.desktop} {
    width: 40%;
  }
`;

export const StyledImg = styled.img`
  max-width: 320px;
  max-height: 320px;
  border-radius: 33% 67% 42% 58% / 49% 37% 63% 51%;
  z-index: 2;

  @media ${({ theme }) => theme.tablet} {
    max-width: 340px;
    max-height: 340px;
  }

  @media ${({ theme }) => theme.desktop} {
    max-width: 440px;
    max-height: 410px;
  }
`;

export const HomeRightContainer = styled.div`
  flex: 0.75;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
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

export const HomeLeftContainer = styled.div`
  flex: 0.9;
  height: 100%;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;
