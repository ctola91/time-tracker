import { combineReducers } from 'redux';
import task from '../../reducers/taskReducer';

const rootReducer = combineReducers({
  task
});

export default rootReducer;
