import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="footer">
      <footer>
        <div className="footer-container">
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link className="styled-link" to={"/donate"}>
                    Donate
                  </Link>
                </li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li>Hours of Operation: Monday to Friday, 8am-5pm (PST)</li>
                <li>Email: general@catfinder.org</li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Connect With Us</h3>
              <ul className="social-icons-container">
                <li>
                  <BsFacebook className="footer-icons" />
                </li>
                <li>
                  <BsInstagram className="footer-icons" />
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <span className="copyright-text">@2023 CatFinder</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
