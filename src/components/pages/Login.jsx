import styled from 'styled-components';
import { Link, Route, Routes } from 'react-router-dom';
import { LoginForm } from '../atoms/LoginForm';
import { useContext, useRef } from 'react';
import { loginCall } from '../../actionCalls';
import { AuthContext } from '../../state/AuthContext';
import { Hr } from '../atoms/Hr';

export const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch,
    );
  };

  return (
    <SLoginBack>
      <SLoginBorder>
        <SForm onSubmit={(e) => handleSubmit(e)}>
          <SFormHead>Fields</SFormHead>
          <SEmail
            ref={email}
            email="email"
            placeholder="メールアドレス"
            required
          />
          <SPassword
            ref={password}
            type="password"
            placeholder="パスワード"
            required
            minLength="6"
          />

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

const SLoginBack = styled.div`
  background-color: #d9d9d9;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SLoginBorder = styled.div`
  width: 60%;
  min-width: 394px;
  max-width: 640px;
  background-color: #fff;
  height: 80vh;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SForm = styled.form`
  width: 85%;
  height: 50vh;
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

const SPassword = styled(LoginForm)`
  margin-bottom: 38px;
`;

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
