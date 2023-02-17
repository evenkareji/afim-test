const router = require('express').Router();
const multer = require('multer');

router.get('/', (req, res) => {
  res.send('upload');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'server/public/assets/person');
  },
  filename: (req, file, cb) => {
    // originalnameでエンコードエラー解決
    cb(null, req.body.name);
  },
});
// storageプロパティを設定しなければいけない
const upload = multer({ storage: storage });
// 画像アップロードAPI

router.post('/', upload.single('file'), (req, res) => {
  try {
    console.log('成功');
    console.log(upload);
    return res.status(200).json('アップロード成功しました');
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;

// const router = require('express').Router();
// const multer = require('multer');

// router.get('/', (req, res) => {
//   res.send('upload');
// });

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'server/public/assets/person');
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname);
//   },
// });

// const upload = multer({ storage: storage });
// // 画像アップロードAPI

// router.post('/', upload.single('file'), (req, res) => {
//   try {
//     console.log(upload);
//     return res.status(200).json({ message: 'アップロード成功しました' });
//   } catch (err) {
//     console.log(err);
//     return res.status(500).json({ message: 'サーバーエラーが発生しました' });
//   }
// });

// module.exports = router;
