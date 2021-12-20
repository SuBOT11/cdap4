
const express = require('express')
const siteRoutes = require('./router')

const app = express();

const axios = require('axios');
const model = require('./index')

app.set('view engine','ejs')
const path = require('path')
const bodyparser = require('body-parser')
const request = require('request');
const { fileLoader, render } = require('ejs');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))
const port = 3030
app.use(express.static("public"))
app.use(siteRoutes)

app.use('/',siteRoutes)



app.listen(port,()=>{
  console.log('Server Connected at :',port);
})
