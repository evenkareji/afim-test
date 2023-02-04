import styled from 'styled-components';
import { Text } from '../organisms/Text';
import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FooterHome } from '../templates/FooterHome';
import { AuthContext } from '../../state/AuthContext';
import { logoutCall } from '../../actionCalls';
import LogoutIcon from '@mui/icons-material/Logout';
import { Comment } from './Comment';
export const Post = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get('/posts');

      // setPosts(response.data);
      setPosts(
        response.data.sort((post1, post2) => {
          return new Date(post2.createdAt) - new Date(post1.createdAt);
        }),
      );
    };
    fetchPost();
  }, []);
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const logoutEvent = async () => {
    try {
      logoutCall(dispatch);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <SPostMain>
      <SLogoutButton onClick={logoutEvent}>
        <LogoutIcon style={{ fontSize: '14px' }} />
      </SLogoutButton>
      <PostBg>
        <PostSlide>
          {posts.map((post) => (
            <Text post={post} key={post._id} />
          ))}
        </PostSlide>
      </PostBg>

      <FooterHome />
    </SPostMain>
  );
};
const SLogoutButton = styled.div`
  padding: 10px;
  font-size: 12px;
  border-radius: 15px;
  text-align: center;
  background: #dfdfdf;
  color: #626161;
  position: absolute;
  top: 10%;
  left: 20px;
  z-index: 10;
`;
const SPostMain = styled.div`
  position: relative;
`;
const PostBg = styled.div`
  color: white;
  background-color: black;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const PostSlide = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  border-radius: 0;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 425px) {
    & {
      max-width: 400px;
      width: 100%;
      height: 95vh;
      border-radius: 20px;
    }
  }

  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  overflow: scroll;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
`;
