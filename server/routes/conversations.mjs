import express from 'express';
const router = express.Router();
import Conversation from '../models/Conversation.mjs';

//  add
router.post('/', async (req, res) => {
  const savedConversation = new Conversation({
    members: [req.body.senderId, req.body.recievedId],
  });
  try {
    const setConversation = await savedConversation.save();

    res.status(200).json(setConversation);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get
router.get('/:userId', async (req, res) => {
  try {
    const getConversationUser = await Conversation.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(getConversationUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
