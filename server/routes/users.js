const router = require('koa-router')()
const User = require('./../models/userSchema')
const { success, fail } = require('./../utils/util')

router.prefix('/users')

router.post('/login', async (ctx) => {
  const { userName, userPwd } = ctx.request.body

  try {
    const res = await User.findOne({
      userName,
      userPwd,
    })

    console.log('res', res)

    if (res) {
      ctx.body = success(res)
    } else {
      ctx.body = fail('账号或密码不正确')
    }
  } catch (error) {
    ctx.body = fail(error.msg)
  }
})

module.exports = router
