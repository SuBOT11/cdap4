const express = require('express')


const app = express();



app.set('view engine','ejs')
const path = require('path')
const bodyparser = require('body-parser')
const orderRouter = require('./router')
const request = require('request');
const { fileLoader, render } = require('ejs');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))
const port = 3060

app.use('/order-api',orderRouter);






app.listen(port,()=>{
  console.log('Server Connected at :',port);
})
