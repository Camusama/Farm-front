import request from '@/utils/request'

export function getClass() {
  return request({
    url: '/biocide/class',
    method: 'get'
  })
}
export function getData() {
  return request({
    url: '/biocide',
    method: 'post'
  })
}
export function findOne(id) {
  return request({
    url: '/biocide/' + id,
    method: 'post'
  })
}
