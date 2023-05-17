import { Map, set } from 'immutable'
import { SETCURRENTSONGINDEX, SETLRCARR, SETPLAYSTATUS, SETSONGDETAILDATA, SETSONGLISTDATA } from './constants'

const initialState = Map({
  currentSong: {},
  songList: [],
  currentSongIndex: 0,
  playStatus: 0,
  lrcArr: [],
})
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SETSONGDETAILDATA:
      return set(state, 'currentSong', action.data)
    case SETSONGLISTDATA:
      return set(state, 'songList', action.songList)
    case SETCURRENTSONGINDEX:
      return set(state, 'currentSongIndex', action.index)
    case SETPLAYSTATUS:
      return set(state, 'playStatus', action.index)
    case SETLRCARR:
      return set(state, 'lrcArr', action.lrcArr)
    default:
      return state
  }
}
export default reducer
