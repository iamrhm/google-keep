import { call, put, takeLatest } from "redux-saga/effects";

import * as actionTypes from "../actionTypes";
import { populateAllNotes, populateNoteInfo, addNewNote } from "../actions";
import {
  pullAllNotes,
  pullNoteById,
  saveNewNote,
  updateNote
} from "../../apis";

function* getAllNotes() {
  try {
    const allNotes = yield call(pullAllNotes);
    yield put(populateAllNotes({ notes: allNotes }));
  } catch (err) {
    throw new Error(err);
  }
}

function* getNoteById(noteId) {
  try {
    const note = yield call(pullNoteById, noteId);
    yield put(populateNoteInfo({ note: note }));
  } catch (err) {
    throw new Error(err);
  }
}

function* postNewNote(action) {
  try {
    const newNote = yield call(saveNewNote, action.payload.note);
    yield put(addNewNote(newNote));
  } catch (err) {
    throw new Error(err);
  }
}

function* putNote(action) {
  try {
    yield call(updateNote, action.payload.note);
    const allNotes = yield call(pullAllNotes);
    yield put(populateAllNotes({ notes: allNotes }));
  } catch (err) {
    throw new Error(err);
  }
}

function* noteSagas() {
  yield takeLatest(actionTypes.GET_ALL_NOTES, getAllNotes);
  yield takeLatest(actionTypes.SUBMIT_NEW_NOTE, postNewNote);
  yield takeLatest(actionTypes.GET_NOTE_INFO, getNoteById);
  yield takeLatest(actionTypes.UPDATE_NOTE, putNote);
}

export default noteSagas;
