import request from '@/utils/request'

export function getClass() {
  return request({
    url: '/weather/class',
    method: 'get'
  })
}
export function getData() {
  return request({
    url: '/weather',
    method: 'post'
  })
}
export function findOne(id) {
  return request({
    url: '/weather/' + id,
    method: 'post'
  })
}
