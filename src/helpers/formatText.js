export default (text, maxLength) => {
  let textLength = text.length;
  let newText;
  if (textLength > maxLength) {
    newText = text.substring(0, maxLength);
    return `${newText}...`;
  } else return text;
};
