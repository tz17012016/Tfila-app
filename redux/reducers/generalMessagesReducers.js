import {
  GENERAL_MESSAGES_GET_REQUEST,
  GENERAL_MESSAGES_GET_SUCCESS,
  GENERAL_MESSAGES_GET_FAIL,
} from '../constants/generalMessagesConstants';
export const generalMessagesListReducer = (state = {data: []}, action) => {
  switch (action.type) {
    case GENERAL_MESSAGES_GET_REQUEST:
      return {
        loading: true,
        generalMessages: [],
      };
    case GENERAL_MESSAGES_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        generalMessages: action.payload,
      };
    case GENERAL_MESSAGES_GET_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
