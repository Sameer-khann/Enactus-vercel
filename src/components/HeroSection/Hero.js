import React, { useEffect, useState } from "react";
import OwlCarousel from "react-owl-carousel";
import { Icon } from "@iconify/react";
import downArrow from "@iconify-icons/mdi/arrow-down-circle";
import { AnimatePresence, motion } from "framer-motion";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Hero.scss";

// import abeerHeroImage2 from "../../Assets/Hero/abeer-hero-image-2.jpg";
import educationDriveImage from "../../Assets/Hero/education-drive.jpg";
import gnosisImage from "../../Assets/Hero/GNOSIS.JPG";
// import diwaliStallsImage from "../../Assets/Hero/Diwali stalls.jpg";
import MenstrualDrive from "../../Assets/Hero/Menstrual Drive.jpg";
import bloodDonationImage from "../../Assets/Hero/BD Drive.jpg";

// only add hero items here
const heroItemList = [
  //   {
  //     image: abeerHeroImage2,
  //     text: "ABEER IS NOW LIVE",
  //   },
  {
    image: gnosisImage,
    text: "GNOSIS'22",
  },
  {
    image: MenstrualDrive,
    text: "MENSTRUAL HYGIENE DRIVE ",
  },
  {
    image: bloodDonationImage,
    text: "BLOOD DONATION DRIVE",
  },
  {
    image: educationDriveImage,
    text: "EDUCATION DRIVE",
  },
];

export default function Hero() {
  const [y, updateY] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      updateY(window.scrollY);
    });
  }, []);

  function onArrowClick() {
    const hero = document.querySelector(".hero");
    const header = document.querySelector("nav");
    window.scrollBy({
      top:
        hero.getBoundingClientRect().bottom -
        header.getBoundingClientRect().bottom,
      behavior: "smooth",
    });
  }

  return (
    <motion.div
      className="hero position-relative safe-space"
      style={{ overflow: "hidden" }}
    >
      <OwlCarousel
        margin={1}
        autoWidth
        loop
        autoPlay
        navContainerClass="nav-cotainer"
        nav
        fluidSpeed={50}
        center
        className="hero-carousel"
      >
        {heroItemList.map((item, index) => (
          <div
            key={index}
            className="item position-relative h3 text-primary font-weight-bolder hero"
            style={{
              backgroundImage: `url("${item.image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderImageRepeat: "norepeat",
              zIndex: -3,
            }}
          >
            <div
              className="mask hero"
              style={{
                backgroundColor: "black",
                opacity: 0.4,
                position: "absolute",
                zIndex: -2,
              }}
            />
            <div
              className="h-auto d-flex justify-content-center align-items-center position-absolute text-center"
              style={{
                zIndex: -1,
                left: "50%",
                top: "50%",
                width: "calc(80 * var(--vw))",
                transform: "translate(-50%, -50%)",
              }}
            >
              {item.text}
            </div>
          </div>
        ))}
      </OwlCarousel>
      <AnimatePresence exitBeforeEnter>
        {y < 40 && (
          <motion.div
            style={{
              zIndex: 3,
              bottom: 0,
              left: "calc(50% - 1.5rem)",
            }}
            onClick={onArrowClick}
            className="d-flex btn position-absolute p-0 m-0"
            initial={{ y: 0 }}
            animate={{
              y: [-10, 10, -10],
              transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              y: 0,
              transition: { duration: 1 },
            }}
          >
            <Icon
              icon={downArrow}
              color="#fcc21e"
              width="3rem"
              className="mb-4"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
