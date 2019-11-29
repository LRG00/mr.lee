import User from '../models/articleModel'

export class ArticleService {
  async get () {
    const resultData = await User.getArticleList({pageSize: 1, pageNo: 10});
    return resultData.rows
  }
}
