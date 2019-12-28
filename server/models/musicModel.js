const sequelize = require("../utils/db-util");
const Sequelize = require('sequelize');
const Model = Sequelize.Model;
class  Music extends Model {}
Music.init({
  // 属性
  name: {
    type: Sequelize.STRING
  },
  author: {
    type: Sequelize.STRING
  },
  photo: {
    type: Sequelize.STRING
  },
  mimetype: {
    type: Sequelize.STRING
  },
  path: {
    type: Sequelize.STRING
  },
  size: {
    type: Sequelize.STRING
  },
}, {
  sequelize,
  modelName: 'music',
  freezeTableName: true
  // 参数
})

// 查找用户
module.exports = {
  getMusicList: () => {
    return  Music.findAll({});
  },
  save: (params) => {
    console.log('ccccccccccccccccccccccccccccc')
    // return Music.create({
    //   name: 'Jo1111hn1',
    //   author: '11',
    //   photo: '22',
    //   mimetype: '33',
    //   path: '44',
    //   size: 2120,
    // });
  },
};