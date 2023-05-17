import { getIn } from 'immutable'
import { getLyricData, getSongDetailData } from '../../../services/player'
import { SETCURRENTSONGINDEX, SETLRCARR, SETPLAYSTATUS, SETSONGDETAILDATA, SETSONGLISTDATA } from './constants'

export const setSongDetailDataAction = (data) => {
  return { type: SETSONGDETAILDATA, data }
}
export const setSongListAction = (songList) => {
  console.log(songList, 'songList')
  return { type: SETSONGLISTDATA, songList }
}
export const setCurrentSongIndexAction = (index) => {
  return { type: SETCURRENTSONGINDEX, index }
}
export const setPlayStatusAction = (index) => {
  return { type: SETPLAYSTATUS, index }
}
export const setLyricDataAction = (lrcArr) => {
  return { type: SETLRCARR, lrcArr }
}
export const getSongDetailDataAction = (ids) => {
  return (dispatch, getState) => {
    let songList = getIn(getState(), ['player', 'songList'])
    let index = songList.findIndex((v) => v.id === ids)
    getSongDetailData(ids).then((res) => {
      if (index === -1) {
        let newArr = [...songList, res.songs[0]]
        dispatch(setSongListAction(newArr))
        dispatch(setCurrentSongIndexAction(newArr.length - 1))
      } else {
        dispatch(setCurrentSongIndexAction(index))
      }
      dispatch(getLyricDataAction(ids))
      dispatch(setSongDetailDataAction(res.songs[0]))
    })
  }
}
export const changeMusicAction = (tag) => {
  return (dispatch, getState) => {
    let state = getState()
    let currentSongIndex = state.getIn(['player', 'currentSongIndex'])
    let songList = state.getIn(['player', 'songList'])
    let playStatus = state.getIn(['player', 'playStatus'])
    switch (playStatus) {
      case 0: //顺序
        let index = (currentSongIndex += tag)
        if (index > songList.length - 1) {
          index = 0
        }
        if (index < 0) {
          index = songList.length - 1
        }
        dispatch(setCurrentSongIndexAction(index))
        dispatch(setSongDetailDataAction(songList[index]))
        break
      case 1: //随机
        let randomIndex = Math.floor(Math.random() * songList.length)
        while (randomIndex === currentSongIndex) {
          randomIndex = Math.floor(Math.random() * songList.length)
        }
        console.log(randomIndex)
        dispatch(setCurrentSongIndexAction(randomIndex))
        dispatch(setSongDetailDataAction(songList[randomIndex]))
        break
      default:
        break
    }
  }
}
export const getLyricDataAction = (id) => {
  return (dispatch) => {
    getLyricData(id).then((res) => {
      let strArr = res.lrc.lyric.split('\n')
      let reg = /\[(\d{2}):(\d{2}).(\d{2,3})]/gi
      let lrcArr = []
      for (let line of strArr) {
        let timeArr = reg.exec(line)
        if(timeArr){
          let one = timeArr[1] * 60 * 1000
          let two = timeArr[2] * 1000
          let three = Number(timeArr[3])
          let finTime = one+two+three
          let text = line.replace(reg,'')
          if(text){
            lrcArr.push({time:finTime,text})
          }
        }
      }
      dispatch(setLyricDataAction(lrcArr))
    })
  }
}