const express  = require('express');
const router = express.Router();
const data = require('./products.json')
const modelSites = require('./model');
var dataArr = data.items;

router.get('/',(req,res)=>{
  res.render('index',{dataArr});
})


router.get('/order/:id',(req,res)=>{
  
 
  dataArr.forEach(data => { 
   if(req.params.id === data.sys.id){
     res.render('item',{item : data.fields , id: data.sys.id })
     
   }
    
  });
})

router.post('/orderItem/:id', async (req,res)=>{
  try{
    var  status = await modelSites.reqOrder(req.body)
    if(status !== 200){
      
      res.send('<h1> Cannot confirm your Order </h1>');
  
    }else{
      
      res.send("<h1>Your order has been placed.</h1>")
    }

  }catch {
   res.send('<h1>error occured </h1>')

  }
  

})



module.exports = router;