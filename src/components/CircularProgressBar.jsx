import React from "react";

const CircularProgressBar = ({ percent , size = 3, strokeWidth = 0.25, strokeColor = `green`}) => {

    const radius =  (size/2 -strokeWidth);
  return (
    <div>
      <svg width={`${size}vw`} height={`${size}vw`}>
        <circle r={`${radius}vw`} cx={`${size/2}vw`} stroke="white" cy={`${size/2}vw`} strokeWidth={`${strokeWidth}vw`}/>
        <circle
          r={`${radius}vw`}
          cx={`${size /2}vw`}
          stroke={strokeColor}
          fill="none"
          cy={`${size/2}vw`}
          strokeWidth={`${strokeWidth}vw`}
          strokeDasharray={`${2* Math.PI *radius}vw`}
          strokeDashoffset={`${2* Math.PI *radius -(percent/100)*2*Math.PI*radius}vw`}
          transform="rotate(-90)"
          style={{ transformOrigin: "center" }}
          strokeLinecap="round"
        />
        <text
          x={`${size/2}vw`}
          y={`${size/2}vw`}
          fill="white"
          fontSize="1.2vw"
          alignmentBaseline="middle"
          textAnchor="middle"
        >
          {percent}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgressBar;
