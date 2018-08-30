import { combineReducers } from 'redux';
import NotesReducer from './reducer_notes';

const rootReducer = combineReducers({
  notes: NotesReducer
  //here is where the double nesting was occuring: because I had notes as
  //NotesReducer, it was putting the stuff I reduced into another nest.
});

export default rootReducer;
