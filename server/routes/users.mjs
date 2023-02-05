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

// フォローのユーザー情報
router.get('/followings/:username', async (req, res) => {
  console.log(req.params.username);
  try {
    const currentUser = await User.findById(req.params.username);
    const followingUsers = await Promise.all(
      currentUser.followings.map((followingrId) => {
        return User.find({ _id: followingrId });
      }),
    );

    return res.status(200).json(followingUsers);
  } catch (err) {
    return res.status(500).json(err);
  }
});
// フォロワーのユーザー情報
router.get('/followers/:username', async (req, res) => {
  console.log(req.params.username);
  try {
    const currentUser = await User.findById(req.params.username);
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
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    console.log('server');
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('ユーザー情報が更新されました');
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
