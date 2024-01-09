import React from "react";

import catImg from "../../assets/cat2.jpg";

import {
  HomeTitle,
  Subheading,
  HomeButton,
  StyledImg,
  HomeContainer,
  HomeRightContainer,
  HomeLeftContainer,
  StyledLink,
} from "./styles";

const Home = () => {
  return (
    <HomeContainer id="home">
      <HomeLeftContainer>
        <HomeTitle>Find Your New Best Friend Today</HomeTitle>
        <Subheading>
          Looking for your new friend for life? Start your search today!
        </Subheading>
        <StyledLink to="filter" spy={true} smooth={true} duration={500}>
          <HomeButton>Start Search</HomeButton>
        </StyledLink>
      </HomeLeftContainer>
      <HomeRightContainer>
        <StyledImg alt="" src={catImg} />
      </HomeRightContainer>
    </HomeContainer>
  );
};

export default Home;
