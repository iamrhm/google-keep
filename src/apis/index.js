import * as storeHelper from "../helpers/localStore";

const KEY = "note";

const addIdToNewNote = (newNote, keyId) => {
  newNote.id = Date.now() * (Math.floor(Math.random()) + 1);
};

export const pullAllNotes = async () => {
  let allNotes = storeHelper.getLocalStorage(KEY);
  return Array.isArray(allNotes) ? allNotes : [];
};

export const pullNoteById = async (noteId) => {
  let allNotes = await pullAllNotes();
  if (Array.isArray(allNotes)) {
    return allNotes.find((note) => Number(note.id) === Number(noteId));
  } else return;
};

export const saveNewNote = async (newNote) => {
  let allNotes = await pullAllNotes();
  if (!Array.isArray(allNotes)) allNotes = [];
  addIdToNewNote(newNote, allNotes.length);
  allNotes.push(newNote);
  storeHelper.setLocalStorage(KEY, allNotes);
  return allNotes;
};

export const modifyNote = async (updatedNote) => {
  let allNotes = await pullAllNotes();
  let index = allNotes.findIndex(
    (note) => Number(note.id) === Number(updatedNote.id)
  );
  allNotes[index] = updatedNote;
  storeHelper.setLocalStorage(KEY, allNotes);
  return allNotes;
};

export const deleteNote = async (noteId) => {
  let allNotes = await pullAllNotes();
  let newNotes = allNotes.filter((note) => Number(note.id) !== Number(noteId));
  storeHelper.setLocalStorage(KEY, newNotes);
  return allNotes;
};
