import React from 'react';

const ScrollingText = ({ text }) => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex items-center">
      <div className="animate-scroll" style={{ paddingLeft: '100%' }}>
        {text}
      </div>
    </div>
  );
};

export default ScrollingText;
