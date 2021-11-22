import {
  HALCH_YOMIT_GET_REQUEST,
  HALCH_YOMIT_GET_SUCCESS,
  HALCH_YOMIT_GET_FAIL,
} from '../constants/halchYomitConstants';
import {getHalchYomit} from '../../utilities/sifria';
export const getHalchYomitDb = () => async dispatch => {
  try {
    dispatch({type: HALCH_YOMIT_GET_REQUEST});
    const HalchYomitData = await getHalchYomit();
    dispatch({type: HALCH_YOMIT_GET_SUCCESS, payload: HalchYomitData});
  } catch (error) {
    dispatch({
      type: HALCH_YOMIT_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
