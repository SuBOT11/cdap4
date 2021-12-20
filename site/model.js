const axios = require('axios').default;
const reqOrder = async (data)=>{
  try{
    
    
    const response = await axios.post('http://localhost:3060/order-api/confirmOrder',data);
    
    return response.status;
    

  }catch
  {
    return 404;
    
  }
   

 



}

module.exports = {
  reqOrder

}