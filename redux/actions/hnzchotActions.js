import axios from 'axios';
import {
  HNZCHOT_GET_REQUEST,
  HNZCHOT_GET_SUCCESS,
  HNZCHOT_GET_FAIL,
} from '../constants/hnzchotConstants';
export const getHnzchot = () => async dispatch => {
  try {
    dispatch({type: HNZCHOT_GET_REQUEST});
    const {data} = await axios.get(
      `https://btmanagement.herokuapp.com/api/hanzch`,
    );
    dispatch({type: HNZCHOT_GET_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: HNZCHOT_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
