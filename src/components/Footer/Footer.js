import React from "react";
import ContactForm from "../Contact/Contact";
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify-icons/mdi/instagram";
import twitterIcon from "@iconify-icons/mdi/twitter";
import linkedinIcon from "@iconify-icons/mdi/linkedin";

const socialIcons = [
  {
    id: "linkedin",
    icon: linkedinIcon,
    link: "https://www.linkedin.com/company/enactus-adgitm",
  },
  {
    id: "instagram",
    icon: instagramIcon,
    link: "https://www.instagram.com/enactus.adgitm",
  },
  {
    id: "twitter",
    icon: twitterIcon,
    link: "https://www.twitter.com/adgitmenactus",
  },
];

const contactItems = [
  {
    id: "mail",
    content: "enactusadgitm@gmail.com",
    link: "mailto:enactusadgitm@gmail.com",
  },
  {
    id: "address",
    content:
      "FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park, Shahdara, New Delhi, Delhi-110053",
    link: "https://www.google.com/maps/place/Dr.+Akhilesh+Das+Gupta+Institute+of+Technology+%26+Management/@28.6775927,77.2587263,17z/data=!4m8!1m2!2m1!1sADGITM!3m4!1s0x390cfc5e54e6b163:0x523ae20fe007eccc!8m2!3d28.6779393!4d77.2610976",
  },
];

const Footer = () => {
  return (
    <div className="bg-light">
      <footer className="container-lg text-black w-100 mt-0 px-0 mb-0 pt-3">
        <div className="footer-main col-12 col-sm-10 row mx-0 mx-sm-auto col-md-11 col-lg-12 mx-lg-0 px-0 justify-content-center">
          <div className="footer-main-content col-12 col-lg-7 d-flex flex-column">
            <p className="heading h3 text-center text-lg-left font-weight-bolder">
              Connect With Us
            </p>
            <ul className="social-link list-unstyled row justify-content-center justify-content-lg-start mt-2 px-2 px-md-5 pl-lg-0">
              {socialIcons.map((si) => (
                <li className="col-3 col-sm-2 col-lg-2" key={si.id}>
                  <a
                    role="button"
                    href={si.link}
                    target="blank"
                    className="btn p-0 icon-container bg-dark-gray shadow rounded-lg w-100"
                  >
                    <Icon
                      icon={si.icon}
                      color="black"
                      className="icon w-100 p-0"
                      style={{ height: "auto" }}
                    />
                  </a>
                </li>
              ))}
            </ul>
            <ul className="contact-link list-unstyled ">
              {contactItems.map((ci) => (
                <li
                  className="border border-black rounded mt-3 text-center text-lg-left py-2 px-0 py-lg-2 px-lg-3"
                  key={ci.id}
                >
                  <a href={ci.link} target="blank" className="text-black">
                    {ci.content}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-map col-12 col-lg-5">
            <ContactForm />
          </div>
        </div>
        <div className="copyright col-12 mt-3 py-2 text-center">
          <p className="d-flex flex-column h6 font-weight-light">
            <span>EnactusADGITM © 2020 </span>
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
