// const router = require('koa-router')();
// router.prefix('/upload')
// router.post('/', async (ctx) => {
//             // console.log(ctx.uploadpath);
//             ctx.body = JSON.stringify(ctx.request.files);
           
//            });

// module.exports = router;

import { controller, get, post, put, log, convert, required } from '../decorator/router'
const { uploadFile } = require('../utils/upload1')
import { resolve, join } from 'path'
// import { MusicController } from '../controller/musicController'
// const musicController = new MusicController()

@controller('/upload')
export class indexController {
  @post('file')
  async upload (ctx, next) {
    let result = { success: false }
    let serverFilePath = join( __dirname, '../upload-files' )

    // 上传文件事件
    result = await uploadFile( ctx, { 
      fileType: 'lrg-file',
      path: serverFilePath
    })
    const params = {
      name: 'Joh1n1',
      author: '11',
      photo: '22',
      mimetype: '33',
      path: '44',
      size: 2120,
    }
    // const res = await musicController.save(params)
    ctx.body = result
  }
}

