import React from 'react';
const ProgressBar=()=> {
  return (       
  <div className="w-full bg-gray-100 rounded-full dark:bg-[#1c1c1c]">
    <div className="bg-zinc-500 text-xs font-medium text-zinc-900 mt-3 text-center p-0.5 leading-none rounded-full" style={{width:"45%"}}> 45%</div>
  </div>
  )
}
export default ProgressBar;