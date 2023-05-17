import {
  getBannerDataApi,
  getHotRecommendDataApi,
  getNewAlbumDataApi,
  getRankingDataApi,
} from '../../../../../services/recommend'
import { SETBANNERDATA, SETHOTRANK, SETHOTRECOMMEND, SETMINERANK, SETNEWALBUM, SETNEWRANK } from './constants'

//存储轮播图
export const setBannerDataAction = (action) => {
  return { type: SETBANNERDATA, data: action.data }
}
//存储热门推荐
export const setHotRecommendDataAction = (action) => {
  return { type: SETHOTRECOMMEND, data: action.data }
}
//存储新碟上架
export const setNewAlbumDataAction = (action) => {
  return { type: SETNEWALBUM, data: action.data }
}

//存储榜单数据
export const setRankingDataAction = (action) => {
  return { type: action.type, data: action.data }
}

//获取轮播图
export const getBannerDataAction = () => {
  return async (dispatch, state) => {
    let { banners } = await getBannerDataApi()
    return dispatch(setBannerDataAction({ data: banners }))
  }
}

//获取热门推荐
export const getHotRecommendDataAction = (limit) => {
  return async (dispatch, state) => {
    let { result } = await getHotRecommendDataApi(limit)
    return dispatch(setHotRecommendDataAction({ data: result }))
  }
}

//获取新碟上架
export const getNewAlbumDataAction = (limit) => {
  return async (dispatch, state) => {
    let { albums } = await getNewAlbumDataApi(limit)
    return dispatch(setNewAlbumDataAction({ data: albums }))
  }
}

//获取榜单数据
export const getRankingDataAction = (type,limit=10) => {
  let id = ''
  switch (type) {
    case SETHOTRANK:
      id = '19723756'
      break
    case SETMINERANK:
      id = '3779629'
      break
    case SETNEWRANK:
      id = '2884035'
      break
    default:
      break
  }
  return async (dispatch, state) => {
    let { playlist } = await getRankingDataApi(id)
    return dispatch(setRankingDataAction({ data: playlist.tracks.slice(0,limit),type }))
  }
}
