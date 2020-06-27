export default function (text, noteArray) {
  let filteredArray = noteArray.filter((note) => {
    text = text.toUpperCase();
    if (note.title.toUpperCase().indexOf(text) > -1) {
      return true;
    } else if (note.content.toUpperCase().indexOf(text) > -1) {
      return true;
    } else return false;
  });
  return filteredArray;
}
