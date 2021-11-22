import {
  HALCH_YOMIT_GET_REQUEST,
  HALCH_YOMIT_GET_SUCCESS,
  HALCH_YOMIT_GET_FAIL,
} from '../constants/halchYomitConstants';
export const halchYomitReducers = (state = {}, action) => {
  switch (action.type) {
    case HALCH_YOMIT_GET_REQUEST:
      return {
        loading: true,
      };
    case HALCH_YOMIT_GET_SUCCESS:
      return {
        loading: false,
        success: true,
        halachError: false,
        halchYomitData: action.payload,
      };
    case HALCH_YOMIT_GET_FAIL:
      return {loading: false, halachError: true, error: action.payload};
    default:
      return state;
  }
};
