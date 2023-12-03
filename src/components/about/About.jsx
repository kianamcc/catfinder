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
} from "./styles";

const About = () => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <AboutContainer id="about">
      <AboutUsContainer>
        <AboutSectionTitle>About Us</AboutSectionTitle>
        <AboutText>
          Welcome to our cat adoption page! We are passionate about finding
          loving homes for our furry friends. Our mission is to match every cat
          with a caring family, providing a second chance for these wonderful
          companions.
        </AboutText>
      </AboutUsContainer>
      <AboutSectionContainer>
        <AboutWhoLeft>
          <AboutSectionTitle>Who we are</AboutSectionTitle>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            cum obcaecati perferendis aliquid deleniti, soluta rerum facere,
            voluptate magnam, ea aperiam! Sapiente facilis a autem, libero
            quidem laborum similique. Tenetur eveniet ducimus aliquid,
            blanditiis quibusdam laboriosam suscipit minus nemo soluta. Quod
            unde
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
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            voluptatem dolor est nulla magni quibusdam quis, minima eveniet
            facilis facere rerum dicta recusandae voluptatum ad. Eius, assumenda
            minima? Atque esse expedita odio porro placeat error, iusto hic quod
          </AboutText>
        </AboutMissionRight>
      </AboutSectionContainer>
    </AboutContainer>
  );
};

export default About;
