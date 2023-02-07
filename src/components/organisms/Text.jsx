import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OnFollowBtn } from '../atoms/OnFollowBtn';
import { UnFollowBtn } from '../atoms/UnFollowBtn';
import ChatIcon from '@mui/icons-material/Chat';
import { HeartIcon } from '../atoms/HeartIcon/HeartIcon';

import axios from 'axios';
import { Link } from 'react-router-dom';
import { Comment } from '../pages/Comment';
import { login } from '../../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
export const Text = ({ post }) => {
  const [user, setUser] = useState({});
  // user(loginUser)が更新されないからフォローしても変更されない

  const loginUser = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get(`/users/${post.userId}`);
      setUser(response.data);
    };
    getUsers();
  }, [post.userId]);
  const [isGood, setIsGood] = useState(post.likes.includes(loginUser._id));
  const handleLike = async () => {
    try {
      !isGood ? ++post.likes.length : --post.likes.length;
      const response = await axios.put(`/posts/${post._id}/like`, {
        userId: loginUser._id,
      });

      setIsGood(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleUnFollow = async () => {
    try {
      const response = await axios.put(`/users/${post.userId}/unfollow`, {
        userId: loginUser._id,
      });
      dispatch(login(response.data));
    } catch (err) {
      console.log(err);
    }
  };
  const handleFollow = async () => {
    try {
      const response = await axios.put(`/users/${post.userId}/follow`, {
        userId: loginUser._id,
      });

      dispatch(login(response.data));
    } catch (err) {
      console.log(err);
    }
  };

  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const modalComment = () => {
    setIsCommentModal((prev) => !prev);
  };
  const profileSrc = user.profileImg
    ? PUBLIC_FOLDER + loginUser.profileImg
    : PUBLIC_FOLDER + '/person/noAvatar.png';

  const [isCommentModal, setIsCommentModal] = useState(false);

  return (
    <PostBorder>
      {/* <SImg src={next} alt="" /> */}
      <SBg />
      <SPostContent>
        <SPostHeader>
          <Link to={`profile/${user.username}`}>
            <SUserIconImg
              src={
                user.profileImg
                  ? PUBLIC_FOLDER + user.profileImg
                  : PUBLIC_FOLDER + '/person/noAvatar.png'
              }
            />
          </Link>
          <Box>
            <SUserName>{user.username}</SUserName>

            {loginUser._id !== post.userId && (
              <div>
                {loginUser.followings?.includes(post.userId) ? (
                  <OnFollowBtn handleUnFollow={handleUnFollow}>
                    フォロー中
                  </OnFollowBtn>
                ) : (
                  <UnFollowBtn handleFollow={handleFollow}>
                    フォロー
                  </UnFollowBtn>
                )}
              </div>
            )}
          </Box>
        </SPostHeader>
        <SDescContainer>
          <SPostArticle>{post.desc}</SPostArticle>
        </SDescContainer>
      </SPostContent>
      <SAside>
        <SHeartBox
          onClick={() => {
            handleLike();
          }}
        >
          <HeartIcon isGood={isGood} />
        </SHeartBox>
        <HeartCount>{post.likes.length}</HeartCount>
        {/* <IconButton onClick={modalComment}>
          <Chat sx={{ fontSize: 30 }} />
        </IconButton>
        <ChatCount>{post.comment}</ChatCount> */}
      </SAside>
      <Comment
        isCommentModal={isCommentModal}
        modalComment={modalComment}
        src={profileSrc}
      />
    </PostBorder>
  );
};
const SHeartBox = styled.div`
  cursor: pointer;
`;
const SPostContent = styled.div`
  position: absolute;
  top: 25%;
  left: 38px;
  width: 74%;
  height: 70%;
`;
const SPostHeader = styled.header`
  display: flex;
  align-items: start;
`;

const SDescContainer = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;
const SPostArticle = styled.p`
  font-size: 24px;
  color: #000;

  font-weight: normal;
  line-height: 1.5em;
  text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.2);
`;
const Box = styled.div`
  margin-left: 20px;
`;

const SUserIconImg = styled.img`
  object-fit: cover;
  border-radius: 100%;
  width: 52px;
  height: 52px;
  background-color: #fff;
`;
const SUserName = styled.h1`
  color: #000;
  font-size: 16px;
  font-weight: bold;
`;

const SAside = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 62%;
  align-items: center;
  right: 10px;
  padding: 20px;
  text-align: center;
`;

const Chat = styled(ChatIcon)`
  color: #000;
  font-size: 100px;
`;
const HeartCount = styled.span`
  margin-bottom: 18px;
  color: #000;
`;
const ChatCount = styled.span`
  color: #000;
`;

const PostBorder = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
const SBg = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  background-color: #fafafa;
`;
// const SImg = styled.img`
//   width: 100%;
//   height: 100vh;
//   object-fit: cover;
// `;
