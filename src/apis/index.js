import * as storeHelper from "../helpers/localStore";

const KEY = "note";

export const pullAllNotes = async () => {
  return storeHelper.getLocalStorage(KEY);
};

export const pullNoteById = async (noteId) => {
  let allNotes = await pullAllNotes();
  if (Array.isArray(allNotes))
    return allNotes.filter((note) => note.id === noteId);
  else return;
};

export const saveNewNote = async (newNote) => {
  let allNotes = await pullAllNotes();
  allNotes.push(newNote);
  storeHelper.setLocalStorage(KEY, allNotes);
  return allNotes;
};

export const updateNote = async (updatedNote) => {
  let allNotes = await pullAllNotes();
  let index = allNotes.findIndex((note) => note.id === updatedNote.id);
  allNotes[index] = updateNote;
  storeHelper.setLocalStorage(KEY, allNotes);
  return allNotes;
};
