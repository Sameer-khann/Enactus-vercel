import React from "react";
import OwlCarousel from "react-owl-carousel";
import councilList from "./CouncilList";
import teamList from "./TeamList";

export default function Team() {
  return (
    <section>
      <div className="team pt-5">
        <p className="h1 text-center mb-4 pb-2 font-weight-600">
          Meet the people behind magic{" "}
        </p>
        <OwlCarousel
          autoWidth
          lazyContent
          loop={true}
          autoPlay={true}
          fluidSpeed={50}
          center={true}
          items
          className="hero-carousel"
        >
          {councilList.map((member, index) => (
            <div
              key={index}
              className="item card border-0 py-2 mx-5"
              style={{ width: 330 }}
            >
              <img
                src={member.image}
                className="rounded-circle w-75 shadow border border-gray p-1 align-self-center"
                alt={member.name}
              />
              <div className="card-body mt-1 text-center">
                <p className="text-primary h4 mb-1">{member.name}</p>
                <p className="font-weight-bolder">{member.position}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>

      <div className="team pt-5">
        <p className="h1 text-center mb-4 pb-2 font-weight-600">Our Team</p>
        <OwlCarousel
          autoWidth
          lazyContent
          loop
          autoPlay
          fluidSpeed={50}
          center
          className="hero-carousel"
        >
          {teamList.map((member, index) => (
            <div
              key={index}
              className="item card border-0 py-2"
              style={{ width: 330 }}
            >
              <img
                src={member.image}
                className="rounded-circle w-75 shadow border border-gray p-1 align-self-center"
                alt={member.name}
              />
              <div className="card-body mt-1 text-center">
                <p className="text-primary h4 mb-1">{member.name}</p>
                <p className="font-weight-bolder">{member.position}</p>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </section>
  );
}
