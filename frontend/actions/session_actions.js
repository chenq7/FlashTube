import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const login = user => dispatch => {
  return APIUtil.login(user).then(user => dispatch(receiveCurrentUser(user)), 
  err => (dispatch(receiveErrors(err.responseJSON))))
};

export const userValidation = username => dispatch => {
  return APIUtil.userValidation(username);
} 

export const logout = () => dispatch => {
  return APIUtil.logout().then(user => dispatch(logoutCurrentUser()))
};

export const signup = user => dispatch => {
  return APIUtil.signup(user).then(user => dispatch(receiveCurrentUser(user)),
  err => (dispatch(receiveErrors(err.responseJSON))))
};

const demoUser = {
  username: "demo user",
  password: "demopassword"
}

export const demoLogin = () => dispatch => {
  return dispatch(login(demoUser))
}