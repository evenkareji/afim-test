import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserIconImg } from '../atoms/UserIconImg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

import { followEvent } from '../../features/userSlice';

export const UserIconWithName = ({ profileUser }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (file) {
      profileUpload();
    }
    async function profileUpload() {
      const newProfile = {
        userId: user._id,
      };
      try {
        const data = new FormData();
        const fileName = file.name;
        data.append('name', fileName);
        data.append('profile_image', file);
        newProfile.profileImg = fileName;
        console.log('実行');

        await axios.post('/upload/profile-image', data);
        console.log('実行完了');
      } catch (err) {
        console.log(err);
      }

      try {
        const response = await axios.put(`/users/${user._id}`, newProfile);
        dispatch(followEvent(response.data));
        // window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  }, [file]);

  return (
    <>
      <SLabel htmlFor="profile_image">
        <SPriofileImg
          src={
            profileUser.profileImg
              ? PUBLIC_FOLDER + '/person/' + profileUser.profileImg
              : PUBLIC_FOLDER + 'person/noAvatar.png'
          }
        />
        <SAddCircleIcon />
        <input
          type="file"
          id="profile_image"
          name="profile_image"
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </SLabel>

      <SProfileUserName>{profileUser.username}</SProfileUserName>
    </>
  );
};
const SLabel = styled.label`
  position: relative;
  display: block;
  width: 160px;
  height: 160px;
  margin: 0 auto 14px;
  @media (min-width: 425px) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const SAddCircleIcon = styled(AddCircleIcon)`
  position: absolute;
  bottom: -8px;
  left: 68%;
  font-size: 35px !important;
  color: #ed6103 !important;
  background: #fff;
  border-radius: 2000px;
`;
const SPriofileImg = styled(UserIconImg)`
  width: 160px;
  height: 160px;
  margin: 0 auto;
  @media (min-width: 425px) {
    & {
      width: 180px;
      height: 180px;
    }
  }
`;
const SProfileUserName = styled.div`
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 18px;
  text-align: center;
`;
const Smp = styled.div`
  color: #545454;
  margin-bottom: 18px;
  text-align: center;
`;
