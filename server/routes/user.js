import { controller, get, post, put, log, convert, required } from '../decorator/router'
import { ArticleService } from '../models/article.service'
import { UserController } from '../controller/userController'

const articleService = new ArticleService()
const userController = new UserController()

@controller('/api')
export class indexController {
  @get('xxx')
  async characters (ctx, next) {
    const res = await articleService.get()
    ctx.body = {
      xxx: 'res'
    }
  }
  @post('login')
  async login (ctx, next) {
    const res = await userController.signIn(ctx)
    ctx.body = {
      data: res
    }
  }
  @post('register')
  async register (ctx, next) {
    const res = await userController.create(ctx)
    console.log(res)
  }
  @post('userInfo')
  async getUserInfo (ctx, next) {
    const res = await userController.getUserInfo(ctx)
    console.log(res)
  }
}
