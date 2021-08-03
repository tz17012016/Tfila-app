import {
  ZMANIM_GET_REQUEST,
  ZMANIM_GET_SUCCESS,
  ZMANIM_GET_FAIL,
} from '../constants/zmanimConstants';
export const zmanimsListReducer = (state = {}, action) => {
  switch (action.type) {
    case ZMANIM_GET_REQUEST:
      return {
        loading: true,
      };
    case ZMANIM_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        zmanim: action.payload,
      };
    case ZMANIM_GET_FAIL:
      return {loading: false, error: action.payload};
    default:
      return state;
  }
};
