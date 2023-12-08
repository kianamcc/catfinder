import styled from "styled-components";

import blackCat from "../../assets/blackCat.jpg";

export const AboutContainer = styled.section`
  margin-bottom: 0px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const AboutSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 50px 42px;
  text-align: center;

  @media ${({ theme }) => theme.tablet} {
    text-align: left;
    padding: 100px;
  }

  @media ${({ theme }) => theme.desktop} {
    flex-direction: row;
    padding: 100px;
  }

  &:last-of-type {
    flex-direction: column-reverse;

    @media ${({ theme }) => theme.desktop} {
      flex-direction: initial;
    }
  }
`;

export const BackgroundImageContainer = styled.div`
  height: 100vh;
  background-image: url(${blackCat});
  background-size: 0 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0 0 0 50vw rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
`;

export const AboutUsContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px;
  margin: 25px;
  width: 400px;
  border: rgba(255, 255, 255, 0.4) 2px solid;

  @media ${({ theme }) => theme.tablet} {
    position: absolute;
    width: 500px;
    right: 250px;
    left: 50px;
  }

  @media ${({ theme }) => theme.desktop} {
    position: absolute;
    width: 500px;
    right: 250px;
    left: 50px;
  }
`;

export const AboutText = styled.p<{ $aboutUs?: boolean }>`
  font-size: 0.8rem;
  line-height: 2.5rem;
  overflow: hidden;
  color: ${({ $aboutUs, theme }) =>
    $aboutUs ? "white" : `${theme.lightGrey}`};
  animation: textAppear 500ms;

  @keyframes textAppear {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }

  @media ${({ theme }) => theme.tablet} {
    font-size: 1.3rem;
    line-height: 3rem;
  }
`;

export const AboutSectionTitle = styled.h2`
  font-size: 2rem;
  color: ${({ theme }) => theme.subHeadingOrange};
`;

export const AboutImage = styled.img`
  width: 250px;
  border-radius: 10px;

  @media ${({ theme }) => theme.tablet} {
    width: 350px;
  }
`;

export const AboutPlaceHolderImage = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  background-color: grey;
`;

export const AboutWhoLeft = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const AboutWhoRight = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const AboutMissionLeft = styled(AboutWhoRight)`
  flex: 1;
`;

export const AboutMissionRight = styled(AboutWhoLeft)`
  flex: 1.5;
`;
