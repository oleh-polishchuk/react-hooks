import { useEffect } from "react";

// Usage
function App() {
  useKeyPresses("esc", () => {
       // your code here...
  });

  return (
    <div>...</div>
  );
}

// Hook
const keyNameNumberMap = {
    "esc": 27,
};

function useKeyPresses(keyName, callback) {
    useEffect(() => {
        const handleKeyDown = (event) => {
            const keyNumber = keyNameNumberMap[keyName];
            if (!keyNumber) {
                throw new Error(`Key name "${keyName}" does not exist! You can add it inside a useKeyPress hook.`);
            }

            if (event.keyCode === keyNumber && typeof callback === "function") {
                callback();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [keyName, callback]);
}

export default useKeyPresses;
