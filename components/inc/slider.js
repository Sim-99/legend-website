import React from "react";
import Aca1 from '../images/Aca1.jpg';
import pic3 from '../images/pic3.jpg';
import pic4 from '../images/pic4.jpg';

function Slider() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Aca1} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Professionalism</h5>
            <p style={{ color: "white" }}>We conduct ourselves with professionalism and dignity at all times, respecting the diversity of perspectives and backgrounds within our team and client base.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pic3} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Environmental Responsibility</h5>
            <p style={{ color: "white" }}>We are committed to minimizing our environmental footprint and promoting sustainable practices in our operations, striving to protect the planet for future generations.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={pic4} className="d-block w-100" alt="..."/>
          <div className="carousel-caption d-none d-md-block">
            <h5>Community Impact</h5>
            <p style={{ color: "white" }}>We recognize our responsibility to the communities in which we operate. We actively contribute to social welfare initiatives, striving to make a positive impact beyond our business endeavors.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Slider;
