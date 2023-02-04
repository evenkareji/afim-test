import React from 'react';
import styled from 'styled-components';

export const ProfileCountDt = ({ children }) => {
  return <SProfileCountDt>{children}</SProfileCountDt>;
};
const SProfileCountDt = styled.dt`
  font-size: 16px;
  font-weight: bold;
`;
