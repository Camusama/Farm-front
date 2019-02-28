import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
const service = axios.create({
  baseURL: 'http://localhost:7001/front', // api 的 base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true
})

service.interceptors.response.use(
  response => {
    const res = response.data
    console.log('axios', response)
    if (res.code !== 0) {
      Message({
        message: res.msg,
        type: 'error',
        duration: 5 * 1000
      })
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.msg,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
