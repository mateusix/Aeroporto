import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import agendarVoo from './agendarVoo';
import aviao from './aviao';
import piloto from './piloto';
import aeromocos from './aeromocos';

const voo = sequelize.define(
  'dados',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    codigo: {
      type: DataTypes.INTEGER,
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
voo.belongsTo(agendarVoo, {
  as: 'agendarVoo',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_agendarVoo',
    name: 'idagendarVoo',
    allowNull: false,
  },
});

voo.belongsTo(aviao, {
  as: 'aviao',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_aviao',
    name: 'idaviao',
    allowNull: false,
  },
});

voo.belongsTo(piloto, {
  as: 'piloto',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_piloto',
    name: 'idpiloto',
    allowNull: false,
  },
});

voo.belongsTo(aeromocos, {
  as: 'aeromocos',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_aeromocos',
    name: 'idaeromocos',
    allowNull: false,
  },
});

export default voo;
