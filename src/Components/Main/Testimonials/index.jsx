import React from "react";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="testimonial_header">
        <div className="separator"></div>
        <h2>WHAT CLIENTS SAY</h2>
        <div className="separator"></div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          commodi id nulla magni sed ad repellendus excepturi exercitationem
          iure amet itaque similique repudiandae laudantium totam fugiat dicta
          harum, inventore voluptatum.
        </p>
      </div>
      <div className="testimonials_container">
        <div className="testimonial_item">
          <img
            src="https://www.euroshop-tradefair.com/cache/pica/2/1/0/1/0/2/136951555571194/Bolz.PNG"
            alt=""
          />
          <h4>Levi Jackson</h4>
          <p>Founder of Surya Techs</p>
          <i className="fa fa-certificate"></i>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="testimonial_item">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h4>Sebastian Mateo</h4>
          <p>CEO and Executive Manager </p>
          <i className="fa fa-line-chart"></i>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
        <div className="testimonial_item">
          <img
            src="https://pbs.twimg.com/profile_images/1075776648363028480/_IlPbvr0_400x400.jpg"
            alt=""
          />
          <h4>Jack Owen</h4>
          <p>Chief Head of Operations</p>
          <i className="fa fa-diamond"></i>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
