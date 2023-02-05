import React, { useContext, useState } from 'react';
import { Home } from '../molecules/Home';
import { ProfileIcon } from '../molecules/ProfileIcon';
import { AddPostIcon } from '../molecules/AddPostIcon';
import styled from 'styled-components';

export const FooterHome = () => {
  const [isHomeIcon, setIsHomeIcon] = useState(true);

  return (
    <SFooter>
      {/* ホーム */}
      <Home isIcon={isHomeIcon} />
      {/* addpost */}
      <AddPostIcon link={'/addpost'} />
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
  background-color: rgb(255, 255, 255);
  @media (min-width: 425px) {
    & {
      justify-content: space-around;
    }
  }
`;
