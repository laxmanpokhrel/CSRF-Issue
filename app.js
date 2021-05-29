const express=require('express');
// const path=require('path');
const csrf=require('csurf');
const session = require('express-session');


const adminRoutes=require('./routes/adminRoutes');

const app=express();

app.set('view engine','ejs');
app.set('views','views');

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

app.listen(5000,()=>{
    console.log('listening at port : 5000');
})




