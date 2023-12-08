import React, { useState } from "react";

import catWhoImg from "../../assets/cat-about-1.jpg";
import catMissionImg from "../../assets/cat-about-0.jpg";

import {
  AboutContainer,
  AboutText,
  AboutSectionTitle,
  AboutImage,
  AboutPlaceHolderImage,
  AboutUsContainer,
  AboutSectionContainer,
  AboutMissionLeft,
  AboutMissionRight,
  AboutWhoLeft,
  AboutWhoRight,
  BackgroundImageContainer,
} from "./styles";

const About = () => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <AboutContainer id="about">
      <BackgroundImageContainer>
        <AboutUsContainer>
          <AboutSectionTitle>About Us</AboutSectionTitle>
          <AboutText $aboutUs={true}>
            Welcome to our cat adoption page! We are passionate about finding
            loving homes for our furry feline friends.
          </AboutText>
        </AboutUsContainer>
      </BackgroundImageContainer>

      <AboutSectionContainer>
        <AboutWhoLeft>
          <AboutSectionTitle>Who we are</AboutSectionTitle>
          <AboutText>
            At Catfinder, we're a dedicated team passionate about connecting
            cats in need with loving homes. Our mission is to rescue, care for,
            and facilitate adoptions, ensuring each cat finds a family where
            they'll thrive. Join us in our commitment to making a difference in
            the lives of these incredible felines.
          </AboutText>
        </AboutWhoLeft>
        <AboutWhoRight>
          {imageLoading ? (
            <AboutPlaceHolderImage />
          ) : (
            <AboutImage
              src={catWhoImg}
              alt="about-cat-1"
              onLoad={() => setImageLoading(false)}
              loading="lazy"
            />
          )}
        </AboutWhoRight>
      </AboutSectionContainer>

      <AboutSectionContainer>
        <AboutMissionLeft>
          <AboutImage
            src={catMissionImg}
            alt="about-cat-2"
            onLoad={() => setImageLoading(false)}
            loading="lazy"
          />
        </AboutMissionLeft>
        <AboutMissionRight>
          <AboutSectionTitle>Our Mission</AboutSectionTitle>
          <AboutText>
            Our mission is to provide a second chance to cats from all walks of
            life - whether they're strays, rescues, or in foster care. Through
            our efforts, we strive to be a beacon of hope and support for cats
            regardless of their origin, promoting the value of adoption and
            responsible pet guardianship within our community.
          </AboutText>
        </AboutMissionRight>
      </AboutSectionContainer>
    </AboutContainer>
  );
};

export default About;
