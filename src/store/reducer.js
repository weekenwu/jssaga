import { combineReducers } from 'redux-immutable';
import {reducer as headReducer} from './reducer/headreducer';

const reducer = combineReducers({
    head: headReducer
});

export default reducer;

