export const LoginStart = (user) => {
  type: 'LOGIM_START';
};
export const LoginSuccess = (user) => {
  type: 'LOGIM_SUCCESS';
  payload: user;
};
export const IsFollow = (user) => {
  type: 'IS_FOLLOW';
  payload: user;
};
export const LoginError = (error) => {
  type: 'LOGIM_ERROR';
  payload: error;
};
