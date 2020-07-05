import React from "react";

export function useEscapeKeyEvent(cb) {
  React.useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === "Escape" || event.key === "Esc") {
        cb();
      }
    }
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [cb]);
}
