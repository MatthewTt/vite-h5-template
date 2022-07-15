import axios from 'axios'
import { Toast } from 'vant'

const TIMEOUT = 5000
const axiosInstance = axios.create({
  baseURL: process.env.VITE_BASE_URL,
  timeout: TIMEOUT
})

axiosInstance.interceptors.request.use(
  (config) => {
    // 加载动画
    Toast.loading({
      message: '加载中...',
      forbidClick: true
    })

    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    // 关闭加载动画
    Toast.clear()
    const res = response.data
    if (res.code !== 0) {
      if (res.code === 401) {
        // 登录过期提示
        return '登录过期'
      }
    } else {
      return res
    }
  },
  (error) => {
    Toast.clear()
    // eslint-disable-next-line no-empty
    if (error && error.response) {
    } else {
      if (error.message === 'Network Error') {
        error.message = '网络异常，请检查后重试！'
      }
      error.message = '网络开小差了，请稍后重试！'
    }
    Toast(error.message)
    return Promise.reject(error)
  }
)

export default axiosInstance
