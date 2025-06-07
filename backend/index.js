const express = require('express')
const sequelize = require('./conexion/database')
const cors = require('cors');

const Product = require('./Modelo/Product')

const app = express()
app.use(cors());
app.use(express.json())

var puerto = 5000;
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Agrupar por categoryCode y contar productos
app.get('/CantidadPorCategoria', async (req, resp) => {
  try {
    const resultado = await Product.findAll({
      attributes: [
        'categoryCode',
        [sequelize.fn('COUNT', sequelize.col('*')), 'total']
      ],
      group: ['categoryCode']
    });

    if (resultado.length === 0) {
      resp.status(400).send({ mensaje: 'No existen registros' });
    } else {
      resp.status(200).send(resultado);
    }
  } catch (error) {
    resp.status(500).send({ error: 'Ocurrió un error: ' + error });
  }
});

// Agrupar por brandCode y sumar valores
app.get('/ValorPorMarca', async (req, resp) => {
  try {
    const resultado = await Product.findAll({
      attributes: [
        'brandCode',
        [sequelize.fn('SUM', sequelize.col('value')), 'valor_total']
      ],
      group: ['brandCode']
    });

    if (resultado.length === 0) {
      resp.status(400).send({ mensaje: 'No existen registros' });
    } else {
      resp.status(200).send(resultado);
    }
  } catch (error) {
    resp.status(500).send({ error: 'Ocurrió un error: ' + error });
  }
});

// Obtener valor promedio de productos con status ACTIVO
app.get('/ValorPromedioActivo', async (req, resp) => {
  try {
    const resultado = await Product.findAll({
      attributes: [
        [sequelize.fn('AVG', sequelize.col('value')), 'valor_promedio']
      ],
      where: { status: 'ACTIVE' }
    });

    if (!resultado || resultado.dataValues.valor_promedio === null) {
      resp.status(400).send({ mensaje: 'No existen productos activos con valor' });
    } else {
      resp.status(200).send(resultado);
    }
  } catch (error) {
    resp.status(500).send({ error: 'Ocurrió un error: ' + error });
  }
});
app.listen(puerto, () => {
  console.log('Aplicacion corriendo en el puerto ' + puerto);
});
