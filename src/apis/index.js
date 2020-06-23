import * as storeHelper from "../helpers/localStore";

const KEY = "note";

const addIdToNewNote = (newNote, keyId) => {
  newNote.id = Date.now() * (Math.floor(Math.random()) + 1);
};

export const pullAllNotes = async () => {
  let allNotes = storeHelper.getLocalStorage(KEY);
  return allNotes ? allNotes : [];
};

export const pullNoteById = async (noteId) => {
  let allNotes = await pullAllNotes();
  if (Array.isArray(allNotes))
    return allNotes.filter((note) => note.id === noteId);
  else return ;
};

export const saveNewNote = async (newNote) => {
  let allNotes = await pullAllNotes();
  if (allNotes === null) allNotes = [];
  addIdToNewNote(newNote, allNotes.length);
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
