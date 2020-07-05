export default function (text, noteArray) {
  if (text) {
    let filteredArray = noteArray.filter((note) => {
      text = text.toUpperCase();
      if (note.title && note.title.toUpperCase().indexOf(text) > -1) {
        return true;
      } else if (
        note.content &&
        note.content.toUpperCase().indexOf(text) > -1
      ) {
        return true;
      } else return false;
    });
    return filteredArray;
  } else {
    return [];
  }
}
