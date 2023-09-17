import React from "react";
import {
  FeaturedProject,
  Hero,
  OurMission,
  About,
  Team,
  NavBar,
} from "../components";
// import adgitm from "../Assets/adgitm.jpeg";
const navlinks = [
  {
    title: "home",
    link: "/",
  },
  {
    title: "store",
    link: "https://darpan.enactusadgitm.in",
    target: "blank",
  },
  {
    title: "projects",
    link: "/projects",
  },
  {
    title: "contact",
    link: "/#contact-form",
  },
];

const Home = () => {
  return (
    <>
      <NavBar items={navlinks} />
      <Hero />
      <About />
      <OurMission />
      <FeaturedProject />
      <Team />
      {/* <div className='heading h2 text-uppercase text-primary font-weight-600 text-center mb-4'>
				Our College Placement
				<hr
					className='bg-primary mt-0'
					style={{ width: '4.3rem', height: ".2rem" }}
				/>
			</div>
			<img className="college" src={adgitm} alt="adgitm" /> */}
    </>
  );
};
export default Home;
