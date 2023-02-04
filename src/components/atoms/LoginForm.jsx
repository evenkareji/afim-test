import React from 'react';
import styled from 'styled-components';
export const LoginForm = styled.input`
  height: 40px;
  width: 100%;
  max-width: 400px;

  border: 1px solid #d9d9d9;
  border-radius: 14px;
  transition: transform 0.4s;
  padding: 22px 10px;
  &:focus {
    transition: transform 4s;

    outline: #fd0707 auto 1px;
    &::placeholder {
      transition: transform 0.2s;
      color: #fd0707;
      font-size: 8px;
      /* transform: translateY(-100%); */
      transform-origin: top;
      transform: translateY(-100%);
    }
  }
`;
