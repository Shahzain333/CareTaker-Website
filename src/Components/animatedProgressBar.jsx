import React, { useEffect, useState } from 'react';

const AnimatedProgressBar = ({ value, duration = 700 }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(value);
    }, 100); // slight delay for smooth entrance

    return () => clearTimeout(timeout);
    
  }, [value]);

  return (
    <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden flex items-center justify-start mb-4">

      <div
        className="mx-1 h-2 bg-cyan-500 rounded-full transition-all ease-out"
        style={{
          width: `${progress}%`,
          transitionDuration: `${duration}ms`,
        }}
      ></div>

    </div>
  );
};

export default AnimatedProgressBar;
