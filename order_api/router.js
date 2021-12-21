const { response } = require('express');
const express  = require('express');
const router = express.Router();
const controller = require('./controller');
router.get('/confirmOrder',(req,res)=>{
  res.send("helloworld")
})
router.post('/confirmOrder', async (req,res)=>{
  try{
    
    var data = await res.json({"code" : 200})
   var resD =  await controller.publish(req.body);
   if(resD === 200)
   {
    var resp =   await controller.callApi();
    
   }    

  } 
  catch
  {

  }
 
 


 
  

 
})

module.exports = router;