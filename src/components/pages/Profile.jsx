import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProfileCount } from '../molecules/ProfileCount';
import { PersonalPost } from '../organisms/PersonalPost';
import { IconButton } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { FooterIcon } from '../templates/FooterIcon';
import { UserIconWithName } from '../molecules/UserIconWithName';
import { FooterProfile } from '../templates/FooterProfile';
import { FollowTab } from './FollowTab';

export const Profile = () => {
  const [isToPage, setIsToPage] = useState(false);
  const toFollowsPage = () => {
    setIsToPage((prev) => !prev);
  };
  const [profileUser, setProfileUser] = useState([]);
  const username = useParams().username;
  console.log(username, 'username');
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`/users?username=${username}`);
      setProfileUser(response.data);
    };
    fetchPost();
  }, [username]);

  return (
    <SProfileBox>
      <SFollowTab
        isToPage={isToPage}
        toFollowsPage={toFollowsPage}
        style={{ position: 'absolute' }}
      />
      <SProfileInfo>
        {/* icon */}
        <UserIconWithName profileUser={profileUser} />
        <SProfileFlex>
          {/* <ProfileCount name="投稿" count="999" /> */}
          <ProfileCount
            toFollowsPage={toFollowsPage}
            name="フォロー"
            count={profileUser.followings?.length}
          />
          <ProfileCount
            toFollowsPage={toFollowsPage}
            name="フォロワー"
            count={profileUser.followers?.length}
          />
        </SProfileFlex>
        <SIntroduction>{profileUser.desc}</SIntroduction>
      </SProfileInfo>
      <SIconButtons>
        <SIconButton>
          <SProfileOption>投稿</SProfileOption>
        </SIconButton>
      </SIconButtons>
      <SPadding>
        <PersonalPost username={username} />
      </SPadding>
      <FooterProfile username={username} />
    </SProfileBox>
  );
};
const SFollowTab = styled(FollowTab)``;
const SProfileBox = styled.div`
  position: relative;
  background-color: #fafafa;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
const SIntroduction = styled.div`
  padding: 30px 0px 0px;
  margin: 0 auto;
  width: 50%;
  max-width: 600px;
  text-align: center;
  font-size: 16px;
`;
const SIconButtons = styled.div`
  width: 100%;
  border-top: 1px solid #dfdfdf;
  background-color: #fafafa;
`;
const SProfileOption = styled.div`
  font-size: 18px;
  color: #ed6103;
  font-weight: bold;
`;
const SIconButton = styled(IconButton)`
  padding: 8px;
  text-decoration: none;
  font-size: inherit !important;
  color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: inherit !important;
  border-radius: 0px !important;
  @media (min-width: 425px) {
    width: 120px;
  }
`;

const SProfileFlex = styled.div`
  width: 55%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const SProfileInfo = styled.div`
  width: 100%;
  max-width: 432px;
  margin: 0 auto;
  padding: 43px 0;
  /* border-bottom: 1px solid #000; */
`;

const SPadding = styled.div`
  padding-left: 3px;
  padding-right: 3px;
  width: 100%;
`;
