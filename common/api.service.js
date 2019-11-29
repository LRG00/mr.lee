/*
 * @Author: liruigang
 * @Date: 2019-10-21 20:05:03
 * @LastEditors: liruigang
 * @LastEditTime: 2019-10-21 21:26:13
 * @UI:
 */
import axios from 'axios'
// import JwtService from '@/common/jwt.service'
import { API_URL } from '@/common/config'

const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL
  },

  // setHeader() {
  //   axios.defaults.headers.common.Authorization = `Token ${JwtService.getToken()}`
  // },

  query(resource, params) {
    return axios.get(resource, params).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  get(resource, slug = '') {
    console.log(resource,'resource')
    return axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post(resource, params) {
    return axios.post(`${resource}`, params)
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params)
  },

  put(resource, params) {
    return axios.put(`${resource}`, params)
  },

  delete(resource) {
    return axios.delete(resource).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  }
}

export default ApiService

export const TagsService = {
  get() {
    return ApiService.get('tags')
  }
}

export const MusicService = {
  get() {
    return ApiService.get('music')
  }
}

export const EditCodeService = {
  get() {
    console.log('开始执行editcode')
    return ApiService.get('editcode')
  }
}

export const ArticlesService = {
  query(type, params) {
    return ApiService.query('api/xxx', {
      params
    })
  },
  get(slug) {
    return ApiService.get('articles', slug)
  },
  create(params) {
    return ApiService.post('articles', { article: params })
  },
  update(slug, params) {
    return ApiService.update('articles', slug, { article: params })
  },
  destroy(slug) {
    return ApiService.delete(`articles/${slug}`)
  }
}

export const CommentsService = {
  get(slug) {
    if (typeof slug !== 'string') {
      throw new TypeError(
        '[RWV] CommentsService.get() article slug required to fetch comments'
      )
    }
    return ApiService.get('articles', `${slug}/comments`)
  },

  post(slug, payload, author) {
    return ApiService.post(`articles/${slug}/comments`, {
      comment: { body: payload, author }
    })
  },

  destroy(slug, commentId) {
    return ApiService.delete(`articles/${slug}/comments/${commentId}`)
  }
}

export const FavoriteService = {
  add(slug) {
    return ApiService.post(`articles/${slug}/favorite`)
  },
  remove(slug) {
    return ApiService.delete(`articles/${slug}/favorite`)
  }
}
