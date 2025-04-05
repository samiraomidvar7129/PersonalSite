import React from "react";
const ProjectsList = () => {
  return (
    <div className="flex justify-around items-center w-full my-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
      <div className=" mt-3 mt-sm-1 border border-top-0 border-bottom-0 border-start-0 bg-yellow-700 w-[200px] h-[100px] text-white  ">
        <div className="flex  flex-col justify-center items-center  p-2  text-center">
          <div className="pt-4">
            <span>18 +</span>
          </div>
          <div className="text-xs mt-3">
            <p>Years Of Experience</p>
          </div>
        </div>
      </div>
      <div className="mt-3 mt-sm-1 border border-top-0 border-bottom-0 border-start-0 w-[200px] h-[100px]">
        <div className="flex flex-col justify-center items-center text-center p-2">
          <div className="pt-4">
            <span className="text-3xl text-yellow-700">3 +</span>
          </div>
          <div className="text-xs mt-3">
            <p>Years Of Experience</p>
          </div>
        </div>
      </div>
      <div className="mt-3 mt-sm-1 border border-top-0 border-bottom-0 border-start-0 bg-yellow-700 w-[200px] h-[100px] text-white ">
        <div className="flex  flex-col justify-around items-center text-center p-2">
          <div className="pt-4">
            <span>4 +</span>
          </div>
          <div className="text-xs mt-3">
            <p>Years Of Experience</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectsList;