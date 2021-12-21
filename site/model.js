const axios = require('axios').default;
const reqOrder = async (data)=>{
  try{
    var response =  await axios.post('http://localhost:3060/order-api/confirmOrder',data);
    
    return response.data.code;
 

  }catch{
    return 400;

  }
   



}

module.exports = {
  reqOrder

}