import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@mui/material';
export const Spinner = () => {
  return (
    <SDiv>
      <SCircularProgress />
    </SDiv>
  );
};
const SCircularProgress = styled(CircularProgress)`
  color: #ed6103 !important;
`;
const SDiv = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
