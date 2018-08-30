import axios from 'axios';
export const FETCH_NOTES = 'fetch_notes';
export const LOGIN = 'login';
export const LOGOUT = 'logout';
export const ADDNOTE = 'add_note';

export const ROOT_URL = 'http://localhost:8080/api/notes';

export function doAddNote(email, noteName, noteContents, doneAdding) {
  console.log('inside actions-- doAddNote');

  const request = axios
    .post(`${ROOT_URL}/new`, {
      author: email,
      name: noteName,
      contents: noteContents
    })
    .then(() => doneAdding())
    .catch(error => console.log(error));

  return {
    type: ADDNOTE,
    payload: request
  };
}

export function fetchNotes(email) {
  console.log('email sending: ', email);

  const request = axios.get(`${ROOT_URL}?email=${email}`);
  // remember that redux promise is needed to resolve this axios call

  return {
    type: FETCH_NOTES,
    payload: request
  };
}

export function hasLoggedIn(args) {
  console.log('in action hasLoggedIn', args);

  return {
    type: LOGIN,
    payload: args
  };
}

export function hasLoggedOut() {
  return {
    type: LOGOUT,
    payload: 'logout'
  };
}
