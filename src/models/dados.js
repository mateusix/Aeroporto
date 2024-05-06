import { DataTypes } from 'sequelize';
import { sequelize } from '../config/config';
import enderecos from './enderecos';

const dados = sequelize.define(
  'dados',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING(14),
      allowNull: false,
    },
    telefone: {
      type: DataTypes.STRING(14),
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },

);
dados.belongsTo(enderecos, {
  as: 'enderecos',
  onDelete: 'no action',
  onUpdate: 'no action',
  foreignKey: {
    field: 'id_enderecos',
    name: 'idEnderecos',
    allowNull: false,
  },
});

export default dados;
