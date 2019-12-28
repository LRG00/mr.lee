import { controller, get, post, put, log, convert, required } from '../decorator/router'
import { MusicController } from '../controller/musicController'

const musicController = new MusicController()

@controller('/api')
export class indexController {
  @post('music/list')
  async getmusicList (ctx, next) {
    const res = await musicController.getList(ctx)
    ctx.body = {
      data: res
    }
  }
  @post('music/save')
  async saveMusic (ctx, next) {
    const res = await musicController.save(ctx)
    ctx.body = {
      data: res
    }
  }
}
