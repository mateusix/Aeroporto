import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';

const aviao = sequelize.define(
  'aviao',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    modelo: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    identificacao: {
      type: DataTypes.STRING(100),
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

export default aviao;
