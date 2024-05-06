import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const enderecos = sequelize.define(
  'enderecos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cep: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    numero: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    complemento: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    pais: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

);

export default enderecos;
