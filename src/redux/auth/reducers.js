import * as actionTypes from "./actionTypes";
import { UserToken } from "./../../utils/tokens";

const initialState = {
  user_token: UserToken.getToken(),
  // user_profile: UserToken.setProfileData(),
  user_profile: null,
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.LOGIN_USER:
      return { ...state };

    case actionTypes.SAVE_USER_TOKEN:
      return { ...state, user_token: payload };

    case actionTypes.SAVE_USER_PROFILE:
      return { ...state, user_profile: payload };

    case actionTypes.LOGOUT_USER:
      return { ...state, user_token: "" };

    default:
      return state;
  }
}

export default authReducer;
