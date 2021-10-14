import axios from 'axios';
import {checkBASE_URL} from '../../utilities/baseUrl';
import {
  GENERAL_MESSAGES_GET_REQUEST,
  GENERAL_MESSAGES_GET_SUCCESS,
  GENERAL_MESSAGES_GET_FAIL,
} from '../constants/generalMessagesConstants';

export const getGeneralMessages = () => async dispatch => {
  try {
    dispatch({type: GENERAL_MESSAGES_GET_REQUEST});
    const {data} = await axios.get(
      `${await checkBASE_URL()}/api/generalMessage`,
    );
    dispatch({type: GENERAL_MESSAGES_GET_SUCCESS, payload: data});
  } catch (error) {
    dispatch({
      type: GENERAL_MESSAGES_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
