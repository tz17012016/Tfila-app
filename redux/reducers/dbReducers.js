import {
  DB_GET_REQUEST,
  DB_GET_SUCCESS,
  DB_GET_FAIL,
} from '../constants/zmanimConstants';
export const dbListReducer = (state = {}, action) => {
  switch (action.type) {
    case DB_GET_REQUEST:
      console.log('hy');
      return {
        loading: true,
        db: {},
      };
    case DB_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        db: action.payload,
      };
    case DB_GET_FAIL:
      return {loading: false, error: action.payload};
    default:
      return {
        loading: false,
        success: true,
        db: action.payload,
      };
  }
};
