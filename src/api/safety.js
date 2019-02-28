import request from '@/utils/request'

export function getClass() {
  return request({
    url: '/safety/class',
    method: 'get'
  })
}
export function getData() {
  return request({
    url: '/safety',
    method: 'post'
  })
}
export function findOne(id) {
  return request({
    url: '/safety/' + id,
    method: 'post'
  })
}
