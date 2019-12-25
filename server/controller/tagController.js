import tagModel from '../models/tagModel'

export class TagController {
  // 获取文章列表
  async getList (ctx) {
    const formData = ctx.request.body
    let result = await tagModel.getTagList(formData)
    return result
  }
}