import express from 'express';
import Post from '../models/Post.mjs';
const router = express.Router();

router.get('/', (req, res) => {
  res.send('コメント');
});

// コメント追加
router.put('/:id/comment', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const result = await post.updateOne({
      $push: {
        likes: req.body.userId,
      },
    });

    return res.status(200).json('コメントしました');
  } catch (err) {
    return res.status(500).json(err);
  }
});
export default router;

// router.put('/:id/like', async (req, res) => {
//   try {
//     let isLike = false;
//     const post = await Post.findById(req.params.id);

//     if (!post.likes.includes(req.body.userId)) {
//       await post.updateOne({
//         $push: { likes: req.body.userId },
//       });
//       isLike = true;
//       console.log(isLike);
//       return res.status(200).json(isLike);
//     } else {
//       await post.updateOne({
//         $pull: {
//           likes: req.body.userId,
//         },
//       });
//       isLike = false;
//       console.log(isLike);
//       return res.status(200).json(isLike);
//     }
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });
