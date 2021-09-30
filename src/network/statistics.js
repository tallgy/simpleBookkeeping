import { request } from './request';

export function getStatisticsInfo() {
  return request({
    url: '/statistics/getInfo'
  });
}
