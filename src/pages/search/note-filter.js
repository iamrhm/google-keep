export default function (text, noteArray) {
  let filteredArray = noteArray.filter((note) => {
    if (note.title.indexOf(text) > 0) return true;
    else if (note.content.indexOf(text) > 0) return true;
    else return false;
  });
  return filteredArray;
}
