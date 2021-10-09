import axios from 'axios';
import {BASE_URL} from '../../utilities/baseUrl';
import {
  SHIORIM_GET_REQUEST,
  SHIORIM_GET_SUCCESS,
  SHIORIM_GET_FAIL,
} from '../constants/shiorimConstants';
export const getShiorim = () => async dispatch => {
  try {
    dispatch({type: SHIORIM_GET_REQUEST});
    const {data} = await axios.get(`${BASE_URL}/api/shiorim`);
    dispatch({type: SHIORIM_GET_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: SHIORIM_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
