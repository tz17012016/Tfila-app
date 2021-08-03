import {
  OLIM_LATORA_GET_REQUEST,
  OLIM_LATORA_GET_SUCCESS,
  OLIM_LATORA_GET_FAIL,
} from '../constants/olimLatoraConstants';
export const olimLatoraListReducer = (state = {data: []}, action) => {
  switch (action.type) {
    case OLIM_LATORA_GET_REQUEST:
      return {
        loading: true,
        olimLatoras: [],
      };
    case OLIM_LATORA_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        olimLatoras: action.payload,
      };
    case OLIM_LATORA_GET_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
