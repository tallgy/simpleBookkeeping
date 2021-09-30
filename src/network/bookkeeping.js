import { request } from './request';

export function addBookkeeping(info) {
  return request({
    url: '/bookkeeping/add',
    type: 'post',
    params: {
      info,
    }
  })
}
