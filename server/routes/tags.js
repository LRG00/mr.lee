import { controller, get, post, put, log, convert, required } from '../decorator/router'
import { TagController } from '../controller/tagController'

const tagController = new TagController()

@controller('/api')
export class indexController {
  @post('tag/list')
  async getTagList (ctx, next) {
    const res = await tagController.getList(ctx)
    ctx.body = {
      data: res
    }
  }
}
