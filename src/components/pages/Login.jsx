import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
import { LoginForm } from '../atoms/LoginForm';
import { useContext, useRef, useState } from 'react';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { Hr } from '../atoms/Hr';
import { ErrorMessage } from '../atoms/ErrorMessage';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
export const Login = () => {
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();
  const [isError, setIsError] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post('auth/login', {
      email: email.current.value,
      password: password.current.value,
    });
    dispatch(login(response.data));

    setIsError(true);
  };

  return (
    <SLoginBack>
      <SLoginBorder>
        <SForm onSubmit={(e) => handleSubmit(e)}>
          <SFormHead>AFim</SFormHead>
          <SEmail
            ref={email}
            email="email"
            placeholder="メールアドレス"
            autoFocus
          />
          <SPassword
            ref={password}
            type="password"
            placeholder="パスワード"
            minLength="6"
          />
          {isError ? (
            <SErrorMessage style={{ opacity: '1' }}>
              メールアドレスかパスワードが間違っています
            </SErrorMessage>
          ) : (
            <SErrorMessage style={{ opacity: '0' }}>
              メールアドレスかパスワードが間違っています
            </SErrorMessage>
          )}
          <SSubmit type="submit">ログイン</SSubmit>

          <SHr />
          <STextFlex>
            <p>アカウントをお持ちでないですか?</p>
            <Link to="/register" style={{ textDecoration: 'none' }}>
              登録する
            </Link>
          </STextFlex>
        </SForm>
      </SLoginBorder>
    </SLoginBack>
  );
};
const SErrorMessage = styled(ErrorMessage)`
  color: red;
  margin-bottom: 38px;
`;
const SLoginBack = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SLoginBorder = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 0px;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 432px) {
    width: 60%;
    min-width: 394px;
    max-width: 640px;

    height: 80vh;
    border-radius: 16px;
  }
`;
const SForm = styled.form`
  width: 85%;
  height: 60vh;
  max-width: 400px;
  margin: 0 auto;
  padding: 40px 0px;
`;
const SFormHead = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SEmail = styled(LoginForm)`
  margin-bottom: 14px;
`;

const SPassword = styled(LoginForm)``;

const SSubmit = styled.button`
  text-decoration: none;
  list-style: none;
  border: none;
  width: 50%;
  height: 40px;
  background-color: #ed6103;
  border-radius: 30px;
  color: #fff;
  display: flex;
  max-width: 150px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
`;

const STextFlex = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    color: #ed6103;
  }
`;
const SHr = styled(Hr)``;
