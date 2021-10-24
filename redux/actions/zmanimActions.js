// import axios from 'axios';
// import {isAlive} from '../../utilities/baseUrl';
// import {
//   ZMANIM_GET_REQUEST,
//   ZMANIM_GET_SUCCESS,
//   ZMANIM_GET_FAIL,
// } from '../constants/zmanimConstants';

// export const getZmanim = () => async dispatch => {
//   try {
//     dispatch({type: ZMANIM_GET_REQUEST});
//     const {data} = await axios.get(`${await isAlive()}/api/zmanim`);
//     dispatch({type: ZMANIM_GET_SUCCESS, payload: data});
//   } catch (error) {
//     dispatch({
//       type: ZMANIM_GET_FAIL,
//       payload:
//         error.response && error.response.data.message
//           ? error.response.data.message
//           : error.message,
//     });
//   }
// };
