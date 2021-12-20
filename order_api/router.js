const { response } = require('express');
const express  = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/confirmOrder',(req,res)=>{
  controller.publish(req.body);
})

module.exports = router;