
const colors = require('colors');
const lugar = require('./lugar/lugar');
const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc :'Direccion de la ciudad para obtener el clima',
        demand : true
    }
})
.help()
.argv;



console.log(argv.direccion);



lugar.getLugar(argv.direccion)
.then(res=>{
    console.log(res);
})