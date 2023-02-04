import { createContext, useEffect, useReducer } from 'react';
import { AuthReducer } from './AuthReducer';

const initialState = {
  // リロード

  // user: {
  //   _id: '63d8d386608f407f50998597',
  //   username: '進級',
  //   email: 'sin@gmail.com',
  //   password: '20030806sin',
  //   profileImg: 'person/進級.jpg',
  //   followers: Array,
  //   followings: Array,
  //   isAdmin: false,
  // },
  user: JSON.parse(localStorage.getItem('user')) || null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
