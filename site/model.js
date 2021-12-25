const axios = require('axios').default;
const reqOrder = async (data)=>{
  try{
    var response =  await axios.post('http://localhost:9060/order-api/confirmOrder',data);
    console.log(response.status);
    
    return response.status;
 

  }catch{
    return 400;

  }
   



}

module.exports = {
  reqOrder

}