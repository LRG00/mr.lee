const sequelize = require("../utils/db-util");
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class Tag extends Model {}
Tag.init({
  // 属性
  tag: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'tag',
  freezeTableName: true
  // 参数
})

// 查找用户
module.exports = {
  getTagList: () => {
    return Tag.findAll({});
  }
};