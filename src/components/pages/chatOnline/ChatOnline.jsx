import axios from 'axios';
import { useEffect, useState } from 'react';
import './chatOnline.css';

export default function ChatOnline({
  setCurrentChat,
  onlineUsers,
  loginUserId,
}) {
  const [friends, setFriends] = useState();
  const [onlineFriends, setOnlineFriends] = useState();
  useEffect(() => {
    const getOnlineFriends = async () => {
      const response = await axios.get(`/users/followings/${loginUserId}`);

      setFriends(response.data);
    };
    getOnlineFriends();
  }, [loginUserId]);

  useEffect(() => {
    setOnlineFriends(
      friends?.filter((friend) => onlineUsers.find((o) => o === friend._id)),
    );
  }, [friends, onlineUsers]);

  const handleClick = async (user) => {
    try {
      console.log(user, 'user');
      const response = await axios.get(
        `/conversations/find/${loginUserId}/${user._id}`,
      );
      console.log(response.data);
      setCurrentChat(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="chatOnline">
      {onlineFriends?.map((onlineFriend) => (
        <div
          className="chatOnlineFriend"
          onClick={() => handleClick(onlineFriend)}
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                onlineFriend?.profileImg
                  ? PF + onlineFriend.profileImg
                  : PF + 'person/noAvatar.png'
              }
              alt=""
            />
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{onlineFriend?.username}</span>
        </div>
      ))}
    </div>
  );
}
