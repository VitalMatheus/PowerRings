import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/database';

class Ring extends Model {
  public id!: number;
  public nome!: string;
  public poder!: string;
  public portador!: string;
  public forjadoPor!: string;
  public imagem!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Ring.init(
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    poder: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    portador: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    forjadoPor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Ring',
    tableName: 'rings',
  }
);

export default Ring;