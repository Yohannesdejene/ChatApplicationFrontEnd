import * as actionTypes from "./actionTypes";
import { AuthService } from "../../services/authService";
import { UserToken } from "../../utils/tokens";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    const requestBody = {
      email: email,
      password: password,
    };
    const res = AuthService.loginUser(requestBody);
    dispatch({
      type: actionTypes.LOGIN_USER,
      payload: res.data,
    });
    return Promise.resolve(res);
  } catch (error) {
    return Promise.reject(error);
  }
};

export const logoutUser = () => (dispatch) => {
  UserToken.deleteToken();
  UserToken.deleteUserProfileToken();
  UserToken.deleteValidBusinessToken();
  dispatch({
    type: actionTypes.LOGOUT_USER,
  });
};

export const saveUserToken =
  ({ userToken, userIdentifier }) =>
  (dispatch) => {
    // check if there is an existing token,
    const token = UserToken.getToken();
    if (!token) {
      UserToken.setToken(userToken);
      UserToken.setIdentifier(userIdentifier);
      dispatch({
        type: actionTypes.SAVE_USER_TOKEN,
        payload: userToken,
      });
    }
  };
