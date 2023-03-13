import React from "react";
import "./Donate.css";
import kittens from "../../assets/kittens.jpg";
import { BiHomeHeart } from "react-icons/bi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { GiCannedFish } from "react-icons/gi";
import { IoPawSharp } from "react-icons/io5";

const Donate = () => {
  return (
    <section className="donate">
      <div className="donate-top">
        <div className="donate-top-container">
          <div className="donate-title-container">
            <h2 className="donate-title">Donate Today</h2>
          </div>
        </div>
      </div>
      <div className="donate-bottom">
        <div className="donate-perks">
          <div className="donate-perk-item">
            <GiCannedFish size={75} className="donate-icon" />
            <span className="donate-description">
              Food, bedding, and other basic supplies
            </span>
          </div>
          <div className="donate-perk-item">
            <MdOutlineMedicalServices size={75} className="donate-icon" />
            <span className="donate-description">Veterinarian care</span>
          </div>
          <div className="donate-perk-item">
            <BiHomeHeart size={75} className="donate-icon" />
            <span className="donate-description">
              Give animals a chance to find a home
            </span>
          </div>
        </div>
        <h3 className="donation-links-title">
          Resources to help you get started
        </h3>
        <p className="donation-links-subheading">
          There are many organizations and programs you can donate to. If you
          don't know where to start, here are a few to help you get started!
        </p>
        <ul className="donation-links-container">
          <li className="donate-link-item">
            <a
              className="donation-link"
              href="https://petfinderfoundation.com/donate/"
              target="_blank"
              rel="noreferrer"
            >
              Petfinder
            </a>
            <IoPawSharp size={40} className="donate-pawprint" />
          </li>
          <li className="donate-link-item">
            <a
              className="donation-link"
              href="https://support.bestfriends.org/site/Donation2?df_id=3818&mfc_pref=T&3818.donation=form1&gclid=CjwKCAjw6dmSBhBkEiwA_W-EoLkCOCS9sNjDhqr8uDmrqCBRBeC0pL4-_QNcJ3v5B5YfuQCCXI_yexoCXVQQAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              rel="noreferrer"
            >
              Best Friends Animal Society
            </a>
            <IoPawSharp size={40} className="donate-pawprint" />
          </li>
          <li className="donate-link-item">
            <a
              className="donation-link"
              href="https://secured.humanesociety.org/page/81880/donate/1?ea.profile.id=37611&transaction.donationAmt=40&ea.tracking.id=ad_gg_branded&en_txn10=ad_gg_cpc_120727562_7704793562_495382227104_humane%20society%20of%20the%20united%20states&en_og_source=ad_gg_fndr_81880_hsus&utm_source=google&utm_medium=cpc&utm_term=humane%20society%20of%20the%20united%20states&gclid=CjwKCAjw6dmSBhBkEiwA_W-EoKjmgZLADJmMa0BkwrirWlA6Gjtbz2SQJhXKimCgmXL8jysL6YKtCRoCnmEQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              The Humane Society of The United States
            </a>
            <IoPawSharp size={40} className="donate-pawprint" />
          </li>
          <li className="donate-link-item">
            <a
              className="donation-link"
              href="https://americanhumane.salsalabs.org/support/index.html?sl_tc=0122_website_topnav&utm_source=AH+Website&utm_medium=website&utm_campaign=FY22+New+Year&utm_content=website+top+nav"
              target="_blank"
              rel="noreferrer"
            >
              American Humane
            </a>
            <IoPawSharp size={40} className="donate-pawprint" />
          </li>
          <li className="donate-link-item">
            <a
              className="donation-link"
              href="https://secure.petsmartcharities.org/give/219478/#!/donation/checkout?c_src=pci_web&c_src2=donate_redirect"
              target="_blank"
              rel="noreferrer"
            >
              PetSmart Charities
            </a>
            <IoPawSharp size={40} className="donate-pawprint" />
          </li>
          <li className="donate-link-item">
            <a
              className="donation-link"
              href="https://getinvolved.alleycat.org/site/Donation2?df_id=9083&9083.donation=form1&mfc_pref=T&s_src=a1oxxxwdbcn&autologin=true&gclid=CjwKCAjw6dmSBhBkEiwA_W-EoG5_oXb5jZlgpEQZs-8GUkMvmpKfYeThcEzzFHP3djG6ssYxp3yh1BoCbZEQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              Alley Cat Allies
            </a>
            <IoPawSharp size={40} className="donate-pawprint" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Donate;
