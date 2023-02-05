import React from 'react';
import { SearchUsers } from '../molecules/SearchUsers';
import { FollowersInfo } from '../organisms/FollowersInfo';

export const FollowerLists = () => {
  return (
    <div>
      <SearchUsers />
      <FollowersInfo />
    </div>
  );
};
