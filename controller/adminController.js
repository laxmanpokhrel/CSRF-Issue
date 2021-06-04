exports.getIndex=(req,res,next)=>{
    res.render('index');
}

exports.postUpload=(req,res,next)=>{
    const image=req.files['screenshot'];
    console.log("image is :",image);
    image.forEach(i => {
        console.log('path, ',i.path);
    });
    res.send('SUCCESSFULY parsed!');
}