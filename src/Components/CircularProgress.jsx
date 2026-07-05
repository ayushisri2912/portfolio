
import React, { useEffect, useState } from "react";
import AnimatedCounter from "./AnimatedCounter";

const CircularProgress = ({ percent, title, start }) => {

  const radius = 60;
  const stroke = 10;

  const normalizedRadius = radius - stroke * 2;

  const circumference = normalizedRadius * 2 * Math.PI;

  const [offset, setOffset] = useState(circumference);

  useEffect(() => {

    if (start) {
      setOffset(
        circumference - (percent / 100) * circumference
      );
    } else {
      setOffset(circumference);
    }

  }, [start, percent, circumference]);

  return (
    <div className="circle-card">

      <svg width={120} height={120}>

        <circle
          className="bg-circle"
          cx="60"
          cy="60"
          r={normalizedRadius}
          strokeWidth={stroke}
        />

        <circle
          className="progress-circle"
          cx="60"
          cy="60"
          r={normalizedRadius}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
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