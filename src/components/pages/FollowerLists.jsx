import React from 'react';
import { SearchUsers } from '../molecules/SearchUsers';
import { UsersInfo } from '../organisms/UsersInfo';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import styled from 'styled-components';
export const FollowerLists = ({ followers }) => {
  return (
    <div>
      <SearchUsers />
      <UsersInfo followers={followers} />
    </div>
  );
};
