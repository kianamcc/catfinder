import React from "react";
import "./About.css";
import cat from "../../assets/cat.jpg";
import catWhoImg from "../../assets/cat-about-1.jpg";
import catMissionImg from "../../assets/cat-about-0.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-us-container about-flex-item">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            animi amet soluta perspiciatis iusto earum laudantium doloribus
            obcaecati laboriosam, porro facilis minima architecto accusamus
            temporibus, tempore suscipit veritatis. Vel, et dolor vero pariatur
            reprehenderit cum dolorem omnis voluptate qui enim suscipit
            temporibus ex nesciunt repudiandae veniam dicta cumque ducimus
            totam?
          </p>
        </div>
        <div className="about-who-container about-flex-item">
          <div className="about-who-left">
            <h2 className="about-title">Who we are</h2>
            <p className="about-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate cum obcaecati perferendis aliquid deleniti, soluta
              rerum facere, voluptate magnam, ea aperiam! Sapiente facilis a
              autem, libero quidem laborum similique. Tenetur eveniet ducimus
              aliquid, blanditiis quibusdam laboriosam suscipit minus nemo
              soluta. Quod unde, blanditiis quam est, incidunt ab vero provident
              cumque corporis eveniet autem error aliquam ea ducimus natus
              maxime repudiandae?
            </p>
          </div>
          <div className="about-who-right">
            <img src={catWhoImg} alt="about-cat" className="about-who-img" />
          </div>
        </div>
        <div className="about-mission-container about-flex-item">
          <div className="about-mission-left">
            <img
              src={catMissionImg}
              alt="about-cat"
              className="about-mission-img"
            />
          </div>
          <div className="about-mission-right">
            <h2 className="about-title">Our Mission</h2>
            <p className="about-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              voluptatem dolor est nulla magni quibusdam quis, minima eveniet
              facilis facere rerum dicta recusandae voluptatum ad. Eius,
              assumenda minima? Atque esse expedita odio porro placeat error,
              iusto hic quod, quae reiciendis architecto beatae id fuga sint
              totam at quasi soluta maiores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;