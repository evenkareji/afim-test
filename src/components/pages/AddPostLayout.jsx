import React from 'react';
import styled from 'styled-components';

import { Footer } from '../templates/Footer';

import { AddPost } from '../templates/AddPost/AddPost';

export const AddPostInfo = () => {
  return (
    <SFlex>
      <Footer />
      <AddPost />
    </SFlex>
  );
};
const SFlex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;
