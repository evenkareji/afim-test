import React from 'react';
import styled from 'styled-components';
import { ProfileCountDt } from '../atoms/ProfileCountDt';
import { ProfileCountDd } from '../atoms/ProfileCountDd';

export const ProfileCount = ({ count, name, toFollowsPage }) => {
  return (
    <ProfileDl onClick={toFollowsPage}>
      <ProfileCountDt>{count}</ProfileCountDt>
      <ProfileCountDd>{name}</ProfileCountDd>
    </ProfileDl>
  );
};

const ProfileDl = styled.dl`
  position: relative;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
