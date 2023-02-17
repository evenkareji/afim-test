const router = require('express').Router();
const multer = require('multer');

router.get('/', (req, res) => {
  res.send('upload');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/public/assets/images');
  },
  filename: (req, file, cb) => {
    // originalnameでエンコードエラー解決
    cb(null, file.originalname);
  },
});
// storageプロパティを設定しなければいけない
const upload = multer({ storage: storage });
// 画像アップロードAPI

// pathはケバブケース
router.post('/profile-image', upload.single('profileImage'), (req, res) => {
  try {
    console.log('成功');
    console.log(upload);
    return res.status(200).json('アップロード成功しました');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
