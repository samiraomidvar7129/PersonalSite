'use client';
import React from 'react';

const ScrollingText = ({ text }) => {
  return (
    <div className="overflow-hidden bg-[#171717] text-white h-16 flex items-center rounded-xl" >
      <div className="scrolling-text whitespace-nowrap text-sm px-4 text-[#9e9e9e]">
        {text}
      </div>

      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          animation: scrollText 32s linear infinite;
        }

          @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%); 
          }
        }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;
