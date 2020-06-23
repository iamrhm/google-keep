import * as actionTypes from "../actionTypes";

export function fetchAllNotes() {
  return {
    type: actionTypes.GET_ALL_NOTES
  };
}

export function populateAllNotes(notes) {
  return {
    type: actionTypes.POPULATE_ALL_NOTES,
    payload: { notes }
  };
}

export function getNoteDetailById(noteId) {
  return {
    type: actionTypes.GET_NOTE_INFO,
    payload: noteId
  };
}

export function populateNoteInfo(note) {
  return {
    type: actionTypes.POPULATE_NOTE_INFO,
    payload: { note }
  };
}

export function submitNewNote(note) {
  return {
    type: actionTypes.SUBMIT_NEW_NOTE,
    payload: { note }
  };
}

export function updateNote(note) {
  return {
    type: actionTypes.UPDATE_NOTE,
    payload: { note }
  };
}

export function updateDisplayPanel(displayPanelStatus) {
  return {
    type: actionTypes.UPDATE_DISPLAY_PANEL,
    payload: { displayPanelStatus }
  };
}

export function populateDisplayPanel(displayPanelStatus) {
  return {
    type: actionTypes.POPULATE_DISPLAY_PANEL,
    payload: { displayPanelStatus }
  };
}
