import { request } from './request';

export function addBookkeeping(info) {
  return request({
    url: 'bookkeeping/add',
    // type: 'POST',
    method: 'post',
    header: {
      'Content-Type':'application/json'
    },
    data: {
      info,
    },
  })
}
