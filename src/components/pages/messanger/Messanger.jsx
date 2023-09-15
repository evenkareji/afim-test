import React, { useEffect, useRef, useState } from 'react';
import Conversation from '../../conversations/Conversation';
import Message from '../../message/Message';
import ChatOnline from '../chatOnline/ChatOnline';

import './messanger.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
import io from 'socket.io-client';

export const Messanger = () => {
  const user = useSelector((state) => state.user.user);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState('');
  const [onlineUsers, setOnlineUsers] = useState([]);
  const scrollBottomRef = useRef(null);
  const port = 'ws://localhost:8900';
  const socket = useRef();

  useEffect(() => {
    socket.current = io(port);
    socket.current.emit('getUser', user._id);
    socket.current.on('sendUser', (users) => {
      // 全てのアクセスユーザーからfollowしているユーザーのみ抽出
      setOnlineUsers(
        user.followings.filter((following) =>
          users.find((user) => user.userId === following),
        ),
      );
    });

    socket.current.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.sender,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);
  console.log(onlineUsers);
  useEffect(() => {
    arrivalMessage &&
      currentChat.members?.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await axios.get(`/conversations/${user._id}`);
        setConversations(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, []);
  // useEffect(() => {
  //   const getFriends = async () => {
  //     const response = await axios.get(`/users/followings/${user._id}`);
  //     const friends = response.data;
  //     console.log(friends, 'friends');
  //     console.log(onlineUsers, 'onlineUsers inside getFriends');
  //     setOnlineUsers(
  //       friends.filter((friend) =>
  //         onlineUsers.find((onlineUser) => friend._id === onlineUser.userId),
  //       ),
  //     );
  //     console.log(onlineUsers, 'filter');
  //   };
  //   getFriends();
  // }, [setOnlineUsers, onlineUsers]);

  useEffect(() => {
    const openMessage = async () => {
      try {
        const response = await axios.get(`/messages/${currentChat?._id}`);

        setMessages(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    openMessage();
  }, [currentChat]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      conversationId: currentChat._id,
      sender: user._id,
      text: newMessage,
    };

    const recieverId = currentChat.members.find(
      (member) => member !== user._id,
    );

    socket.current.emit('sendMessage', {
      sender: user._id,
      recieverId,
      text: newMessage,
    });

    try {
      const response = await axios.post('/messages', message);
      setMessages([...messages, response.data]);
    } catch (err) {
      console.log(err);
    }
    setNewMessage('');
  };
  useEffect(() => {
    if (scrollBottomRef?.current) {
      scrollBottomRef.current.scrollIntoView({
        behavior: 'auto',
      });
    }
  }, [messages]);
  console.log(onlineUsers, 'online');
  return (
    <div className="messanger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          {conversations.map((conversation) => (
            <div
              key={conversation._id}
              onClick={() => setCurrentChat(conversation)}
            >
              <Conversation conversation={conversation} loginUser={user} />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m) => (
                  <div key={m._id} ref={scrollBottomRef}>
                    <Message m={m} own={user._id === m.sender} />
                  </div>
                ))}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  className="chatMessageInput"
                  placeholder="write something ..."
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  送信
                </button>
              </div>
            </>
          ) : (
            <p>chatRoom押してください</p>
          )}
        </div>
      </div>
      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline
            setCurrentChat={setCurrentChat}
            onlineUsers={onlineUsers}
            loginUserId={user._id}
          />
        </div>
      </div>
    </div>
  );
};
