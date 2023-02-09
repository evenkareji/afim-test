import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserIconImg } from '../atoms/UserIconImg';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const UserIconWithName = ({ profileUser }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [file, setFile] = useState(null);
  // useEffect(() => {
  //   if (file) {
  //     profileUpload();
  //   }
  //   async function profileUpload() {
  //     let newProfileImg;
  //     try {
  //       const data = new FormData();
  //       const fileName = Date.now() + file.name;
  //       data.append('file', file);
  //       data.append('name', fileName);
  //       newProfileImg = { fileName };
  //       console.log('実行');
  //       await axios.post('/upload', data);
  //       console.log('実行完了');
  //     } catch (err) {
  //       console.log(err);
  //     }

  //     try {
  //       await axios.post('/auth/register', newProfileImg);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // }, [file]);
  // console.log(file, 'giuyegvuveug');
  return (
    <div>
      <SLabel htmlFor="file">
        <SPriofileImg
          src={
            profileUser.profileImg
              ? PUBLIC_FOLDER + profileUser.profileImg
              : PUBLIC_FOLDER + 'person/noAvatar.png'
          }
        />
        <SAddCircleIcon />
        <input
          // type="file"
          id="file"
          name="file"
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        />
      </SLabel>
      <Smp>画像は変更できません</Smp>
      <SProfileUserName>{profileUser.username}</SProfileUserName>
    </div>
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
