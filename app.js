//require modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const tradeRoutes = require('./routes/tradeRoutes');
const mainRoutes = require('./routes/mainRoutes');
const mongoose = require('mongoose');

//create app
const app = express();

//configure app
let port = 3000;
let host = 'localhost';
app.set('view engine','ejs');

// connect to Mongoose
mongoose.connect('mongodb://0.0.0.0:27017/demos', { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    //start the server
    app.listen(port, host, () => {
    console.log('The server is running on port', port);
   });
})
.catch(err=>console.log(err.message));

//mount middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('tiny'));
app.use(methodOverride('_method'));

//General Site Navigations - home page, about, contact , sign In and Singup - interim 
app.use('/', mainRoutes); // home page, sign in and sign up
app.use('/about', mainRoutes); // about page
app.use('/contact', mainRoutes); // contact page

app.use('/Trades', tradeRoutes);

// 404 error handler
app.use((req, res, next) =>{
    let err = new Error('The server cannot locate ' + req.url);
    err.status = 404;
    next(err);
});

// 500 error handler
app.use((err, req, res, next) =>{
 if(!err.status){
    err.status = 500;
    err.message = ("Internal Server Error");
 } 
 res.status(err.status);
 res.render('error', {error: err});
 
});

 