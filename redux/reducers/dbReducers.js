import {
  DB_GET_REQUEST,
  DB_GET_SUCCESS,
  DB_GET_FAIL,
} from '../constants/dbConstants';
export const dbListReducer = (state = {}, action) => {
  switch (action.type) {
    case DB_GET_REQUEST:
      return {
        loading: true,
      };
    case DB_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        dbError: false,
        db: action.payload,
      };
    case DB_GET_FAIL:
      return {loading: false, dbError: true, error: action.payload};
    default:
      return state;
  }
};
