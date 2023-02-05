import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { TextArea } from '../../atoms/TextArea';
import { UserIconImg } from '../../atoms/UserIconImg';

import axios from 'axios';
import { FooterAddPost } from '../FooterAddPost';
import { useSelector } from 'react-redux';

export const AddPost = () => {
  const user = useSelector((state) => state.user.user);
  const desc = useRef();
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [isText, setIsText] = useState(false);
  // const [file, setFile] = useState(null);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newPost = {
  //     userId: user._id,
  //     desc: desc.current.value,
  //   };

  //   // if (file) {
  //   //   const data = new FormData();
  //   //   const fileName = Date.now + file.name;
  //   //   // 画像apiを叩く

  //   //   data.append('name', fileName);
  //   //   data.append('file', file);
  //   //   newPost.img = fileName;
  //   //   try {
  //   //     await axios.post('/upload', data);
  //   //   } catch (err) {
  //   //     console.log(err);
  //   //   }
  //   // }

  //   try {
  //     await axios.post('/posts', newPost);
  //     window.location.reload();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('出力');
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    console.log('出力2');

    // if (file) {
    //   const data = new FormData();
    //   const fileName = Date.now + file.name;
    //   // 画像apiを叩く

    //   data.append('name', fileName);
    //   data.append('file', file);
    //   newPost.img = fileName;
    //   try {
    //     await axios.post('/upload', data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // }

    try {
      await axios.post('/posts', newPost);
      window.location.reload();
      desc.current.value = '';
    } catch (err) {
      console.log(err);
    }
  };

  const TextLimit = (e) => {
    if (e.target.value.length === 0) {
      setIsText(false);
    } else if (30 < e.target.value.length) {
      setIsText(false);
    } else {
      setIsText(true);
    }
  };

  return (
    <Scenter>
      <SLabel htmlFor="textForm">
        <SForm method="post">
          <SUserIconImg src={PUBLIC_FOLDER + user.profileImg} />

          <TextArea
            placeholder="30文字以内で入力してください"
            ref={desc}
            onChange={(e) => TextLimit(e)}
            id="textForm"
          ></TextArea>
          {/* <input
          type="file"
          id="file"
          name="file"
          style={{ display: 'none' }}
          onChange={(e) => setFile(e.target.files[0])}
        /> */}
          <SHr />
          <SSubmit
            isText={isText}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            送信
          </SSubmit>
        </SForm>
      </SLabel>
      <FooterAddPost />
    </Scenter>
  );
};
const SUserIconImg = styled(UserIconImg)``;
const SLabel = styled.label`
  display: block;
  max-width: 500px;
  width: 70%;
  margin: 0 auto;
  background-color: #fff;
  padding: 32px 0 72px;
  border-radius: 20px;
`;
const SForm = styled.form`
  max-width: 500px;
  width: 90%;
  margin: 0 auto;
  background-color: #fff;
`;

const Scenter = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SSubmit = styled.div`
  width: 125px;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  padding: 10px 15px 10px 17px;
  border-radius: 22px;
  border: none;
  color: #fff;
  background-color: #ed6103;
  border: none;
  margin-left: auto;

  &:hover {
    background-color: #ff6702;
  }
  pointer-events: ${({ isText }) => (isText ? 'auto' : 'none')};
  background-color: ${({ isText }) => (isText ? '#ff6702' : '#9e9c9c')};
  cursor: pointer;
`;
const SHr = styled.hr`
  border: 1px solid rgb(207, 217, 222);
  margin-top: 52px;
  margin-bottom: 42px;
`;
