var amqp = require('amqplib/callback_api');
const ajax = require('ajax').default;
const { json } = require('express');

const { cookie } = require('request');

publish =  (data)=>{
  try{
    
    var payload = data;
   
       amqp.connect('amqp://localhost', function(error0, connection) {
       if (error0) {
         throw error0;
       }
       connection.createChannel(function(error1, channel) {
         if (error1) {
           throw error1;
         }
         var exchange = 'logs';
         var msg = process.argv.slice(2).join(' ') || 'Hello World!';
       var message = JSON.stringify(payload);
     
         channel.assertExchange(exchange, 'fanout', {
           durable: false
         });
         channel.publish(exchange, '', Buffer.from(message));
         console.log(" [x] Sent %s", message);
       });
     
       setTimeout(function() {
         connection.close();
         process.exit(0);
       }, 500);
       
     });
     return 200;
     
     
    
     
     

  }catch{
    return 404;
    

  }
 


}

callApi =  ()=>{
  try{
    var response =  ajax.get('http://localhost:3090/notification-api/consume');
    console.log('here');
    console.log(response);


     
    

  }catch{
    console.log('error');

  }
   
   


}
module.exports = {
  publish,
  callApi
}