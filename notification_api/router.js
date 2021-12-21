const app = require('express');

const router = app.Router();
const controller = require('./controller');

router.get('/consume',(req,res) =>{
res.json({"status":"200"});
controller.consume();  
});
module.exports = router;