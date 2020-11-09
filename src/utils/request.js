import axios from 'axios'
import { Message } from "element-ui";
// axios.BaseUrl="http://120.25.67.116:700"
const instance = axios.create({
  baseURL: "http://192.168.0.243:8081",
  timeout: 20000,
})
// 请求拦截器
instance.interceptors.request.use(
  config => {
    config.headers = {
      'Content-Type': 'application/json;charset=utf-8'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
// 响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    Message.error({ message: error.msg })
    return Promise.reject(error)
  }
)
/**
 * GET
 * @param url
 * @param config
 * @returns {Promise<unknown>}
 */
export function fetchGet (url, config) {
  return new Promise((resolve, reject) => {
    instance
      .get(url, config)
      .then(
        response => resolve(response.data),
        error => reject(error)
      )
      .catch(reject)
  })
}
/**
 * POST
 * @param url
 * @param params
 * @param config
 * @returns {Promise<unknown>}
 */
export function fetchPost (url, params, config) {
  return new Promise((resolve, reject) => {
    instance
      .post(url, params, config)
      .then(
        response => resolve(response.data),
        error => reject(error)
      )
      .catch(reject)
  })
}

export default instance