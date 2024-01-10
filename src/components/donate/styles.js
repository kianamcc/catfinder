import styled from "styled-components";
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GiCannedFish } from "react-icons/gi";

import catImage from "../../assets/cat.jpg";

export const DonatePerksContainer = styled.div`
  background-color: #fefae0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 35px 0px;
  flex-direction: column;

  @media ${({ theme }) => theme.tablet} {
    flex-direction: row;
    padding: 50px 0px;
  }

  @media ${({ theme }) => theme.desktop} {
    gap: 50px;
  }
`;

export const DonateTopSection = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: " ";
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: url(${catImage});
    background-size: cover;
    background-repeat: repeat;
    background-position: 60% -70px;
  }

  @media ${({ theme }) => theme.tablet} {
    height: 60vh;
  }

  @media ${({ theme }) => theme.desktop} {
    height: 70vh;

    &::before {
      background-position: 60% -167px;
    }
  }
`;

export const DonationLink = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  font-weight: 600;
  font-size: 1.2rem;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
  height: 90px;
  width: 85%;
  border-radius: 5px;
  padding: 5px;
  transition: all 200ms ease-in-out;
  color: #432818;
  margin-left: auto;
  margin-right: auto;

  &:hover {
    background-color: rgba(0, 0, 0, 0.075);
  }

  @media ${({ theme }) => theme.tablet} {
    height: 120px;
    width: 100%;
  }
`;

export const Blob1 = styled.div`
  display: none;

  @media ${({ theme }) => theme.desktop} {
    overflow: hidden;
    position: absolute;
    top: 200px;
    left: 10px;
    z-index: -1;
    width: 150px;
    height: 150px;
    background-color: grey;
    border-radius: 30% 70% 70% 30% / 30% 45% 55% 70%;
    display: block;
    top: 250px;
    left: 295px;
    width: 250px;
    height: 250px;
  }
`;

export const Blob2 = styled.div`
  display: none;

  @media ${({ theme }) => theme.desktop} {
    display: block;
    overflow: hidden;
    position: absolute;
    top: 250px;
    left: 220px;
    z-index: -1;
    width: 150px;
    height: 100px;
    background-color: pink;
    border-radius: 76% 24% 29% 72% / 46% 61% 39% 25%;
    width: 250px;
    height: 300px;
    top: 200px;
    left: 820px;
  }
`;

export const DonateTitle = styled.h2`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;

  @media ${({ theme }) => theme.tablet} {
    font-size: 4rem;
  }
`;

export const DonateResources = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0px 50px 0px;

  @media ${({ theme }) => theme.tablet} {
    margin: 100px 90px;
  }
`;

export const DonateLinkItem = styled.li`
  list-style: none;
`;

export const DonationLinksSubheading = styled.p`
  font-size: 1.2rem;
  padding: 20px;
  text-align: center;

  @media ${({ theme }) => theme.tablet} {
    font-size: 1.4rem;
    padding: 0px;
  }
`;

export const DonatePerkItem = styled.div`
  background-color: #fffffc;
  border-radius: 50%;
  border: 10px solid #ffbe0b;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 5px;

  @media ${({ theme }) => theme.tablet} {
    width: 200px;
    height: 200px;
  }

  @media ${({ theme }) => theme.desktop} {
    width: 250px;
    height: 250px;
  }
`;

export const StyledBiHomeHeart = styled(BiHomeHeart)`
  width: 35px;
  height: 35px;

  @media ${({ theme }) => theme.tablet} {
    width: 45px;
    height: 45px;
  }

  @media ${({ theme }) => theme.desktop} {
    width: 55px;
    height: 55px;
  }
`;

export const StyledMdOutlineMedicalServices = styled(MdOutlineMedicalServices)`
  width: 35px;
  height: 35px;

  @media ${({ theme }) => theme.tablet} {
    width: 45px;
    height: 45px;
  }

  @media ${({ theme }) => theme.desktop} {
    width: 55px;
    height: 55px;
  }
`;

export const StyledGiCannedFish = styled(GiCannedFish)`
  width: 35px;
  height: 35px;

  @media ${({ theme }) => theme.tablet} {
    width: 45px;
    height: 45px;
  }

  @media ${({ theme }) => theme.desktop} {
    width: 55px;
    height: 55px;
  }
`;

export const DonationLinksTitle = styled.h3`
  text-align: center;
  font-size: 1.8rem;
  padding-bottom: 15px;

  @media ${({ theme }) => theme.tablet} {
    font-size: 2.5rem;
  }
`;

export const DonatePerkDescription = styled.p`
  margin: 5px 20px 0px 20px;
`;

export const DonationLinksContainer = styled.ul`
  /* display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 45px 100px 0px 100px;

   */

  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  padding: 0;
  width: 100%;

  @media ${({ theme }) => theme.tablet} {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }
`;
