import * as actionTypes from "./actionTypes";
// import { getCartProductsTotal, getCartProducts, getCartSubTotalAmounts } from "../../utils/cart";

// const initialState = {
//     cart_total: getCartProductsTotal(),
//     cart_products: getCartProducts(),
//     cart_sub_total: getCartSubTotalAmounts(),
//     "shipping_rate": null,
// }

const initialState = {
  chatDetail: [],
  chatOverview: [],
};
function chatReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADD_NEW_MESSAGE:
      return {
        ...state,
        chatDetail: [...state.chatDetail, ...action.payload],
      };
    case actionTypes.GE_DETAIL_CHAT:
      return { ...state, chatOverview: action.payload };

    default:
      return state;
  }
}

export default chatReducer;
