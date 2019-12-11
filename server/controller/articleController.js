import articleModel from '../models/articleModel'

export class ArticleController {
  // 获取文章列表
  async getList (ctx) {
    const formData = ctx.request.body
    console.log(formData, 'formData')
    let result = await articleModel.getArticleList(formData)
    console.log(result, 'kkii')
    return result
  }
}