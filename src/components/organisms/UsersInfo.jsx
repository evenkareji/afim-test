import React from 'react';
import styled from 'styled-components';
import { UserInfo } from '../molecules/UserInfo';
export const UsersInfo = ({ followers }) => {
  return (
    <SUsersContainer>
      <UserInfo followers={followers} />
      <UserInfo followers={followers} />
      <UserInfo followers={followers} />
      <UserInfo followers={followers} />
      <UserInfo followers={followers} />
      <UserInfo followers={followers} />
    </SUsersContainer>
  );
};
const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
