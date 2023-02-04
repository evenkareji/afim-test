import { useState } from 'react';
import styled, { keyframes, css } from 'styled-components';
import './HeartIcon.css';

export const AlreadyHeart = () => {
  return (
    <SAlreadyHeartIcon>
      <i className="material-icons heart">favorite</i>
    </SAlreadyHeartIcon>
  );
};

export const SAlreadyHeartIcon = styled.div`
  color: #ff6702;
`;
