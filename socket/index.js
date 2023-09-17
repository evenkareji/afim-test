const io = require('socket.io')(8900, {
  cors: { origin: 'http://localhost:3000' },
});

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId == userId) &&
    users.push({ userId, socketId });
};
const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

/**
 *
 * @param {*} userId
 * @returns user
 */
const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on('connection', (socket /**clientから受け取る時 */) => {
  console.log('client connected');

  socket.on('getUser', (userId) => {
    addUser(userId, socket.id);
    io.emit('sendUser', users);
  });

  socket.on('sendMessage', ({ sender, recieverId, text }) => {
    // 受信者のsocket.idを取得
    const user = getUser(recieverId);

    if (user) {
      io.to(user.socketId).emit('getMessage', { sender, text });
    }
  });

  socket.on('disconnect', () => {
    console.log('client disconnect');
    removeUser(socket.id);
    io.emit('sendUser', users);
  });
});
