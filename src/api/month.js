import request from '@/utils/request'

export function getClass() {
  return request({
    url: '/month/class',
    method: 'get'
  })
}
export function getData(cropname) {
  return request({
    url: '/month',
    method: 'post',
    data: {
      cropname
    }
  })
}
export function findOne(id) {
  return request({
    url: '/month/' + id,
    method: 'post'
  })
}
