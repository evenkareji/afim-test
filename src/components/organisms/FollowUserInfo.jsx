import React from 'react';
import styled from 'styled-components';
import { OnFollowBtn } from '../atoms/OnFollowBtn';
import { UsersInfo } from './UsersInfo';
import { SearchUsers } from '../molecules/SearchUsers';
export const FollowUserInfo = () => {
  return (
    <SUsersContainer>
      <SearchUsers />
      <UsersInfo />
    </SUsersContainer>
  );
};
const SUsersContainer = styled.div`
  width: 428px;
  margin: 0 auto;
  border: 1px solid #000;
`;
