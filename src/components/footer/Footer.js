import React from "react";
import "./Footer.css";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import footerLogo from "../../assets/nav-logo.png";

const Footer = () => {
  return (
    <section className="footer">
      <footer>
        <div className="footer-container">
          <img src={footerLogo} alt="footer-logo" className="footer-logo" />
          <div className="footer-columns">
            <div className="footer-column">
              <h3>Resources</h3>
              <ul>
                <li>Donate</li>
                <li>Get Involved</li>
                <li>Events</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li>Hours of Operation</li>
                <li>Phone: 000-000-0000</li>
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
            <div className="footer-column">
              <h3>News</h3>
              <ul>
                <li>Stay Updated</li>
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
