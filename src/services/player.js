import request from './axios'

export const getSongDetailData = (ids) => {
  return request({
    url: '/song/detail',
    params: {
      ids,
    },
  })
}
export const getLyricData = (id) => {
  return request({
    url: '/lyric',
    params: {
      id,
    },
  })
}
