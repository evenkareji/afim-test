import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FollowerInfo } from '../molecules/FollowerInfo';
import axios from 'axios';
import { useSelector } from 'react-redux';
export const FollowersInfo = () => {
  const [followers, setFollowers] = useState([]);
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    const getFollowers = async () => {
      const response = await axios.get(`/users/followers/${user._id}`);
      setFollowers(response.data);
    };
    getFollowers();
  }, []);

  return (
    <SUsersContainer>
      {followers.map((follower) => (
        <FollowerInfo follower={follower} />
      ))}
    </SUsersContainer>
  );
};
const SUsersContainer = styled.div`
  width: 92%;
  margin: 0 auto;
`;
