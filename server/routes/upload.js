const router = require('express').Router();
const multer = require('multer');

router.get('/', (req, res) => {
  res.send('upload');
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/public/assets');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
// 画像アップロードAPI

router.post('/', upload.single('file'), (req, res) => {
  try {
    console.log('成功');
    console.log(upload);
    return res.status(200).json(upload);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
