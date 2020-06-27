export default function (fn, delay) {
  let timeoutId;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    return fn();
  }, delay);
}
