import React, { useContext, useState } from 'react';
import { Home } from '../molecules/Home';
import { ProfileIcon } from '../molecules/ProfileIcon';
import { AddPostIcon } from '../molecules/AddPostIcon';
import styled from 'styled-components';

export const Footer = () => {
  const [isHomeIcon, setIsHomeIcon] = useState(true);
  const [isAddIcon, setIsAddIcon] = useState(true);
  const [isProfileIcon, setIsProfileIcon] = useState(true);

  return (
    <SFooter>
      {/* ホーム */}
      <Home isIcon={isHomeIcon} />
      {/* addpost */}
      <AddPostIcon isIcon={isAddIcon} />
      {/* プロフィール */}
      <ProfileIcon isIcon={isProfileIcon} />
    </SFooter>
  );
};

const SFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;

  z-index: 1000000;
  background-color: rgb(255, 255, 255);
  width: 100%;
  justify-content: space-around;
  border-top: 1px solid #dbdbdb;
  @media (min-width: 768px) {
    padding: 30px 0px 30px 20px;
    justify-content: space-between;
    height: 280px;
    flex-direction: column;
    position: relative;
    flex: 0.2;
  }
  @media (min-width: 1264px) {
    align-items: start;
  }
`;
