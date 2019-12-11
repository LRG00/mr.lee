const sequelize = require("../utils/db-util");
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class User extends Model {}
User.init({
  // 属性
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
    // allowNull 默认为 true
  }
}, {
  sequelize,
  modelName: 'user'
  // 参数
})

// 查找用户
module.exports = {
  getArticleList: ({ pageSize, pageNo }) => {
    return Articles.findAndCountAll({
      limit: pageSize,
      offset: (pageNo - 1) * pageSize
    });
  },
  add: () => {
    // User.sync({ force: false }).then(() => {
      // 现在数据库中的 `users` 表对应于模型定义
      return User.create({
        firstName: 'John1',
        lastName: 'Hancock1201011'
      });
    // });
  },
  update: (params) => {
    return Articles.update(params, {
        where: {article_id: params.article_id}
    });
  },
  detele: (params) => {
    return Articles.create(params);
  },
};