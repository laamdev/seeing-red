import { useEffect } from "react";

const useKeyboardEvent = (key, callback) => {
  useEffect(() => {
    const handler = function(event) {
      if (event.key === key) {
        callback();
      }
    };

    window.addEventListener("keydown", handler);

    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, [callback, key]);
};

export default useKeyboardEvent;
