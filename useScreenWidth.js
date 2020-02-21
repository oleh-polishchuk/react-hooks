import { useEffect, useState } from "react";

// Usage
function App() {
   const screenWidth = useScreenWidth();
   const isMobileScreen = screenWidth <= 1024;
   const isDesktop = screenWidth > 1024;

  return (
    <div>...</div>
  );
}

// Hooks
function useScreenWidth() {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return screenWidth;
}

export default useScreenWidth;
