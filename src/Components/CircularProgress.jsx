import React from "react";
import AnimatedCounter from "./AnimatedCounter";

const CircularProgress = ({ percent, title, start }) => {

  const radius = 60;
  const stroke = 10;

  const normalizedRadius = radius - stroke * 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference -
    (start ? percent : 0) / 100 * circumference;

  return (
    <div className="circle-card">

      <svg
        height={radius * 2}
        width={radius * 2}
      >

        <circle
          className="bg-circle"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          className="progress-circle"
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

      </svg>

      <div className="circle-text">

        <AnimatedCounter
          value={`${percent}%`}
          start={start}
        />

      </div>

      <h3>{title}</h3>

    </div>
  );
};

export default CircularProgress;