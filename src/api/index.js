import request from '@/utils/request'

export const fetchUserInfo = () => {
  return request({
    url: '/user/info',
    method: 'get',

  })
}
