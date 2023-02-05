import React, { useContext, useState } from 'react';
import { Home } from '../molecules/Home';
import { ProfileIcon } from '../molecules/ProfileIcon';
import { AddPostIcon } from '../molecules/AddPostIcon';
import styled from 'styled-components';
import { AddPost } from './AddPost/AddPost';

export const FooterAddPost = () => {
  const [isHomeIcon, setIsHomeIcon] = useState(true);
  const [isAddIcon, setIsAddIcon] = useState(true);
  const [isProfileIcon, setIsProfileIcon] = useState(true);

  return (
    <SFooter>
      {/* ホーム */}
      <Home />
      {/* addpost */}
      <AddPostIcon isIcon={isAddIcon} />
      {/* プロフィール */}
      <ProfileIcon />
    </SFooter>
  );
};

const SFooter = styled.footer`
  border-top: 1px solid #dbdbdb;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 425px) {
    & {
      background-color: rgb(255, 255, 255);
      justify-content: space-around;
    }
  }
`;
