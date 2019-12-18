const sequelize = require("../utils/db-util");
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class Article extends Model {}
Article.init({
  // 属性
  slug: {
    type: Sequelize.STRING
  },
  title: {
    type: Sequelize.STRING
  },
  description: {
    type: Sequelize.STRING
  },
  body: {
    type: Sequelize.TEXT('long')
  },
  tagList: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  comments: {
    type: Sequelize.TEXT
  },
  favoriteCount: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'article',
  freezeTableName: true
  // 参数
})

// 查找用户
module.exports = {
  getArticleList: ({ pageSize, pageNo }) => {
    console.log(pageSize, pageNo, 'mmm')
    return Article.findAll({});
  },
  detail: ({id}) => {
    console.log(id, 'jjjjjjjjjjjjjjjj')
    return Article.findOne({
      where: {
        id
      }
    });
  },
  add: () => {
    // User.sync({ force: false }).then(() => {
      // 现在数据库中的 `users` 表对应于模型定义
      return Article.create({
        firstName: 'John1',
        lastName: 'Hancock1201011'
      });
    // });
  },
  update: (params) => {
    return Article.update(params, {
        where: {article_id: params.article_id}
    });
  },
  detele: (params) => {
    return Article.create(params);
  },
};