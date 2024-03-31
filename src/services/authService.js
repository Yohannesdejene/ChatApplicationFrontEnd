import { httpApi, cbeTokenValidationApi } from "./http";
import { UserToken } from "../utils/tokens";
import { useSelector, useDispatch } from "react-redux";
import * as URL from "../static/apiUrls";

const loginUser = async (loginBody) => {
  const { data } = await httpApi.request({
    method: "POST",
    url: URL.LOGOUT_USER,
    data: loginBody,
  });
  return data;
};

const registerUser = async (registrationBody) => {
  const { data } = await httpApi.request({
    method: "POST",
    url: URL.USER_REGISTER,
    data: registrationBody,
  });
  return data;
};

const changeCustomerPassword = async (registrationBody) => {
  const token = UserToken.getPasswordResetToken();
  const { data } = await httpApi.request({
    method: "POST",
    url: URL.CHANGE_USER_PASSWORD,
    data: registrationBody,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

const requestCustomerPasswordChange = async (requestBody) => {
  const { data } = await httpApi.request({
    method: "POST",
    url: URL.USER_REGISTER,
    data: requestBody,
  });
  return data;
};

const confirmCustomerPasswordCode = async (requestBody) => {
  const { data } = await httpApi.request({
    method: "POST",
    url: URL.VALIDATE_OTP,
    data: requestBody,
  });
  return data;
};

const getUserDetails = async (tokenFromSignIn) => {
  // tokenFromSignIn is the token returned from Auth before it has been saved in localStorage
  const userToken = tokenFromSignIn ? tokenFromSignIn : UserToken.getToken();
  if (!userToken) return;
  else {
    const { data } = await httpApi.request({
      method: "GET",
      url: "/get-details",
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return data;
  }
};

const resetPasswordFinal = async (requestBody, apiToken) => {
  // apiToken is passed here since it has not been saved to state/session/local storage
  const { data } = await httpApi.request({
    method: "POST",
    url: URL.USER_REGISTER,
    data: requestBody,
    headers: {
      Authorization: `Bearer ${apiToken}`,
    },
  });
  return data;
};

const getUserValidatedDetails = async (requestBody) => {
  const userToken = UserToken.getToken();
  if (!userToken) return;
  else {
    const { data } = await httpApi.request({
      method: "POST",
      url: "/auth-user",
      data: requestBody,
      // headers: {
      //     "Authorization": `Bearer ${userToken}`
      // }
    });
    return data;
  }
};
const authGeneral = async ({ requestBody, url }) => {
  const userToken = UserToken.getToken();
  if (!userToken) return;
  else {
    const { data } = await httpApi.request({
      method: "POST",
      url: url,
      data: requestBody,
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    return data;
  }
};

export const AuthService = {
  loginUser,
  registerUser,
  getUserDetails,
  requestCustomerPasswordChange,
  changeCustomerPassword,
  confirmCustomerPasswordCode,
  resetPasswordFinal,
  getUserValidatedDetails,
  authGeneral,
};
