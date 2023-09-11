import React, { useEffect, useRef, useState } from 'react';
import Conversation from '../../conversations/Conversation';
import Message from '../../message/Message';
import './messanger.css';
import { useSelector } from 'react-redux';
import axios from 'axios';
export const Messanger = () => {
  const user = useSelector((state) => state.user.user);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState();
  const [newMessage, setNewMessage] = useState('');
  const scrollBottomRef = useRef(null);
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

  const openMessage = async (conversationId) => {
    try {
      const response = await axios.get(`/messages/${conversationId}`);
      setCurrentChat(conversationId);
      setMessages(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = {
      conversationId: currentChat,
      sender: user._id,
      text: newMessage,
    };
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
  return (
    <div className="messanger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          {conversations.map((conversation) => (
            <div
              key={conversation._id}
              onClick={() => openMessage(conversation._id)}
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
                  <div ref={scrollBottomRef}>
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
        <div className="chatOnlineWrapper"></div>
      </div>
    </div>
  );
};
