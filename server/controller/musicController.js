import musicModel from '../models/musicModel'

export class MusicController {
  // 获取音乐列表
  async getList (ctx) {
    const formData = ctx.request.body
    let result = await musicModel.getMusicList(formData)
    return result
  }
  // 新增
  async save (ctx) {
    const formData = ctx.request.body
    let result = await musicModel.save(formData)
    return result
  }
}