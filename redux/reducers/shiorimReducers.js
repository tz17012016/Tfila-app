// import {
//   SHIORIM_GET_REQUEST,
//   SHIORIM_GET_SUCCESS,
//   SHIORIM_GET_FAIL,
// } from '../constants/shiorimConstants';
// export const shiorimListReducer = (state = {data: []}, action) => {
//   switch (action.type) {
//     case SHIORIM_GET_REQUEST:
//       return {
//         loading: true,
//         shiorim: [],
//       };
//     case SHIORIM_GET_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//         shiorim: action.payload,
//       };
//     case SHIORIM_GET_FAIL:
//       return {loading: false, error: action.payload};
//     default:
//       return state;
//   }
// };
