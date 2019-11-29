import Koa from 'koa'
import conf from './config'
import { resolve } from 'path'
import { Nuxt, Builder} from 'nuxt'
import R from 'ramda'

const r = (path) => resolve(__dirname, path)
const MIDDLEWARE = ['database', 'general', 'router']
const app = new Koa()

const useMiddleware = (app) => {
  // 中间件的个数不定，通过 Ramda 的特性，从右往左进行函数组合，右侧函数的返回结果总是左侧函数的输入参数
  // R.map(console.log)([1, 2, 3])
  // MIDDLEWARE 数组交给了 R.map
  // 分别拿到的单个数组中的值，我们可以通过 R.compose 再次进行组合。
  return R.map(
    R.compose(
      R.map((i) => i(app)),
      require,
      (i) => `${r('./middleware')}/${i}`
    )
  )
}

const start = async () => {
  let config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')
  const nuxt = await new Nuxt(config)

  if (conf.env !== 'production') {
    try {
      await new Builder(nuxt).build()
    } catch (e) {
      console.error(e)
      process.exit(1)
    }
  }

  await useMiddleware(app)(MIDDLEWARE)

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(conf.port, conf.host)
  console.log('Server listening on ' + conf.host + ':' + conf.port) // eslint-disable-line no-console
}

start()
