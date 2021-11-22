import {Connection, isServerAlive} from '../../utilities/NetworkUtills';
import {
  CHACK_CONNECTION_REQUEST,
  CHACK_CONNECTION_SUCCESS,
  CHACK_CONNECTION_FAIL,
  CHACK_CONNECTION_FOR_SERVER_REQUEST,
  CHACK_CONNECTION_FOR_SERVER_SUCCESS,
  CHACK_CONNECTION_FOR_SERVER_FAIL,
} from '../constants/ChackConnectionConstants';

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
