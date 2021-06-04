const express=require('express');
// const path=require('path');

//newly added line 5
const multer = require('multer');

const csrf=require('csurf');
const session = require('express-session');


const adminRoutes=require('./routes/adminRoutes');

const port=process.env.PORT || 5000;

const app=express();

app.set('view engine','ejs');
app.set('views','views');

//newly added line 19 .use multer before csrf
//app.use(multer({dest:'images/'}).array('image'));

const csrfProtection=csrf();

// to use session
app.use(session({
    secret: 'my long string',
    resave: false,
    saveUninitialized: false
}));

// app.use(express.static(path.join(__dirname,'public')));

app.use(csrfProtection);


app.use((req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
});



app.use(adminRoutes);

app.listen(port,()=>{
    console.log('listening at port : 5000');
})




