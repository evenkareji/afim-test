import { IconButton } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { BaseBtn } from './BaseBtn';
export const UnFollowBtn = (props) => {
  const { children, handleFollow } = props;
  return (
    <IconButton style={{ padding: '0px' }} onClick={handleFollow}>
      <SUnFollowBtn className="unfollow-bg-color">{children}</SUnFollowBtn>
    </IconButton>
  );
};
const SUnFollowBtn = styled(BaseBtn)`
  width: 100%;
  font-size: 12px;
  font-weight: bold;

  padding: 6px 15px 5px 17px;

  border-radius: 8px;
  border: 1px solid #000;

  color: #000000;
`;
