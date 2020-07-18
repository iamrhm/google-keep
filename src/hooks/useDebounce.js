import React from "react";

export function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = React.useState(value);
  const timeoutId = React.useRef();
  React.useEffect(() => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    const id = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    timeoutId.current = id;
    return () => {
      clearTimeout(timeoutId.current);
    };
  }, [value, delay]);

  return debounceValue;
}
