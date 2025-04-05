import React from "react";
import ProgressBar from "../progress";

const Skils=()=> {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
     <div className="mt-5 flex w-full ">
      <div className="pl-3 w-100">
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
        <div className="pl-3 w-100">
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
      <div className="mt-5 flex w-full ">
      <div className="pl-3 w-100">
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
        <div className="pl-3 w-100">
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
      <div className="mt-5 flex w-full">
      <div className="pl-3 w-100">
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
        <div className="pl-3 w-100">
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
  );
}
export default Skils;