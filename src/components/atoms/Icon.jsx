import React from 'react';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
export const Icon = ({ children, link }) => {
  return (
    <SLink to={{ pathname: link }}>
      <SIconButton>{children}</SIconButton>
    </SLink>
  );
};
const SIconButton = styled(IconButton)`
  padding: 8px;
  text-decoration: none;
  font-size: inherit !important;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: inherit !important;
  border-radius: 0px !important;
  @media (min-width: 425px) {
    width: 120px;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;
  padding: 0 8px 0 16px;
  color: #000;
  @media (min-width: 425px) {
  }
`;
