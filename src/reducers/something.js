import {
  GET_SOMETHING_SUCCESS,
} from '../constants/loaderTypes';

const initialState = {
  customerId: undefined,
  name: undefined,
  createdOn: undefined,
  publishedOn: undefined,
  version: undefined,
  data: {},
};

function something(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_SOMETHING_SUCCESS: {
      const {
        something: {
          customerId,
          name,
          createdOn,
          publishedOn,
          data,
        },
      } = payload;
      return {
        customerId,
        name,
        createdOn,
        publishedOn,
        data,
      };
    }
    default:
      return state;
  }
}

export default something;
