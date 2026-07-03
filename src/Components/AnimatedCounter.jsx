import React, { useEffect, useState } from "react";

const AnimatedCounter = ({ value, start }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const target = parseInt(value);

    const interval = setInterval(() => {
      current += 1;

      if (current >= target) {
        current = target;
        clearInterval(interval);
      }

      setCount(current);
    }, 20);

    return () => clearInterval(interval);
  }, [start, value]);

  return <span>{count}%</span>;
};

export default AnimatedCounter;