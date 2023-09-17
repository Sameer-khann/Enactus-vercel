import React from "react";

import { ProjectList } from "./ProjectList";
import { useState } from "react";
import { ProjectsDropDown } from "../index";

const PastProjects = () => {
  const [currentIndex, updateCurrentIndex] = useState(0);

  const onLogoClick = (index) => {
    updateCurrentIndex(index);
    const projectContentBox = document.querySelector("#selected-project");
    const header = document.querySelector("nav");
    window.scrollBy({
      top:
        projectContentBox.getBoundingClientRect().top -
        header.getBoundingClientRect().height,
      behavior: "smooth",
    });
    console.log(header);
  };
  return (
    <div className="container-fluid">
      <section>
        <div className="past-projects">
          <div className="past-projects-heading h1 text-primary text-center font-weight-bolder mt-5">
            Past Projects
          </div>
          <ProjectsDropDown
            items={ProjectList}
            currentItem={currentIndex}
            updateCurrentItem={onLogoClick}
            className="d-lg-none mx-1"
          />
          <div className="past-projects-images container-fluid d-none d-lg-block">
            <ul className="images row list-unstyled d-flex flex-row justify-content-center px-5">
              {ProjectList.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="col-3 col-lg-2 mx-0 mt-4 d-flex align-items-strecth justify-content-center"
                  >
                    <div className="w-100 d-flex align-items-stretch justify-content-center">
                      <img
                        role="button"
                        src={item.logo}
                        alt={item.title}
                        className="image w-100 border border-black p-0 rounded-lg shadow-lg"
                        onClick={() => onLogoClick(index)}
                      ></img>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <section className="row mt-4" id="selected-project">
        <div className="selected-project-box bg-primary-light col-12 row m-0 px-0 py-5 justify-content-center align-items-center">
          <div className="selected-project-image col-12 col-sm-7 col-lg-5 col-xl-2 mb-2 mb-sm-4 mx-auto mx-lg-0">
            <img
              key={ProjectList[currentIndex].image}
              src={ProjectList[currentIndex].image}
              alt={ProjectList[currentIndex].title}
              className="w-100 rounded-lg border-black bg-black" //always add bg same as border to hide gaps
              style={{ border: ".6rem solid" }}
            />
          </div>
          <div className="selected-project-content mx-auto my-3 col-12 col-sm-10 col-lg-6 col-xl-5 mx-lg-0">
            <p className="project-heading h1 font-weight-bolder d-none d-lg-block">
              {ProjectList[currentIndex].title}
            </p>
            <p className="selected-project-text text-justify">
              {ProjectList[currentIndex].content}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PastProjects;
