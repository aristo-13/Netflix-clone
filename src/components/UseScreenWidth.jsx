import { useState, useEffect } from 'react';

function useScreenWidth() {
  
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return screenWidth;
}

export default useScreenWidth;
