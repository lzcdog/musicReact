import { Map, set } from 'immutable'
import { SETBANNERDATA, SETHOTRANK, SETHOTRECOMMEND, SETMINERANK, SETNEWALBUM, SETNEWRANK } from './constants'

const initialState = Map({
  bannerInfo: [],
  hotRecommendInfo: [],
  newAlbumInfo: [],
  hotRankInfo: [],
  newRankInfo: [],
  mineRankInfo: [],
})
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETBANNERDATA:
      return set(state, 'bannerInfo', action.data)
    case SETHOTRECOMMEND:
      return set(state, 'hotRecommendInfo', action.data)
    case SETNEWALBUM:
      return set(state, 'newAlbumInfo', action.data)
    case SETHOTRANK:
      return set(state, 'hotRankInfo', action.data)
    case SETNEWRANK:
      return set(state, 'newRankInfo', action.data)
    case SETMINERANK:
      return set(state, 'mineRankInfo', action.data)
    default:
      return state
  }
}
export default reducer
