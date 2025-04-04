import React from "react";
import './skills.css';
import ProgressBar from "../progress";

function Skils() {
  return (
    <div className="skils-wrapper  ">
      <div className="container-fluid">
        <div className="row  ">
        <div className="col-12  mt-3 d-flex  w-100 ">
            <div className="col-sm-12 col-lg-6  w-100">
            <div className="col-3">
              <div  className="skils-wrapper__title">
                <span>JavaScript</span>
              </div>
            </div>
           <div className="col-9">
           <div className="skils-wrapper__item--progressBar">
                <ProgressBar />
              </div>
           </div>
            </div>
            <div className="col-sm-12 col-lg-6 w-100">
            <div className="col-3">
              <div className="skils-wrapper__title">
                <span>ReactJs</span>
              </div>
            </div>
           <div className="col-9">
           <div className="skils-wrapper__item--progressBar">
                <ProgressBar />
              </div>
           </div>
            </div>
          </div>
          <div className="col-12  mt-3 d-flex  w-100 ">
            <div className="col-sm-12 col-lg-6 w-100">
            <div className="col-3">
              <div  className="skils-wrapper__title">
                <span>Next.js</span>
              </div>
            </div>
           <div className="col-9">
           <div className="skils-wrapper__item--progressBar">
                <ProgressBar />
              </div>
           </div>
            </div>
            <div className="col-sm-12 col-lg-6 w-100">
            <div className="col-3">
              <div className="skils-wrapper__title">
                <span>Express.js</span>
              </div>
            </div>
           <div className="col-9">
           <div className="skils-wrapper__item--progressBar">
                <ProgressBar />
              </div>
           </div>
            </div>
          </div>
          <div className="col-12  mt-3 d-flex  w-100 ">
            <div className="col-sm-12 col-lg-6 w-100">
            <div className="col-3">
              <div className="skils-wrapper__title">
                <span>Tailwind</span>
              </div>
            </div>
           <div className="col-9">
           <div className="skils-wrapper__item--progressBar">
                <ProgressBar />
              </div>
           </div>
            </div>
            <div className="col-sm-12 col-lg-6 w-100">
            <div className="col-3">
              <div className="skils-wrapper__title">
                <span>Bootstrap</span>
              </div>
            </div>
           <div className="col-9">
           <div className="skils-wrapper__item--progressBar">
                <ProgressBar />
              </div>
           </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skils;
