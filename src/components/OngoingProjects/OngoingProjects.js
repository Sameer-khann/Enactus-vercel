import React, { useState } from "react";

import OnGoingProjectsData from "./onGoingProjectsData";
import { ProjectsDropDown } from "../index";

import { ReactComponent as StoreIcon } from "../../Assets/store_icon.svg";

const OngoingProjects = () => {
  const [currentIndex, updateCurrentIndex] = useState(0);

  const onLogoClick = (index) => {
    updateCurrentIndex(index);
    const projectContentBox = document.querySelector(
      ".selected-on-going-project-content"
    );
    const header = document.querySelector("nav");
    window.scrollBy({
      top:
        projectContentBox.getBoundingClientRect().top -
        header.getBoundingClientRect().bottom,
      behavior: "smooth",
    });
  };

  return (
    <React.Fragment>
      <div className="on-going-projects container-fluid my-4">
        <div className="on-going-projects-heading h1 text-capitalize text-center text-primary font-weight-bolder">
          ongoing projects
        </div>
        <ProjectsDropDown
          items={OnGoingProjectsData}
          currentItem={currentIndex}
          updateCurrentItem={onLogoClick}
          className="d-sm-none"
        />
        <div className="on-going-projects-images d-none d-sm-flex row my-4 justify-content-center">
          {OnGoingProjectsData.map((d, index) => {
            return (
              <img
                role="button"
                key={index}
                src={d.logo}
                alt={d.name + "logo"}
                onClick={() => onLogoClick(index)}
                className="col-3 col-lg-2 border border-black p-0 rounded-lg mx-2 mx-lg-4 shadow-lg"
              />
            );
          })}
        </div>
      </div>
      <div className="selected-on-going-project-content container-fluid bg-primary-light">
        <div className="project-box py-3">
          <div className="project-content-middle row justify-content-center my-3">
            <div className="project-image col-12 col-sm-7 col-lg-5 col-xl-2 mb-2 mb-sm-4">
              <img
			  	key={OnGoingProjectsData[currentIndex].image}
                src={OnGoingProjectsData[currentIndex].image}
                alt=""
                className="w-100 rounded border-black bg-black" //always add bg same as border to hide gaps
                style={{ border: ".6rem solid" }}
              />
            </div>
            <div className="project-content col-12 col-sm-10 col-lg-6 col-xl-5 mb-2">
              <p className="project-heading h1 font-weight-bolder d-none d-lg-block">
                {OnGoingProjectsData[currentIndex].name}
              </p>
              <p className="text-left">
                {OnGoingProjectsData[currentIndex].content}
              </p>
              <div className="project-content-bottom d-flex col-sm-8 col-md-6 col-xl-5">
                <a
                  role="button"
                  className="project-link-button btn btn-black text-white w-100 mb-2 mb-lg-0 mr-lg-4"
                  href={OnGoingProjectsData[currentIndex].pageLink}
                >
                  Know More
                </a>
                {OnGoingProjectsData[currentIndex].showStore && (
                  <a
                    role="button"
                    className="btn btn-light d-flex mx-auto align-items-center justify-content-center w-100 py-0"
                    href="https://darpan.enactusadgitm.in"
                    target="blank"
                  >
                    <div className="Icon py-1">
                      <StoreIcon
                        style={{
                          height: "auto",
                          maxHeight: "100%",
                          maxWidth: "2.5rem",
                          width: "auto",
                          borderRight: "2px solid black",
                          paddingRight: ".2rem",
                        }}
                      />
                    </div>
                    <span className="mx-auto flex-1 font-weight-bolder">
                      Store
                    </span>
                  </a>
                )}
                {OnGoingProjectsData[currentIndex].showMagazine && (
                  <a
                    role="button"
                    className="btn btn-light d-flex mx-auto align-items-center justify-content-center w-100 py-0"
                    href="https://online.fliphtml5.com/xwhcy/most/#p=1"
                    target="blank"
                  >
                    <span className="mx-auto flex-1 font-weight-bolder">
                      Magazine
                    </span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default OngoingProjects;
