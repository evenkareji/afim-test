import React, { useEffect, useState } from 'react';
import './conversation.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
const Conversation = ({ conversation, loginUser }) => {
  const [friend, setFriend] = useState();
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const friendId = conversation.members.find((m) => m !== loginUser._id);

  useEffect(() => {
    const getFriend = async () => {
      try {
        const response = await axios.get(`users/${friendId}`);
        setFriend(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriend();
  }, [friendId]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          friend?.profileImg
            ? PUBLIC_FOLDER + friend.profileImg
            : PUBLIC_FOLDER + '/person/noAvatar.png'
        }
        alt=""
      />
      <span className="conversationName">{friend?.username}</span>
    </div>
  );
};

export default Conversation;
