import SomethingProvider from '../data/providers/SomethingProvider';
import {
  stopCommonLoader,
  startCommonLoader,
} from './uiActions';
import {
  GET_SOMETHING,
  GET_SOMETHING_SUCCESS,
} from '../constants/loaderTypes';

export const getSomethingSuccess = something => ({
  type: GET_SOMETHING_SUCCESS,
  payload: {
    something,
  },
});

// -------------------------------------------------------------------------------------------------------------

export function getSomething(name) {
  return (dispatch) => {
    dispatch(startCommonLoader(GET_SOMETHING));
    return SomethingProvider.getSomething(name)
      .then((something) => {
        dispatch(stopCommonLoader(GET_SOMETHING));
        dispatch(getSomethingSuccess(something));
      })
      .catch(() => {
        dispatch(stopCommonLoader(GET_SOMETHING));
      });
  };
}
