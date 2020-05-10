import { myFirebase } from "../../config/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

export const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

export const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

export const loginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

export const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

export const receiveLogout = () => {
  return {
    type: LOGOUT_SUCCESS
  };
};

export const logoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

export const verifyRequest = () => {
  return {
    type: VERIFY_REQUEST
  };
};

export const verifySuccess = () => {
  return {
    type: VERIFY_SUCCESS
  };
};