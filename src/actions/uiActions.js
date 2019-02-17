export const STOP_SOMETHING_LOADER = 'STOP_SOMETHING_LOADER';
export const START_SOMETHING_LOADER = 'START_SOMETHING_LOADER';

export const stopSomethingLoaderAction = () => ({
  type: STOP_SOMETHING_LOADER,
});

export const startSomethingLoaderAction = () => ({
  type: START_SOMETHING_LOADER,
});

export function stopCommonLoader() {
  return (dispatch) => {
    dispatch(stopSomethingLoaderAction());
  };
}

export function startCommonLoader() {
  return (dispatch) => {
    dispatch(startSomethingLoaderAction());
  };
}
