import React from 'react';

interface RadialProgressProps {
  value: number;
}

const RadialProgress: React.FC<RadialProgressProps> = ({ value }) => {
 
    const sizeStyle = {
        width: `${70}px`,
        height: `${70}px`
      };
    return (
    <div 
      className="radial-progress "
      style={{ ...sizeStyle,"--value": value } as React.CSSProperties} 
      role="progressbar"
    >
      {value}%
    </div>
  );
}

export default RadialProgress;
