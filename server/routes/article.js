import { controller, get, post, put, log, convert, required } from '../decorator/router'
import { ArticleController } from '../controller/articleController'

const articleController = new ArticleController()

@controller('/api')
export class indexController {
  @post('article/list')
  async characters (ctx, next) {
    const res = await articleController.getList(ctx)
    ctx.body = {
      data: res
    }
  }
  @post('article/one')
  async xxx (ctx, next) {
    const res = await articleController.getDetail(ctx)
    console.log(res, 'cccccccccccccccc')
    ctx.body = {
      data: res
    }
  }
}
