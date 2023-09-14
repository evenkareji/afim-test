import express from 'express';
const router = express.Router();
import User from '../models/User.mjs';

// ユーザー情報の取得
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    return res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/search/:key', async (req, res) => {
  try {
    // $regex;は正規表現のためにある;
    let data = await User.find({
      $or: [{ username: { $regex: req.params.key } }],
    });
    res.send(data);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// フォローのユーザー情報
router.get('/followings/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const followingUsers = await Promise.all(
      currentUser.followings.map((followingrId) => {
        return User.findById(followingrId);
      }),
    );
    let friendList = [];
    followingUsers.map((followingUser) => {
      const { _id, username, profileImg } = followingUser;
      friendList.push({ _id, username, profileImg });
    });

    return res.status(200).json(friendList);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// フォロワーのユーザー情報
router.get('/followers/:userId', async (req, res) => {
  try {
    const currentUser = await User.findById(req.params.userId);
    const followUsers = await Promise.all(
      currentUser.followers.map((followerId) => {
        return User.find({ _id: followerId });
      }),
    );

    return res.status(200).json(followUsers);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// ユーザー更新
router.put('/:id', async (req, res) => {
  let newInfo = await User.findById(req.body.userId);
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      const newInfo = await User.findById(req.body.userId);
      return res.status(200).json(newInfo);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res
      .status(403)
      .json('あなたは自分のアカウントの情報だけ更新できます');
  }
});

// ユーザー情報の取得
router.get('/', async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;
  try {
    const user = userId
      ? await User.findById(userId)
      : await User.findOne({ username: username });
    const { password, updatedAt, ...other } = user._doc;
    return res.status(200).json(other);
  } catch (err) {
    res.status(500).json(err);
  }
});
// router.get('/followings', async (req, res) => {
//   const userId = req.query.userId;
//   try {
//     const user = userId
//       ? await User.findById(userId)
//       : await User.findOne({ username: username });
//     const { password, updatedAt, ...other } = user._doc;
//     console.log('アクセス');
//     return res.status(200).json(other);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// フォロー
router.put('/:id/follow', async (req, res) => {
  try {
    if (req.body.userId !== req.params.id) {
      const user = await User.findById(req.params.id);
      const currentUser = await User.findById(req.body.userId);
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          $push: { followers: req.body.userId },
        });
        await currentUser.updateOne({
          $push: { followings: req.params.id },
        });
        const newInfo = await User.findById(req.body.userId);
        res.status(200).json(newInfo);
      } else {
        return res.status(403).json('既にフォローしてます');
      }
    } else {
      return res.status(500).json('自分をフォローできない');
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// フォロー解除
router.put('/:id/unfollow', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const currentUser = await User.findById(req.body.userId);
    if (user.followers.includes(req.body.userId)) {
      await user.updateOne({
        $pull: { followers: req.body.userId },
      });
      await currentUser.updateOne({
        $pull: { followings: req.params.id },
      });
      const newInfo = await User.findById(req.body.userId);

      res.status(200).json(newInfo);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
