const sequelize = require("../utils/db-util");
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // 属性
  username: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  mobile: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'user',
  freezeTableName: true
  // 参数
})

// 查找用户
module.exports = {
  getOneByUserNameAndPassword: ({ username, password }) => {
    return User.findOne({
      where: {
        username: username,
        password: password
      }
    });
  },
  getUserInfo: ({ mobile }) => {
    return User.findOne({
      where: {
        mobile: mobile
      }
    });
  },
  getArticleList: ({ pageSize, pageNo }) => {
    return Articles.findAndCountAll({
      limit: pageSize,
      offset: (pageNo - 1) * pageSize
    });
  },
  add: (params) => {
    // User.sync({ force: false }).then(() => {
      // 现在数据库中的 `users` 表对应于模型定义
      return User.create(params);
    // });
  },
  update: (params) => {
    return Articles.update(params, {
        where: {id: params.id}
    });
  },
  detele: (params) => {
    return Articles.create(params);
  },
};