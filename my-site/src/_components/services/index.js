import React from "react";
import { VscFileCode } from "react-icons/vsc";
import { MdDeveloperMode } from "react-icons/md";
import { VscDiffSingle } from "react-icons/vsc";
import { GrOptimize } from "react-icons/gr";


const Services=()=> {
  return (
    <div className="flex flex-col justify-center items-start ">
      <div className="py-3">
        <h6 className=" px-2 ">My Services</h6>
      </div>
      <div className="row ">
            <div className="mx-auto rounded p-4 mt-2 g-1">
              <div className="text-center flex flex-col justify-center items-center">
                <div className="text-[40px] text-yellow-700">
                  <span>
                    <VscFileCode />
                  </span>
                </div>
                <div >
                  <h4 className="text-[16px]"> (Web Development)</h4>
                </div>
                <div className="mt-3">
                  <p className="text-[14px]">
                    Design and development of modern and responsive websites
                    using the latest technologies. ● Create unparalleled user
                    experiences and optimize performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-auto border border-1 border-yellow-700 rounded p-4 mt-2 g-1">
              <div className="flex flex-col justify-center items-center text-center">
                <div className="text-[40px] text-yellow-700">
                  <span>
                    <GrOptimize />
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="text-[16px]"> Performance Optimization</h4>
                </div>
                <div className=" mt-3">
                  <p className="text-[14px]">
                    Increase speed and improve your websites performance.
                    Optimize images, code, and resources to provide a fast and
                    smooth user experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-1 border-yellow-700 mx-auto rounded p-4 mt-2 g-1">
              <div className="flex flex-col justify-center items-center text-center text-center">
                <div className="text-[40px] text-yellow-700">
                  <span>
                    <VscDiffSingle />
                  </span>
                </div>
                <div className=" mt-3">
                  <h4 className="text-[16px]"> (Single-Page Applications)</h4>
                </div>
                <div className="mt-3">
                  <p className="text-[14px]">
                    Develop fast and dynamic web applications using modern
                    frameworks such as React, Next.js, providing an optimal and
                    attractive user experience
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-1 border-yellow-700 mx-auto rounded p-4 mt-2 g-1">
              <div className="flex flex-col justify-center items-center text-center text-center">
                <div className="text-[40px] text-yellow-700">
                  <span>
                    <MdDeveloperMode />
                  </span>
                </div>
                <div className="mt-3">
                  <h4 className="text-[16px]"> (Responsive Development)</h4>
                </div>
                <div className=" mt-3">
                  <p className="text-[14px]">
                    Designing websites that automatically adapt to different
                    screen sizes. Providing a seamless user experience across
                    all devices.
                  </p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
}
export default Services;