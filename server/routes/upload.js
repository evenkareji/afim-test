const router = require('express').Router();
const multer = require('multer');
// 画像の保存先のpathがうまく定められていないからデプロイ後に画像が使えない
const profileStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/public/assets/person');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const imageStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/public/assets/images');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const profileUpload = multer({ storage: profileStorage });
router.post(
  '/profile-image',
  profileUpload.single('profile_image'),
  (req, res) => {
    try {
      console.log('成功');
      return res.status(200).json('アップロード成功しました');
    } catch (err) {
      console.log(err);
    }
  },
);

const imageUpload = multer({ storage: imageStorage });
router.post('/post-image', imageUpload.single('file'), (req, res) => {
  try {
    console.log('成功');
    return res.status(200).json('アップロード成功しました');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
