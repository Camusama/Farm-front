import request from '@/utils/request'

export function getClass() {
  return request({
    url: '/grow/class',
    method: 'get'
  })
}
export function getData(cropname) {
  return request({
    url: '/grow',
    method: 'post',
    data: {
      cropname
    }
  })
}
export function findOne(id) {
  return request({
    url: '/grow/' + id,
    method: 'post'
  })
}
