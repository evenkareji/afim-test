import styled from 'styled-components';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { LoginForm } from '../atoms/LoginForm';
import { useRef } from 'react';
import axios from 'axios';

export const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity('パスワードが違います');
    } else {
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <SLoginBack>
      <SLoginBorder>
        <SForm onSubmit={(e) => handleSubmit(e)}>
          <SFormHead>アカウント登録</SFormHead>
          <SName type="text" placeholder="ユーザー名" required ref={username} />
          <SEmail
            type="email"
            placeholder="メールアドレス"
            required
            ref={email}
          />
          <SPassword
            type="password"
            placeholder="パスワード"
            required
            ref={password}
          />
          <SPasswordConfirmation
            placeholder="確認用パスワード"
            type="password"
            required
            ref={passwordConfirmation}
          />

          <SSubmit type="submit">登録</SSubmit>
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
  width: 70%;
  height: 50vh;
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 0px;
`;
const SFormHead = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SName = styled(LoginForm)`
  margin-bottom: 14px;
`;
const SEmail = styled(LoginForm)`
  margin-bottom: 14px;
`;

const SPassword = styled(LoginForm)`
  margin-bottom: 14px;
`;
const SPasswordConfirmation = styled(LoginForm)`
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
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
// const SLink = styled(Link)`
//   text-decoration: none;
//   list-style: none;
//   border: none;
//   width: 50%;
//   height: 40px;
//   background-color: #ed6103;
//   border-radius: 30px;
//   color: #fff;
//   display: flex;
//   max-width: 150px;
//   margin-left: auto;
//   justify-content: center;
//   align-items: center;
// `;
