import React from 'react';
import styled from 'styled-components';

import { Footer } from '../templates/Footer';
import { Profile } from './Profile';

export const ProfileLayout = () => {
  return (
    <SFlex>
      <Footer />
      <Profile />
    </SFlex>
  );
};
const SFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
