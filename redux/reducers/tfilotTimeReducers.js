// import {
//   TFILOT_TIME_GET_REQUEST,
//   TFILOT_TIME_GET_SUCCESS,
//   TFILOT_TIME_GET_FAIL,
// } from '../constants/tfilotTimeConstants';
// export const tfilotTimeListReducer = (state = {data: []}, action) => {
//   switch (action.type) {
//     case TFILOT_TIME_GET_REQUEST:
//       return {
//         loading: true,
//         tfilotTimes: [],
//       };
//     case TFILOT_TIME_GET_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//         tfilotTimes: action.payload,
//       };
//     case TFILOT_TIME_GET_FAIL:
//       return {loading: false, error: action.payload};
//     default:
//       return state;
//   }
// };
