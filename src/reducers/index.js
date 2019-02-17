import { combineReducers } from 'redux';
import something from './something';
import ui from './ui';

const appReducer = combineReducers({
  something,
  ui,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STORE') {
    state = null; // eslint-disable-line
  }
  return appReducer(state, action);
};

export default rootReducer;
