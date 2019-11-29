import { controller, get, post, put, log, convert, required } from '../decorator/router'
import { ArticleService } from '../models/article.service'

const articleService = new ArticleService()

@controller('/api')
export class indexController {
  @get('xxx')
  async characters (ctx, next) {
    const res = await articleService.get()
    ctx.body = {
      xxx: res
    }
  }
}
