import User from '../models/userModel'
import jwt from 'jsonwebtoken'
export class UserController {
  // 注册
  async create(ctx) {
    const req = ctx.request.body
    if (req.mobile && req.password) {
      try {
        const query = await User.getUserInfo(req)
        if (query) {
          ctx.response.status = 200
          ctx.body = {
            code: -1,
            desc: '用户已存在'
          }
        } else {
          const param = {
            password: req.password,
            mobile: req.mobile,
            username: req.username
          }
          const data = await User.add(param)
          ctx.response.status = 200
          ctx.body = {
            code: 0,
            desc: '用户注册成功',
            userInfo: {
              mobile: req.mobile,
              username: req.username
            }
          }
        }
      } catch (error) {
        ctx.response.status = 416
        ctx.body = {
          code: -1,
          desc: '参数不齐全'
        }
      }
    }
  }
  // 登录
  async signIn(ctx) {
    const formData = ctx.request.body
    console.log(formData, 'vvv')
    let result = await User.getOneByUserNameAndPassword(formData)
    console.log(result, 'result')
    if (!formData.password || !formData.username) {
      return (ctx.body = {
        code: '000002',
        data: null,
        msg: '参数不合法'
      })
    }
    if (result !== null) {
      const token = jwt.sign(
        {
          name: result.name,
          id: result.id
        },
        'my_token',
        { expiresIn: '1h' }
      )
      return (ctx.body = {
        code: '000001',
        data: token,
        msg: '登录成功'
      })
    } else {
      return (ctx.body = {
        code: '000002',
        data: null,
        msg: '用户名或密码错误'
      })
    }
  }
  //获取用户信息(除密码外)
  async getUserInfo(ctx) {
    const req = ctx.request.body
    if (!req.mobile) {
      return (ctx.body = {
        code: '-1',
        desc: '参数错误'
      })
    } else {
      let data = await User.getUserInfo(req)
      if (req.mobile == data.mobile) {
        const info = {
          createdAt: data.createdAt,
          updatedAt: data.updatedAt,
          mobile: data.mobile,
          username: data.username
        }
        return (ctx.body = {
          code: '0',
          userInfo: info,
          desc: '获取用户信息成功'
        })
      }
    }
  }
}
