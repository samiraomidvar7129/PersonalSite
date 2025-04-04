import React from "react";
import "./services.css";
import { VscFileCode } from "react-icons/vsc";
import { MdDeveloperMode } from "react-icons/md";
import { VscDiffSingle } from "react-icons/vsc";
import { GrOptimize } from "react-icons/gr";


function Services() {
  return (
    <div className="  services-wrapper  d-flex flex-column justify-content-center align-items-start ">
      <div className=" services-wrapper__inner">
        <h6 className=" services-wrapper__inner--title px-2 ">My Services</h6>
      </div>
      <div className="services-wrapper__inner--boxes mt-3">
        <div className="container-fluid mt-5">
          <div className="row ">
            <div className="col-sm-5 mx-2 mx-auto col-md-5 col-lg-5 col-xl-5 col-xxl-5 services-wrapper__inner--boxes-col rounded p-4 mt-2 g-1">
              <div className="services-wrapper__inner--boxes-item d-flex text-center flex-column justify-content-center align-items-center">
                <div className="services-wrapper__inner--boxes-item__icon">
                  <span>
                    <VscFileCode />
                  </span>
                </div>
                <div className="services-wrapper__inner--boxes-item__title mt-3">
                  <h4> (Web Development)</h4>
                </div>
                <div className="services-wrapper__inner--boxes-item__txt mt-3">
                  <p>
                    Design and development of modern and responsive websites
                    using the latest technologies. ● Create unparalleled user
                    experiences and optimize performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-5 mx-2 mx-auto col-md-5 col-lg-5 col-xl-5 col-xxl-5 services-wrapper__inner--boxes-col rounded p-4 mt-2 g-1">
              <div className="services-wrapper__inner--boxes-item d-flex text-center flex-column justify-content-center align-items-center">
                <div className="services-wrapper__inner--boxes-item__icon">
                  <span>
                    <GrOptimize />
                  </span>
                </div>
                <div className="services-wrapper__inner--boxes-item__title mt-3">
                  <h4> Performance Optimization</h4>
                </div>
                <div className="services-wrapper__inner--boxes-item__txt mt-3">
                  <p>
                    Increase speed and improve your website's performance.
                    Optimize images, code, and resources to provide a fast and
                    smooth user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-5 mx-2 mx-auto col-md-5 col-lg-5 col-xl-5 col-xxl-5 services-wrapper__inner--boxes-col rounded p-4 mt-2 g-1">
              <div className="services-wrapper__inner--boxes-item d-flex text-center flex-column justify-content-center align-items-center">
                <div className="services-wrapper__inner--boxes-item__icon">
                  <span>
                    <VscDiffSingle />
                  </span>
                </div>
                <div className="services-wrapper__inner--boxes-item__title mt-3">
                  <h4> (Single-Page Applications)</h4>
                </div>
                <div className="services-wrapper__inner--boxes-item__txt mt-3">
                  <p>
                    Develop fast and dynamic web applications using modern
                    frameworks such as React, Next.js, providing an optimal and
                    attractive user experience
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm-5 mx-2 mx-auto col-md-5 col-lg-5 col-xl-5 col-xxl-5 services-wrapper__inner--boxes-col rounded p-4 mt-2 g-1">
              <div className="services-wrapper__inner--boxes-item d-flex text-center flex-column justify-content-center align-items-center">
                <div className="services-wrapper__inner--boxes-item__icon">
                  <span>
                    <MdDeveloperMode />
                  </span>
                </div>
                <div className="services-wrapper__inner--boxes-item__title mt-3">
                  <h4> (Responsive Development)</h4>
                </div>
                <div className="services-wrapper__inner--boxes-item__txt mt-3">
                  <p>
                    Designing websites that automatically adapt to different
                    screen sizes. Providing a seamless user experience across
                    all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
