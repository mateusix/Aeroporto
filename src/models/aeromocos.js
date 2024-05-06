import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import dados from './dados';

const aeromocos = sequelize.define(
  'aeromocos',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

aeromocos.belongsTo(dados, {
  as: 'dados',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_dados',
    name: 'idDados',
    allowNull: false,
  },
});

export default aeromocos;
