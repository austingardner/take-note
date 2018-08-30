import { FETCH_NOTES, LOGIN, LOGOUT } from '../actions';
import _ from 'lodash';

export default function(
  state = { user: null, password: null, username: null, notes: null },
  action
) {
  switch (action.type) {
    case FETCH_NOTES:
      //console.log('in case FETCH_NOTES reducer: \n', action.payload.data);
      let note_list = _.mapKeys(action.payload.data, 'id');
      //let note_list = action.payload.data;
      //console.log('note_list mapped keys: \n', note_list);

      return {
        user: state.user,
        password: state.password,
        username: state.password,
        notes: note_list
      };
    case LOGIN:
      console.log('in case LOGIN reducer \n', action.payload.data);
      return {
        ...state,
        user: action.payload.data.user,
        password: action.payload.data.password,
        username: action.payload.data.username
      };
    case LOGOUT:
      return { ...state, user: null };
    default:
      return state;
  }
}
