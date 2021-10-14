import axios from 'axios';
import {checkBASE_URL} from '../../utilities/baseUrl';
import {
  DB_GET_REQUEST,
  DB_GET_SUCCESS,
  DB_GET_FAIL,
} from '../constants/dbConstants.js';
export const getDB = () => async dispatch => {
  try {
    dispatch({type: DB_GET_REQUEST});
    const zmanimData = await axios.get(`${await checkBASE_URL()}/api/zmanim`);
    const tfilaTimeData = await axios.get(
      `${await checkBASE_URL()}/api/tfilaTime`,
    );
    const olieLatoraData = await axios.get(
      `${await checkBASE_URL()}/api/olieLatora`,
    );
    const shiorimDdata = await axios.get(
      `${await checkBASE_URL()}/api/shiorim`,
    );
    const hanzchData = await axios.get(`${await checkBASE_URL()}/api/hanzch`);
    const generalMessageData = await axios.get(
      `${await checkBASE_URL()}/api/generalMessage`,
    );
    let db = {
      zmanimData: zmanimData.data,
      tfilaTimeData: tfilaTimeData.data,
      olieLatoraData: olieLatoraData.data,
      shiorimDdata: shiorimDdata.data,
      hanzchData: hanzchData.data,
      generalMessageData: generalMessageData.data,
    };
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
