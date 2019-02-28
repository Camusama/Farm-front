import request from '@/utils/request'

export function getClass() {
  return request({
    url: '/fertilizer/class',
    method: 'get'
  })
}
export function getData() {
  return request({
    url: '/fertilizer',
    method: 'post'
  })
}
export function findOne(id) {
  return request({
    url: '/fertilizer/' + id,
    method: 'post'
  })
}
