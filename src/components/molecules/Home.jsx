import React from 'react';
import { Icon } from '../atoms/Icon';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import styled from 'styled-components';
export const Home = ({ isIcon }) => {
  const reloadHome = () => {
    window.location.reload();
  };
  return (
    <div onClick={reloadHome}>
      <Icon link={'/'}>
        {isIcon ? (
          <HomeIcon style={{ width: '32', height: '32' }} />
        ) : (
          <HomeOutlinedIcon style={{ width: '32', height: '32' }} />
        )}
        <SIconText isIcon={isIcon}>ホーム</SIconText>
      </Icon>
    </div>
  );
};

const SIconText = styled.small`
  font-weight: ${({ isIcon }) => (isIcon ? '800' : 'normal')};
`;
