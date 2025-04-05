import React from 'react';

function ProgressBar() {
  return (       
  <div className="w-full bg-gray-100 rounded-full dark:bg-gray-700">
    <div className="bg-yellow-700 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"45%"}}> 45%</div>
  </div>
  )
}

export default ProgressBar;
