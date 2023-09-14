import axios from 'axios';
import { useEffect, useState } from 'react';
import './chatOnline.css';

export default function ChatOnline({
  setOnlineUsers,
  onlineUsers,
  loginUserId,
}) {
  const [friends, setFriends] = useState();
  const [onlineFriends, setOnlineFriends] = useState();
  // useEffect(() => {
  //   const getOnlineFriends = async () => {
  //     const response = await axios.get(`/users/followings/${loginUserId}`);

  //     setFriends(response.data);
  //   };
  //   getOnlineFriends();
  // }, [loginUserId]);
  // useEffect(() => {
  //   console.log(friends);

  //   const result = friends.filter((friend) =>
  //     onlineUsers.find((o) => o === friend._id),
  //   );
  //   console.log(result);
  // }, [friends, onlineUsers]);

  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src={
              user?.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">マフィン</span>
      </div>
    </div>
  );
}
