import React from 'react';
import './message.css';

const Message = ({ m, own }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          className="messageImg"
          src={PUBLIC_FOLDER + '/person/noAvatar.png'}
          alt=""
        />
        <p className="messageText">{m.text}</p>
      </div>
      <div className="messageBottom">{m.createdAt}</div>
    </div>
  );
};

export default Message;
