const express=require('express');
const multer=require('multer');
const router=express.Router();

const adminController=require('../controller/adminController');


const store=multer.diskStorage({
    destination:'images'
});

const upload= multer({storage:store});

router.get('/',adminController.getIndex);
router.post('/upload', upload.array('image'),adminController.postUpload);

module.exports=router;