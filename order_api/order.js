const express = require('express')
const app = express();
var amqp = require('amqplib');
var http = require('http');
app.set('view engine','ejs')
const path = require('path')
const bodyparser = require('body-parser')
const orderRouter = require('./router')
const request = require('request');
const controller = require('./controller')
const { fileLoader, render } = require('ejs');
app.use(express.json());
app.use(bodyparser.urlencoded({extended:false}))
const port = 9060
 
app.post('/order-api/number',(req,res)=>{
  var one = 10;
  var two = 20;
  var three = one + two;
  res.json({"number":three});

})

app.post('/order-api/confirmOrder', async (req,res)=>{

  var payload = req.body;
   console.log(payload);
  await connect(payload); 
  callApi();
  res.json({"status":200});
  

   
   
 


});
async function connect(payload) {
  
  try {
      const amqpServer = "amqp://localhost:5672"
      const connection = await amqp.connect(amqpServer)
      const channel = await connection.createChannel();
      await channel.assertQueue("jobs");
      await channel.sendToQueue("jobs", Buffer.from(payload.phone))
      console.log(`Job sent successfully ${payload.phone}`);
      await channel.close();
      await connection.close();
      
      
      
  }
  catch (ex){
      console.error(ex)
      return 404;
  }

}
 function callApi() {
   var code;
  http.get({
    hostname: 'localhost',
    port: 3090, 
    path: '/notification-api/consume',
    agent: false  // Create a new agent just for this one request
  }, (res) => {
    console.log(res.statusCode)
    code = res.statusCode;
    
  });
  
  return code;


}

app.listen(port,()=>{
  console.log('Server Connected at :',port);
})   
