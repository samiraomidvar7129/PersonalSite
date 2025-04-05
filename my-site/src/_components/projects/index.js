import React from "react";
import "./projects.css";

const ProjectsList=()=> {
  return (
    <div className="projectsList-wrapper">
      <div className="conatainer">
        <div className="row">
          <div className="col-sm-4 col-md-4 col-lg-4 co-xl-4 col-xxl-4 mt-3 mt-sm-1 border border-top-0 border-bottom-0 border-start-0 ">
            <div className="projectsList-wrapper__inner p-2  text-center d-flex flex-column justify-content-center align-items-center">
              <div className="projectsList-wrapper__inner--number">
                <span>18 +</span>
              </div>
              <div className=" projectsList-wrapper__inner__txt mt-3">
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 co-xl-4 col-xxl-4 mt-3 mt-sm-1 border border-top-0 border-bottom-0 border-start-0 ">
            <div className="projectsList-wrapper__inner p-2  text-center d-flex flex-column justify-content-center align-items-center">
              <div className="projectsList-wrapper__inner--number">
                <span>3 +</span>
              </div>
              <div className=" projectsList-wrapper__inner__txt mt-3">
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-md-4 col-lg-4 co-xl-4 col-xxl-4 mt-3 mt-sm-1 border border-top-0 border-bottom-0 border-start-0 ">
            <div className="projectsList-wrapper__inner p-2  text-center d-flex flex-column justify-content-center align-items-center">
              <div className="projectsList-wrapper__inner--number">
                <span>4 +</span>
              </div>
              <div className=" projectsList-wrapper__inner__txt mt-3">
                <p>Years Of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProjectsList;