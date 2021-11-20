import {Connection} from '../../utilities/NetworkUtills';
import axios from 'axios';
import {
  CHACK_CONNECTION_REQUEST,
  CHACK_CONNECTION_SUCCESS,
  CHACK_CONNECTION_FAIL,
  CHACK_CONNECTION_FOR_SERVER_REQUEST,
  CHACK_CONNECTION_FOR_SERVER_SUCCESS,
  CHACK_CONNECTION_FOR_SERVER_FAIL,
} from '../constants/ChackConnectionConstants';
const isServerAlive = async () => {
  const BASE_URL = 'https://btmanagement.herokuapp.com';
  const BASE_URL1 = 'https://btmanagement1.herokuapp.com';
  const BASE_URL2 = 'https://btmanagement2.herokuapp.com';
  // const BASE_URL_DEVELOPMENT = 'http://192.168.1.100:5000';

  let resultBASE_URL = await axios.get(`${BASE_URL}`);
  let resultBASE_URL1 = await axios.get(`${BASE_URL1}`);
  let resultBASE_URL2 = await axios.get(`${BASE_URL2}`);
  // let resultBASE_URL_DEVELOPMENT = await axios.get(`${BASE_URL_DEVELOPMENT}`);

  switch (true) {
    // case resultBASE_URL_DEVELOPMENT.status === 200:
    //   console.log('development server');
    //   return BASE_URL_DEVELOPMENT;
    case resultBASE_URL.status === 200:
      console.log('live server 1');
      return true;
    case resultBASE_URL1.status === 200:
      console.log('live server 2');
      return true;
    case resultBASE_URL2.status === 200:
      console.log('live server 3');
      return true;
    default:
      console.log('Srver is down');
      return false;
  }
};
export const getConnection = () => async dispatch => {
  try {
    dispatch({type: CHACK_CONNECTION_REQUEST});
    const connection = await Connection();

    dispatch({type: CHACK_CONNECTION_SUCCESS, payload: connection});
  } catch (error) {
    dispatch({
      type: CHACK_CONNECTION_FAIL,
      payload: 'no Connection Please try again later',
    });
  }
};
export const getIsServerAlive = () => async dispatch => {
  try {
    dispatch({type: CHACK_CONNECTION_FOR_SERVER_REQUEST});
    const connectionForServer = await isServerAlive();
    dispatch({
      type: CHACK_CONNECTION_FOR_SERVER_SUCCESS,
      payload: connectionForServer,
    });
  } catch (error) {
    dispatch({
      type: CHACK_CONNECTION_FOR_SERVER_FAIL,
      payload: 'no Connection Please try again later',
    });
  }
};
