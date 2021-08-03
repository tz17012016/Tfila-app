import axios from 'axios';
import {
  OLIM_LATORA_GET_REQUEST,
  OLIM_LATORA_GET_SUCCESS,
  OLIM_LATORA_GET_FAIL,
} from '../constants/olimLatoraConstants';
export const getOlimLatora = () => async dispatch => {
  try {
    dispatch({type: OLIM_LATORA_GET_REQUEST});
    const {data} = await axios.get(
      `https://btmanagement.herokuapp.com/api/olieLatora`,
    );
    dispatch({type: OLIM_LATORA_GET_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: OLIM_LATORA_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
