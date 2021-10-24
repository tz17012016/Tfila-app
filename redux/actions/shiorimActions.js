// import axios from 'axios';
// import {isAlive} from '../../utilities/baseUrl';
// import {
//   SHIORIM_GET_REQUEST,
//   SHIORIM_GET_SUCCESS,
//   SHIORIM_GET_FAIL,
// } from '../constants/shiorimConstants';
// export const getShiorim = () => async dispatch => {
//   try {
//     dispatch({type: SHIORIM_GET_REQUEST});
//     const {data} = await axios.get(`${await isAlive()}/api/shiorim`);
//     dispatch({type: SHIORIM_GET_SUCCESS, payload: data});
//   } catch (error) {
//     dispatch({
//       type: SHIORIM_GET_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
