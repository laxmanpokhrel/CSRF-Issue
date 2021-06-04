const express = require('express');
const multer = require('multer');
// const uuid=require('uuid');
const router = express.Router();

const adminController = require('../controller/adminController');


// const store = multer.diskStorage({
//     destination: 'images'
// });

const filter = (req, file, cb) => {
    // console.log("file from filter:", file);
    if (file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
        console.log('from filter if!');
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const store = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {

            cb(null, '-blog-' + file.originalname);
    }
});

const upload = multer({
    storage: store,
    fileFilter:filter
});

router.get('/', adminController.getIndex);
router.post('/upload', upload.fields([{
    name: 'screenshot',
    maxCount:4
},{
    name:'image',
    maxCount:1
}]), adminController.postUpload);

module.exports = router;