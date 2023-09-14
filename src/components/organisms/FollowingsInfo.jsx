import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';
import { useSelector } from 'react-redux';
import { FollowingInfo } from '../molecules/FollowingInfo';
export const FollowingsInfo = () => {
  const [followings, setFollowings] = useState([]);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios.get(`/users/followings/${user._id}`);
      console.log(response.data, 'following');
      setFollowings(response.data);
    };
    getFollowers();
  }, []);

  return (
    <SUsersContainer>
      {followings.map((following) => (
        <FollowingInfo following={following} key={following[0]._id} />
      ))}
    </SUsersContainer>
  );
};
const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
