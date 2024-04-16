import React from "react";
import { Link } from "react-router-dom"; 
import Slider from '../inc/slider';
import MVV from "./inc/MVV";

import Service1 from '../images/Service1.jpg';
import Service3 from '../images/Service3.jpg';
import Service2 from '../images/Service2.jpg';

function Home() {
  return (
    <div>
      <Slider />
      <section className="section">
        <div className="container"> 
          <div className="row"> 
            <div className="col-md-12 text-center">
              <h3 className="main-heading">Legendary Security</h3>
              <div className="underline mx-auto"></div>
              <p>Since 2023, Legendary Security's dedicated team has been tirelessly working to provide top-notch services for our clients. We specialize in customizing our offerings to suit specific needs, 
                ensuring optimal security solutions. Get in touch with us today to receive an initial quote tailored to your requirements and experience the legendary difference in security services.</p>
              <Link to="./about" className="btn btn-warning shadow">Read More</Link> 
            </div>
          </div>
        </div>
      </section>

      <section className="section  border-top">
        <div className="container"> 
          <div className="row"> 
            <div className="col-md-12 mb-5 text-center">
              <h3 className="main-heading">Our Services</h3>
              <div className="underline mx-auto"></div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service1} className="card-img-top" alt="Services"/>
                <div className="card-body">
                  <h6 className="card-title">24/7 Monitoring and Support</h6>
                  <div className="underline"></div>
                  <p className="card-text">Our dedicated monitoring center provides round-the-clock surveillance and support, ensuring constant vigilance and rapid response to security incidents..</p>
                  <Link to="/services" className="btn btn-link">read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service3} className="card-img-top" alt="Services"/>
                <div className="card-body">
                  <h6 className="card-title">Security Training and Education</h6>
                  <div className="underline"></div>
                  <p className="card-text">We provide comprehensive training programs for clients and their personnel
                  , equipping them with the knowledge and skills necessary to recognize and respond effectively to security threats.</p>
                  <Link to="/services" className="btn btn-link">read more</Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow">
                <img src={Service2} className="card-img-top" alt="Services"/>
                <div className="card-body">
                  <h6 className="card-title">Event Security</h6>
                  <div className="underline"></div>
                  <p className="card-text">We specialize in providing security services for events of all sizes, from corporate conferences to private functions
                  , ensuring the safety and security of attendees and safeguarding the success of the even.</p>
                  <Link to="/services" className="btn btn-link">read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MVV/>
    </div>
  );
}

export default Home;
