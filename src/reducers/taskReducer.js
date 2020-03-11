
import { getNewState } from '../shared/utils/frontend';
import { FETCH_TASKS_SUCCESS } from '../actions/actionTypes';

const initialState = {
  tasks: [],
  total: 0,
  taskSelected: null,
};

export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_TASKS_SUCCESS: {
      const { payload: tasks } = action;
      return getNewState(state, {
        tasks: tasks.tasks,
        total: tasks.total
      });
    }
    default:
      return state;
  }
}
