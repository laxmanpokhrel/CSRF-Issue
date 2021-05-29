exports.getIndex=(req,res,next)=>{
    res.render('index');
}

exports.postUpload=(req,res,next)=>{
    const image=req.files;
    console.log("image is :",image);
    res.send('SUCCESSFULY parsed!');
}