import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../sequelize/sequelize';

interface UserAttributes {
  id: number;
  fullName: string;
  nationalCode: string;
  personnelCode: string;
  phoneNumber: string;
  password: string;
  username: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface UserCreationAttributes
  extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nationalCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    personnelCode: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    createdAt: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false, 
    
  }
);

sequelize
  .sync({ force: false })
  .then(() => {
    console.log('Database & tables created!');
  })
  .catch((err) => {
    console.error('Error syncing the database:', err);
  });

export default User;
