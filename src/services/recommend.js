import request from './axios'

export const getBannerDataApi = () => {
  return request({
    url: '/banner',
  })
}
export const getHotRecommendDataApi = (limit) => {
  return request({
    url: '/personalized',
    params: {
      limit,
    },
  })
}
export const getNewAlbumDataApi = (limit) => {
  return request({
    url: '/album/newest',
  })
}
export const getRankingDataApi = (id) => {
  return request({
    url: `/playlist/detail?id=${id}`,
  })
}