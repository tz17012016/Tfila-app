import {
  CHACK_CONNECTION_REQUEST,
  CHACK_CONNECTION_SUCCESS,
  CHACK_CONNECTION_FAIL,
  CHACK_CONNECTION_FOR_SERVER_REQUEST,
  CHACK_CONNECTION_FOR_SERVER_SUCCESS,
  CHACK_CONNECTION_FOR_SERVER_FAIL,
} from '../constants/ChackConnectionConstants';
export const chackConnectionReducer = (state = {}, action) => {
  switch (action.type) {
    case CHACK_CONNECTION_REQUEST:
      return {
        loading: true,
      };
    case CHACK_CONNECTION_SUCCESS:
      return {
        loading: false,
        success: true,
        connection: action.payload,
      };
    case CHACK_CONNECTION_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
export const chackIsServerAliveReducer = (state = {}, action) => {
  switch (action.type) {
    case CHACK_CONNECTION_FOR_SERVER_REQUEST:
      return {
        loading: true,
      };
    case CHACK_CONNECTION_FOR_SERVER_SUCCESS:
      return {
        loading: false,
        success: true,
        isServerAlive: action.payload,
      };
    case CHACK_CONNECTION_FOR_SERVER_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
