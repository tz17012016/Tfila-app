import axios from 'axios';
import {
  TFILOT_TIME_GET_REQUEST,
  TFILOT_TIME_GET_SUCCESS,
  TFILOT_TIME_GET_FAIL,
} from '../constants/tfilotTimeConstants';
export const getTfilotTime = () => async dispatch => {
  try {
    dispatch({type: TFILOT_TIME_GET_REQUEST});
    const {data} = await axios.get(
      `https://btmanagement.herokuapp.com/api/tfilaTime`,
    );
    dispatch({type: TFILOT_TIME_GET_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: TFILOT_TIME_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
