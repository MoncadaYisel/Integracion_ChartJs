const {Sequelize} = require('sequelize')

const sequelize= new Sequelize(
    'appweb',
    'root',
    'yyrr/04/07/2024',
    {
        host:'127.0.0.1',
        port:3306,
        dialect:'mysql'
    }

)
sequelize.authenticate()
    .then(()=>{ console.log('Conexion exitosa')})
    .catch((error)=>{console.log('Ocurrio un error' + error)})

module.exports=sequelize;
