const { DataTypes } = require('sequelize');
const sequelize = require('../conexion/database');

const Product = sequelize.define('product_v6', {
  partNumber: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  productType: {
    type: DataTypes.STRING
  },
  categorycode: {
    type: DataTypes.STRING
  },
  brandcode: {
    type: DataTypes.STRING
  },
  familycode: {
    type: DataTypes.STRING
  },
  linecode: {
    type: DataTypes.STRING
  },
  productSegmentcode: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING
  },
  value: {
    type: DataTypes.DECIMAL(10, 2)
  },
  valueCurrency: {
    type: DataTypes.STRING
  },
  defaultQuantityUnits: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING
  },
  plannerCode: {
    type: DataTypes.STRING
  },
  sourceLink: {
    type: DataTypes.STRING
  }
}, {
  tableName: 'product_v6',
  timestamps: false
});

module.exports = Product;
