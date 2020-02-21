import { useEffect } from "react";

// Usage
function App() {
  useEventListener(window, "touchend", () => {
      // your code here...
  });

  return (
    <div>...</div>
  );
}

// Hook
function useEventListener(object, eventName, callback) {
    useEffect(() => {
        object?.addEventListener && object.addEventListener(eventName, callback);

        return () => object?.removeEventListener && object.removeEventListener(eventName, callback);
    }, [object, eventName, callback]);
}

export default useEventListener;
