'use client';
const ScrollingText = ({ text }) => {
  return (
    <div className="w-full overflow-hidden bg-[#171717] text-white h-14 flex justify-center items-center rounded-xl px-4">
      <div className="scrolling-text whitespace-nowrap text-sm text-[#9e9e9e] min-w-full">
        {text}
      </div>

      <style jsx>{`
        .scrolling-text {
          display: inline-block;
          white-space: nowrap;
          animation: scrollText 25s linear infinite;
        }

        @keyframes scrollText {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default ScrollingText;
