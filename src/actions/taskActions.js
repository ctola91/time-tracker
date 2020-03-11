import { request } from '../shared/redux/baseActions';
import { ADD_TASK_REQUEST, FETCH_TASKS_SUCCESS } from './actionTypes';

export const fetchTasks = () => async dispatch => {
  dispatch(request(FETCH_TASKS_SUCCESS));
};

export const addTask = () => dispatch => {
  dispatch(request(ADD_TASK_REQUEST));
};
