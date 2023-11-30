import React, { useEffect, useState } from "react";
import "./About.css";
import catWhoImg from "../../assets/cat-about-1.jpg";
import catMissionImg from "../../assets/cat-about-0.jpg";

import {
  AboutContainer,
  AboutText,
  AboutSectionTitle,
  AboutImage,
  AboutPlaceHolderImage,
} from "./styles";

const About = () => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <AboutContainer id="about">
      <div className="about-us-container about-flex-item">
        <AboutSectionTitle>About Us</AboutSectionTitle>
        <AboutText>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
          animi amet soluta perspiciatis iusto earum laudantium doloribus
          obcaecati laboriosam, porro facilis minima architecto accusamus
          temporibus, tempore suscipit veritatis. Vel, et dolor vero pariatur
          reprehenderit cum dolorem omnis voluptate qui enim suscipit temporibus
          ex nesciunt repudiandae veniam dicta cumque ducimus totam?
        </AboutText>
      </div>
      <div className="about-who-container about-flex-item">
        <div className="about-who-left">
          <AboutSectionTitle>Who we are</AboutSectionTitle>
          <AboutText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            cum obcaecati perferendis aliquid deleniti, soluta rerum facere,
            voluptate magnam, ea aperiam! Sapiente facilis a autem, libero
            quidem laborum similique. Tenetur eveniet ducimus aliquid,
            blanditiis quibusdam laboriosam suscipit minus nemo soluta. Quod
            unde
          </AboutText>
        </div>
        <div className="about-who-right">
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
        </div>
      </div>
      <div className="about-mission-container about-flex-item">
        <div className="about-mission-left">
          {/* {imageLoading ? (
            <AboutPlaceHolderImage />
          ) : ( */}
          <AboutImage
            src={catMissionImg}
            alt="about-cat-2"
            onLoad={() => setImageLoading(false)}
            loading="lazy"
          />
          {/* )} */}
        </div>
        <div className="about-mission-right">
          <AboutSectionTitle>Our Mission</AboutSectionTitle>
          <AboutText>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
            voluptatem dolor est nulla magni quibusdam quis, minima eveniet
            facilis facere rerum dicta recusandae voluptatum ad. Eius, assumenda
            minima? Atque esse expedita odio porro placeat error, iusto hic quod
          </AboutText>
        </div>
      </div>
    </AboutContainer>
  );
};

export default About;
