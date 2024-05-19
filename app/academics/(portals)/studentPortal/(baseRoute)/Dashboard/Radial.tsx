import React from 'react';

interface RadialProgressProps {
  value: number;
}

const RadialProgress: React.FC<RadialProgressProps> = ({ value }) => {
 
    const sizeStyle = {
        width: `${50}px`,
        height: `${50}px`
      };
    return (
    <div 
      className="radial-progress bg-primary text-primary-content border-4 border-primary mt-5 ml-6 "
      style={{ ...sizeStyle,"--value": value } as React.CSSProperties} 
      role="progressbar"
    >
      {value}%
    </div>
  );
}

export default RadialProgress;
