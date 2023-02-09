import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LoginForm } from '../atoms/LoginForm';
import { useRef } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ErrorMessage } from '../atoms/ErrorMessage';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
export const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordConfirmation = useRef();
  const [isError, setIsError] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
    };

    if (password.current.value !== passwordConfirmation.current.value) {
      setIsError(true);
    } else {
      try {
        await axios.post('/auth/register', user);
        navigate('/login');
      } catch (err) {
        console.log(err);
        setEmailExist(true);
      }
    }
  };

  return (
    <SLoginBack>
      <SLoginBorder>
        <SForm onSubmit={(e) => handleSubmit(e)}>
          <SArrowBackIosNewIconBox to={'/login'}>
            <SArrowBackIosNewIcon />
          </SArrowBackIosNewIconBox>
          <SHead>
            新規登録<Sp>本物のメールアドレスは入力しないでください</Sp>
          </SHead>
          <SName
            type="text"
            placeholder="ユーザー名"
            ref={username}
            autoFocus
          />
          <SEmail
            type="email"
            placeholder="メールアドレス *本物のメールアドレスは入力しないでください"
            ref={email}
          />
          {emailExist ? (
            <SEmailExist style={{ opacity: '1' }}>
              そのメールアドレスは使用されています
            </SEmailExist>
          ) : (
            <SEmailExist style={{ opacity: '0' }}>
              そのメールアドレスは使用されています
            </SEmailExist>
          )}
          <SPassword type="password" placeholder="パスワード" ref={password} />
          <SPasswordConfirmation
            placeholder="確認用パスワード"
            type="password"
            ref={passwordConfirmation}
            isError={isError}
          />
          {isError ? (
            <SErrorMessage style={{ opacity: '1' }}>
              パスワードが一致しません
            </SErrorMessage>
          ) : (
            <SErrorMessage style={{ opacity: '0' }}>
              パスワードが一致しません
            </SErrorMessage>
          )}

          <SSubmit type="submit" formnovalidate>
            登録
          </SSubmit>
        </SForm>
      </SLoginBorder>
    </SLoginBack>
  );
};
const SEmailExist = styled.p`
  color: red;
  font-size: 15px;
  margin-top: -1px;
`;
const Sp = styled.p`
  color: red;
  font-size: 15px;
`;
const SArrowBackIosNewIconBox = styled(Link)`
  display: inline-block;

  height: 30px;
  width: 30px;
  position: absolute;
  top: 80px;
`;
const SArrowBackIosNewIcon = styled(ArrowBackIosNewIcon)`
  width: 92%;
  max-width: 680px;
  margin: 0 auto 20px;
  color: #9a9696;
`;
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

    height: 90vh;
    border-radius: 16px;
  }
`;
const SForm = styled.form`
  width: 70%;
  height: 60vh;
  max-width: 400px;
  margin: 0 auto;
  padding: 30px 0px;
`;
const SHead = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 40px;
`;
const SName = styled(LoginForm)`
  margin-bottom: 18px;
`;
const SEmail = styled(LoginForm)``;

const SPassword = styled(LoginForm)`
  margin-bottom: 18px;
`;
const SPasswordConfirmation = styled(LoginForm)`
  outline: ${({ isError }) => isError && '#ed0303 auto 2px'};
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
