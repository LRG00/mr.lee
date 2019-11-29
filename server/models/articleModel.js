const sequelize = require("../utils/db-util");
let Sequelize = require("sequelize");

// 创建 Model
let Articles = sequelize.define(
  "l_article",
  {
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    slug: { type: Sequelize.STRING },
    tagList: { type: Sequelize.STRING },
    author: { type: Sequelize.STRING },
    comments: { type: Sequelize.STRING },
    body: { type: Sequelize.TEXT('long') },
    id: { type: Sequelize.INTEGER, primaryKey: true },
    favoriteCount: { type: Sequelize.INTEGER },
  },
  {
    timestamps: true
  }
);

// 查找用户
module.exports = {
  getArticleList: ({ pageSize, pageNo }) => {
    return Articles.findAndCountAll({
      limit: pageSize,
      offset: (pageNo - 1) * pageSize
    });
  },
  add: (params) => {
    return Articles.create(params);
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

