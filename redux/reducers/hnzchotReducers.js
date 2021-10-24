// import {
//   HNZCHOT_GET_REQUEST,
//   HNZCHOT_GET_SUCCESS,
//   HNZCHOT_GET_FAIL,
// } from '../constants/hnzchotConstants';
// export const hnzchotListReducer = (state = {data: []}, action) => {
//   switch (action.type) {
//     case HNZCHOT_GET_REQUEST:
//       return {
//         loading: true,
//         hnzchots: [],
//       };
//     case HNZCHOT_GET_SUCCESS:
//       return {
//         loading: false,
//         success: true,
//         hnzchots: action.payload,
//       };
//     case HNZCHOT_GET_FAIL:
//       return {loading: false, error: action.payload};
//     default:
//       return state;
//   }
// };
