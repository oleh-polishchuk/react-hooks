import { useEffect, useState } from "react";

// Usage
function App() {
  const [scrollSpeed] = useScrollSpeed();
  const reachedScrollSpeedLimit = scrollSpeed > 30;

  return (
    <div>
      {scrollSpeed}
    </div>
  );
}

// Hook
const checkScrollSpeed = (function(settings){
    settings = settings || {};

    let lastPos, newPos, timer, delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

    function clear() {
        lastPos = null;
        delta = 0;
    }

    clear();

    return function(){
        newPos = window.scrollY;
        if ( lastPos != null ){ // && newPos < maxScroll
            delta = newPos -  lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return Math.abs(delta);
    };
})();

const useScrollSpeed = () => {
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        const getScrollSpeed = () => setSpeed(checkScrollSpeed());

        window.addEventListener("scroll", getScrollSpeed);
        return () => window.removeEventListener("scroll", getScrollSpeed);
    });

    return [speed];
};

export default useScrollSpeed;
