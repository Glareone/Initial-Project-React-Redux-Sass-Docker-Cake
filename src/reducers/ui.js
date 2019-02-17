import {
  START_SOMETHING_LOADER,
  STOP_SOMETHING_LOADER,
} from '../actions/uiActions';
import {
  GET_SOMETHING,
} from '../constants/loaderTypes';

const initialState = {
  loaders: {
    [GET_SOMETHING]: false,
  },
};

function ui(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case START_SOMETHING_LOADER: {
      return {
        ...state,
        loaders: {
          [GET_SOMETHING]: true,
        },
      };
    }
    case STOP_SOMETHING_LOADER: {
      return {
        ...state,
        loaders: {
          [GET_SOMETHING]: false,
        },
      };
    }
    default: {
      return state;
    }
  }
}

export default ui;
