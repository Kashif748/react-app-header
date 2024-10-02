import React from "react";

const ProgressBar = ({ progress }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div>
      <div>
        <h4 className="font-bold text-center">Progress</h4>
      </div>
      <div className="flex justify-center items-center">
        <svg width="120" height="120" className="rotate-[-90deg]">
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#FFE2D6 "
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            stroke="#FF601B"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute text-center">
          <p className="text-lg text-center font-bold">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
