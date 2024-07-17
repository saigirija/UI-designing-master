import React from "react";
import Background from "../../../assets/background.jpg";

const HeroSection = () => {
  return (
    <div className="hero_section">
      <img src={Background} alt="" />
      <div className="hero_content">
        <i className="fas fa-plane-departure"></i>
        <h1>Travel without limits</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <button className="hero_button">Choose Your Tour</button>
      </div>
    </div>
  );
};

export default HeroSection;
