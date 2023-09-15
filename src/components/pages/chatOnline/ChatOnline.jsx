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
  console.log(friends);

  useEffect(() => {
    setOnlineFriends(
      friends?.filter((friend) => onlineUsers.find((o) => o === friend._id)),
    );
  }, [friends, onlineUsers]);
  console.log(friends);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="chatOnline">
      {onlineFriends?.map((onlineFriend) => (
        <div className="chatOnlineFriend">
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
