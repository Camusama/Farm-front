import request from '@/utils/request'

export function getClass() {
  return request({
    url: '/seed/class',
    method: 'get'
  })
}
export function getData(cropname) {
  return request({
    url: '/seed',
    method: 'post',
    data: {
      cropname
    }
  })
}
export function findOne(id) {
  return request({
    url: '/seed/' + id,
    method: 'post'
  })
}
