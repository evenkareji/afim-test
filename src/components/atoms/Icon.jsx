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
  width: 160px;

  color: #fff;
  display: flex !important;
  align-items: center !important;
  color: inherit !important;
  border-radius: 22px !important;
  flex-direction: column;

  @media (min-width: 768px) {
  }
  @media (min-width: 1264px) {
    /* justify-content: space-between !important; */
    text-align: left !important;

    flex-direction: row;
  }
`;
const SLink = styled(Link)`
  text-decoration: none;

  color: #000;
  @media (min-width: 425px) {
  }
`;
