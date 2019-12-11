import User from '../models/userModel'

export class ArticleService { 
  async get () {
    const resultData = await User.add();
    console.log(resultData, 'ccccccccccccccccccccccccc')
  }
}
