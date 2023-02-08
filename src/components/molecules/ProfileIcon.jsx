import React, { useState } from 'react';

import { Icon } from '../atoms/Icon';
import styled from 'styled-components';
import { UserIconImg } from '../atoms/UserIconImg';
import { useSelector } from 'react-redux';
export const ProfileIcon = ({ isIcon, changeIsIcon }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const user = useSelector((state) => state.user.user);
  return (
    <Icon link={`/profile/${user.username}`}>
      <SProfileIcon
        src={
          user.profileImg
            ? PUBLIC_FOLDER + user.profileImg
            : PUBLIC_FOLDER + 'person/noAvatar.png'
        }
        isIcon={isIcon}
      />
      <SIconText isIcon={isIcon}>プロフィール</SIconText>
    </Icon>
  );
};
const SIconText = styled.small`
  font-weight: ${({ isIcon }) => (isIcon ? '800' : 'normal')};
  letter-spacing: -0.1em;
  @media (min-width: 432px) {
    letter-spacing: 0;
  }
`;

const SProfileIcon = styled(UserIconImg)`
  width: 32px;
  height: 32px;
  padding-left: 0;
  box-sizing: border-box;
  border: ${({ isIcon }) => (isIcon ? '2px solid #000' : 'none')};
`;

//  <div onClick={() => changeIsIcon('home')}>
//    {/* <Icon link={`/profile/${user.username}`}>
//         {isIcon ? (
//           <HomeIcon style={{ width: '32', height: '32' }} />
//         ) : (
//           <HomeOutlinedIcon style={{ width: '32', height: '32' }} />
//         )}
//         <SIconText isIcon={isIcon}>ホーム</SIconText>
//       </Icon>
//     </div> */}
//    <Icon link={`/profile/${user.username}`}>
//      <SProfileIcon
//        src={
//          user.profileImg
//            ? PUBLIC_FOLDER + user.profileImg
//            : PUBLIC_FOLDER + 'person/noAvatar.png'
//        }
//        isIcon={isIcon}
//      />
//      <SIconText isIcon={isIcon}>プロフィール</SIconText>
//    </Icon>
//  </div>;
