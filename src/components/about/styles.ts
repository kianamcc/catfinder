import styled from "styled-components";

export const AboutContainer = styled.section`
  margin-bottom: 0px;
  padding: 100px 50px;
  background-color: #fff3b0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 100px;

  @media ${({ theme }) => theme.desktop} {
    padding: 150px 100px;
  }
`;

export const AboutSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  /* padding: 20px; */

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

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const AboutText = styled.p`
  font-size: 0.8;
  line-height: 3rem;
  overflow: hidden;
  color: ${({ theme }) => theme.lightGrey};
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
  }
`;

export const AboutSectionTitle = styled.h2`
  font-size: 2rem;
`;

export const AboutImage = styled.img`
  width: 250px;
  border-radius: 10px;
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
