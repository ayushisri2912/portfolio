
import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ value, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    const target = parseInt(value, 10);
    let current = 0;

    const interval = setInterval(() => {
      current++;

      setCount(current);

      if (current >= target) {
        clearInterval(interval);
      }
    }, 20);

 

    return () => clearInterval(interval);
  }, [start, value]);

  return <span>{count}%</span>;
};

export default AnimatedCounter;