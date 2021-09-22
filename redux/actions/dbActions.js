import axios from 'axios';
import {BASE_URL} from '../../utilities/baseUrl';
import {
  DB_GET_REQUEST,
  DB_GET_SUCCESS,
  DB_GET_FAIL,
} from '../constants/dbConstants';
export const getDB = () => async dispatch => {
  try {
    dispatch({type: DB_GET_REQUEST});
    const zmanimData = await axios.get(`${BASE_URL}/api/zmanim`);
    const tfilaTimeData = await axios.get(`${BASE_URL}/api/tfilaTime`);
    const olieLatoraData = await axios.get(`${BASE_URL}/api/olieLatora`);
    const hanzchData = await axios.get(`${BASE_URL}/api/hanzch`);
    const generalMessageData = await axios.get(
      `${BASE_URL}/api/generalMessage`,
    );
    const db = {
      zmanimData: zmanimData.data,
      tfilaTimeData: tfilaTimeData.data,
      olieLatoraData: olieLatoraData.data,
      hanzchData: hanzchData.data,
      generalMessageData: generalMessageData.data,
    };
    console.log(db);
    dispatch({type: DB_GET_SUCCESS, payload: db});
  } catch (error) {
    dispatch({
      type: DB_GET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
