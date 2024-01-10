import React from "react";

import {
  DonateLinkItem,
  DonatePerkItem,
  DonatePerksContainer,
  DonateResources,
  DonateTitle,
  DonateTopSection,
  DonationLink,
  DonationLinksSubheading,
  StyledBiHomeHeart,
  StyledMdOutlineMedicalServices,
  StyledGiCannedFish,
  DonationLinksTitle,
  DonatePerkDescription,
  DonationLinksContainer,
} from "./styles";

const Donate = () => {
  return (
    <section className="donate">
      <DonateTopSection>
        <DonateTitle>Donate Today</DonateTitle>
        <DonationLinksSubheading>
          Compassion in Action: Your Donation Saves Lives!
        </DonationLinksSubheading>
      </DonateTopSection>
      <DonatePerksContainer>
        <DonatePerkItem>
          <StyledGiCannedFish />
          <DonatePerkDescription>
            Food, bedding, and other basic supplies
          </DonatePerkDescription>
        </DonatePerkItem>
        <DonatePerkItem>
          <StyledMdOutlineMedicalServices />
          <DonatePerkDescription>Veterinarian care</DonatePerkDescription>
        </DonatePerkItem>
        <DonatePerkItem>
          <StyledBiHomeHeart />
          <DonatePerkDescription>
            Give animals a chance to find a home
          </DonatePerkDescription>
        </DonatePerkItem>
      </DonatePerksContainer>
      <DonateResources>
        <DonationLinksTitle>
          Resources to help you get started
        </DonationLinksTitle>
        <DonationLinksSubheading>
          There are many organizations and programs you can donate to. If you
          don't know where to start, here are a few to help you get started!
        </DonationLinksSubheading>
        <DonationLinksContainer>
          <DonateLinkItem>
            <DonationLink
              href="https://petfinderfoundation.com/donate/"
              target="_blank"
              rel="noreferrer"
            >
              Petfinder
            </DonationLink>
          </DonateLinkItem>
          <DonateLinkItem>
            <DonationLink
              href="https://support.bestfriends.org/site/Donation2?df_id=3818&mfc_pref=T&3818.donation=form1&gclid=CjwKCAjw6dmSBhBkEiwA_W-EoLkCOCS9sNjDhqr8uDmrqCBRBeC0pL4-_QNcJ3v5B5YfuQCCXI_yexoCXVQQAvD_BwE&gclsrc=aw.ds"
              target="_blank"
              rel="noreferrer"
            >
              Best Friends Animal Society
            </DonationLink>
          </DonateLinkItem>
          <DonateLinkItem>
            <DonationLink
              href="https://secured.humanesociety.org/page/81880/donate/1?ea.profile.id=37611&transaction.donationAmt=40&ea.tracking.id=ad_gg_branded&en_txn10=ad_gg_cpc_120727562_7704793562_495382227104_humane%20society%20of%20the%20united%20states&en_og_source=ad_gg_fndr_81880_hsus&utm_source=google&utm_medium=cpc&utm_term=humane%20society%20of%20the%20united%20states&gclid=CjwKCAjw6dmSBhBkEiwA_W-EoKjmgZLADJmMa0BkwrirWlA6Gjtbz2SQJhXKimCgmXL8jysL6YKtCRoCnmEQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              The Humane Society of The United States
            </DonationLink>
          </DonateLinkItem>
          <DonateLinkItem>
            <DonationLink
              href="https://DonationLinkmericanhumane.salsalabs.org/support/index.html?sl_tc=0122_website_topnav&utm_source=AH+Website&utm_medium=website&utm_campaign=FY22+New+Year&utm_content=website+top+nav"
              target="_blank"
              rel="noreferrer"
            >
              American Humane
            </DonationLink>
          </DonateLinkItem>
          <DonateLinkItem>
            <DonationLink
              href="https://secure.petsmartcharities.org/give/219478/#!/donation/checkout?c_src=pci_web&c_src2=donate_redirect"
              target="_blank"
              rel="noreferrer"
            >
              PetSmart Charities
            </DonationLink>
          </DonateLinkItem>
          <DonateLinkItem>
            <DonationLink
              href="https://getinvolved.alleycat.org/site/Donation2?df_id=9083&9083.donation=form1&mfc_pref=T&s_src=a1oxxxwdbcn&autologin=true&gclid=CjwKCAjw6dmSBhBkEiwA_W-EoG5_oXb5jZlgpEQZs-8GUkMvmpKfYeThcEzzFHP3djG6ssYxp3yh1BoCbZEQAvD_BwE"
              target="_blank"
              rel="noreferrer"
            >
              Alley Cat Allies
            </DonationLink>
          </DonateLinkItem>
        </DonationLinksContainer>
      </DonateResources>
    </section>
  );
};

export default Donate;
