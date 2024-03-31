// import { httpApi } from "./http";
// import { formatProductsToCheckout } from "../utils/cart";
// const getProductPricing = (requestBody) => {
//   const { url, subProductId, productId, quantity } = requestBody;
//   const request_body = {
//     productId: `${subProductId}`,
//     subProductId: `${productId}`,
//     quantity: `${quantity}`,
//   };
//   return httpApi.post(url, request_body);
// };

// const checkoutProducts = async (checkoutBody) => {
//   let responseBody = {};
//   const { paymentMethod, url } = checkoutBody;
//   const products_list = formatProductsToCheckout();

//   if (products_list.length >= 1) {
//     const request_body = {
//       paymentMethod: paymentMethod,
//       items: products_list,
//     };
//     await httpApi
//       .request({
//         method: "POST",
//         url,
//         data: request_body,
//       })
//       .then((res) => {
//         const { statusCode } = res.data;
//         if (statusCode === "000") {
//           const { OrderRef } = res.data;
//           responseBody = {
//             isError: false,
//             CheckoutSummary: {
//               ...res.data["checkoutSummary "],
//               OrderRef,
//             },
//           };
//         } else if (statusCode === "440") {
//           responseBody = {
//             isError: true,
//             errorMessage: "Invalid Item in Cart",
//           };
//         } else if (statusCode === "500") {
//           responseBody = {
//             isError: true,
//             errorMessage: "Request Could Not be processed, try again",
//           };
//         } else {
//           responseBody = {
//             isError: true,
//             errorMessage: "An Error occurred, try again",
//           };
//         }
//       })
//       .catch((error) => {
//         responseBody = {
//           isError: true,
//           errorMessage: "An Error occurred, try again",
//         };
//       });
//     return responseBody;
//   }
// };

// const assignAddressToOrder = async (request_body, url) => {
//   let responseBody = {};
//   await httpApi
//     .request({
//       method: "POST",
//       url,
//       data: request_body,
//     })
//     .then((res) => {
//       const { statusCode, statusMessage, totalDeliveryFee } = res.data;
//       if (statusCode === "000") {
//         responseBody = {
//           totalDeliveryFee: totalDeliveryFee,
//           isError: false,
//           errorMessage: null,
//         };
//       } else if (statusCode === "440") {
//         responseBody = {
//           isError: true,
//           errorMessage: statusMessage,
//         };
//       } else {
//         responseBody = {
//           isError: true,
//           errorMessage: "An Error occurred, try again",
//         };
//       }
//     })
//     .catch((error) => {
//       responseBody = {
//         isError: true,
//         errorMessage: "An Error occurred, try again",
//       };
//     });
//   return responseBody;
// };

// export const ProductsService = {
//   getProductPricing,
//   checkoutProducts,
//   assignAddressToOrder,
// };
