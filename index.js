const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('zch', 'root', '123456', {
  dialect: 'mysql',
});

class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  });
  console.log(jane.toJSON());
})();