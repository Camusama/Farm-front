import request from '@/utils/request'

export function getClass() {
  return request({
    url: '/pest/class',
    method: 'get'
  })
}
export function getData(cropname) {
  return request({
    url: '/pest',
    method: 'post',
    data: {
      cropname
    }
  })
}
export function findOne(id) {
  return request({
    url: '/pest/' + id,
    method: 'post'
  })
}
