import articleModel from '../models/articleModel'

export class ArticleController {
  // 获取文章列表
  async getList (ctx) {
    const formData = ctx.request.body
    let result = await articleModel.getArticleList(formData)
    return result
  }
  async getDetail (ctx) {
    const formData = ctx.request.body
    let result = await articleModel.detail(formData)
    return result
  }
}