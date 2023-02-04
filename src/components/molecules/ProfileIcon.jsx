import React, { useContext, useState } from 'react';
import { AuthContext } from '../../state/AuthContext';
import { Icon } from '../atoms/Icon';
import styled from 'styled-components';
import { UserIconImg } from '../atoms/UserIconImg';
import { AddPost } from '../templates/AddPost/AddPost';
export const ProfileIcon = ({ isIcon, changeIsIcon }) => {
  console.log(isIcon, 'i');
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
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
`;

const SProfileIcon = styled(UserIconImg)`
  width: 32px;
  height: 32px;
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
