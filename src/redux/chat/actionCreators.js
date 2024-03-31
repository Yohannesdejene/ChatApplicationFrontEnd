import * as actionTypes from "./actionTypes";
// import { ProductsService } from "../../services/productPricing";
// import * as cartUtility from "../../utils/cart";

export const addNewMessage = (message) => ({
  type: actionTypes.ADD_NEW_MESSAGE,
  payload: message,
});

// export const getCartTotal = () => (dispatch) => {
//   const cart_total = cartUtility.getCartProductsTotal();
//   dispatch({
//     type: actionTypes.CART_TOTAL,
//     payload: cart_total,
//   });
// };

// export const setShippingRates = (shippingRate) => (dispatch) => {
//   const cart_total = cartUtility.getCartSubTotalAmounts();
//   const cart_total_plus_rates = Number(shippingRate) + Number(cart_total);
//   const shipping_costs = {
//     shippingRate: Number(shippingRate).toFixed(2),
//     cartTotal: cart_total_plus_rates.toFixed(2),
//   };
//   dispatch({
//     type: actionTypes.SET_SHIPPING_RATES,
//     payload: shipping_costs,
//   });
// };

// export const getCartProducts = () => (dispatch) => {
//   const cart_products = cartUtility.getCartProducts();
//   dispatch({
//     type: actionTypes.CART_PRODUCTS,
//     payload: cart_products,
//   });
// };

// export const getCartSubTotalAmounts = () => (dispatch) => {
//   const cart_sub_total = cartUtility.getCartSubTotalAmounts();
//   dispatch({
//     type: actionTypes.CART_SUB_TOTAL,
//     payload: `${cart_sub_total}`,
//   });
// };

// /////leave it
// export const addToCart = (productID, action) => (dispatch) => {
//   cartUtility.AddToCart(productID, action);
//   dispatch({
//     type: actionTypes.ADD_PRODUCT_TO_CART,
//   });
// };

// ////try to understand this
// export const getProductPricing = (requestBody) => async () => {
//   try {
//     const res = ProductsService.getProductPricing(requestBody);
//     return Promise.resolve(res);
//   } catch (error) {
//     return Promise.reject(error);
//   }
// };

// export const deleteProductsInCart = () => (dispatch) => {
//   cartUtility.deleteCartItems();
//   dispatch({
//     type: actionTypes.DELETE_CART_ITEMS,
//   });
// };
