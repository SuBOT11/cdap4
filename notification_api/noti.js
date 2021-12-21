
const express = require('express')
const app = express();
const notiRouter = require('./router')

const bodyparser = require('body-parser')
const request = require('request');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))
const port = 3090

app.use('/notification-api/',notiRouter);

app.listen(port,()=>{
  console.log('Server Connected at :',port);
})
