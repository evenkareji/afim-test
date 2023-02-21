import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import DeleteIcon from '@mui/icons-material/Delete';

import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
export const Card = ({ post }) => {
  const [user, setUser] = useState({});
  const username = useParams().username;
  const loginUser = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(`/users?userId=${post.userId}`);

      setUser(response.data);
    };
    fetchUser();
  }, [post.userId]);
  const postDelete = async () => {
    try {
      if (window.confirm('本当に削除しますか')) {
        await axios.delete(`/posts/${post._id}`, {
          data: { userId: loginUser._id },
        });
        // こいつで変更エラーが起きる
        // window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SCard key={post._id}>
      {loginUser.username === username && <SDeleteIcon onClick={postDelete} />}
      <SProfileText key={post._id}>{post.desc}</SProfileText>
    </SCard>
  );
};
const SDeleteIcon = styled(DeleteIcon)`
  position: absolute;
  top: 20px;
  right: 20px;
  color: #8d8d8d;
`;
const SCard = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 3px;
  border: 1px solid #dfdfdf;
  padding: 70px 16px;
  height: 250px;
`;
const SProfileText = styled.div`
  font-family: 'Helvetica';
  margin: 0 auto;
  font-size: 20px;
  width: 80%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-wrap: break-word;
`;
