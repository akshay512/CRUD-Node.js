const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const postroutes= require('./routes/posts')
const bodyparser= require('body-parser');
app.use(bodyparser.json());
app.use('/posts',postroutes)

/*app.use('/posts',()=>{
    console.log('hey its a middleware')
})*/

app.get('/', (req, res) => {
    res.send('we are at home')

});


mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
    console.log('connected to db')
})
app.listen(5000);