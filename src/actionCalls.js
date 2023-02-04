import axios from 'axios';

export const loginCall = async (user, dispatch) => {
  dispatch({ type: 'LOGIN_START' });
  try {
    const response = await axios.post('auth/login', user);
    dispatch({ type: 'LOGIN_SUCCESS', payload: response.data });
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', payload: err });
  }
};
export const logoutCall = async (dispatch) => {
  try {
    dispatch({ type: 'LOGOUT_SUCCESS' });
  } catch (err) {
    dispatch({ type: 'LOGIN_ERROR', payload: err });
  }
};
// export const followCall = async (user, dispatch) => {
//   dispatch({ type: 'IS_FOLLOW' });
//   try {
//     const response = await axios.get('/users/followings', user);
//     dispatch({ type: 'IS_FOLLOW', payload: response.data });
//   } catch (err) {
//     dispatch({ type: 'IS_FOLLOW', payload: err });
//   }
// };
