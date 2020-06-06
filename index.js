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
  User.destroy({
    where: {
      id: 1
    }
  })
  const jane = await User.findAll()
  console.log(JSON.stringify(jane));
  sequelize.close()
})();


// (async () => {
//   const jane = await User.findAll()
//   console.log(JSON.stringify(jane));
//   sequelize.close()
// })();

// (async () => {
//   await sequelize.sync();
//   const jane = await User.create({
//     username: 'janedoe',
//     birthday: new Date(1980, 6, 20)
//   });
//   console.log(jane.toJSON());
// })();