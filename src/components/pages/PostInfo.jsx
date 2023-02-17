import React from 'react';
import styled from 'styled-components';

import { Footer } from '../templates/Footer';

import { Post } from './Post';

export const PostInfo = () => {
  return (
    <SFlex>
      <Footer />
      <Post />
    </SFlex>
  );
};
const SFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
