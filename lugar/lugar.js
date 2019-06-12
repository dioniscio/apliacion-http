const axios = require('axios');

const getLugar= async(direccion)=>{

    let cncodeurl= encodeURI(direccion);
   let resp= await axios.get(`https://jsonplaceholder.typicode.com/users/${cncodeurl}`)

        return{
            nombre:resp.data.name,
            email :resp.data.email,
            direccion:resp.data.address.street
        }

}



module.exports={

    getLugar
}

