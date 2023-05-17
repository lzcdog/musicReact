import { Slider, message } from 'antd'
import dayjs from 'dayjs'
import { getIn } from 'immutable'
import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getMusicUrl } from '../../utils/getMusicUrl'
import { changeMusicAction, setPlayStatusAction } from './store/actionCreators'
import { AppPlayerCenter, AppPlayerLeft, AppPlayerWrapper, Operator } from './styled'

const AppPlayer = memo(() => {
  const [isSuo, setIsSuo] = useState(true) //是否上锁
  const [isShow, setIsShow] = useState(true) //是否移入
  const [currentTime, setCurrentTime] = useState(0) //当然播放时间
  const [isPull, setIsPull] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [value, setValue] = useState(0) //歌曲播放时长
  const [messageApi, contextHolder] = message.useMessage()
  const key = 'updatable'
  //redux
  const { currentSong, playStatus, lrcArr } = useSelector(
    (state) => ({
      currentSong: getIn(state, ['player', 'currentSong']),
      playStatus: getIn(state, ['player', 'playStatus']),
      lrcArr: getIn(state, ['player', 'lrcArr']),
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()
  const audioRef = useRef() //音频ref

  // 设置 audio 的 src
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = getMusicUrl(currentSong.id)
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true)
        })
        .catch(() => {
          setIsPlaying(false)
        })
    }
  }, [currentSong])

  //鼠标移入
  const mouseEnter = useCallback(
    (e) => {
      if (!isSuo) {
        setIsShow(true)
      }
    },
    [isSuo],
  )
  //鼠标移出
  const mouseLeave = useCallback(
    (e) => {
      console.log(1212)
      if (!isSuo) {
        setIsShow(false)
      }
    },
    [isSuo],
  )
  //歌手名字
  const finSonger = useMemo(() => {
    console.log(11212)
    if (currentSong.ar) {
      return currentSong.ar
        .map((v) => {
          return v.name
        })
        .join('/')
    }
  }, [currentSong])
  //歌曲总时长
  const finTime = useMemo(() => {
    return dayjs(currentSong.dt).format('mm:ss')
  }, [currentSong])

  //歌曲播放时长
  const finCurrentTime = useMemo(() => {
    return dayjs(currentTime > currentSong.dt ? currentSong.dt : currentTime).format('mm:ss')
  }, [currentTime, currentSong.dt])

  //播放暂停事件
  const audioControl = useCallback(() => {
    // audioRef.current.src = getMusicUrl(2041198788)
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  //播放事件
  const audioTimeUpdate = (e) => {
    if (e && e.target.currentTime) {
      if (!isPull) {
        let time = e.target.currentTime * 1000
        setCurrentTime(time)
        setValue((time / currentSong.dt) * 100)
      }
      let currentIndex = -1
      let eTime = e.target.currentTime * 1000
      for (let i = 0; i < lrcArr.length; i++) {
        if (eTime > lrcArr[lrcArr.length - 1].time) {
          messageApi.open({
            key,
            content: lrcArr[lrcArr.length - 1].text,
            duration: 0,
          })
          break
        }
        if (eTime < lrcArr[i + 1 >= lrcArr.length ? i : i + 1].time) {
          currentIndex = i
          messageApi.open({
            key,
            content: lrcArr[currentIndex].text,
            duration: 0,
            style: {
              bottom: '80px',
              top: '0',
            },
          })
          break
        }
      }
    }
  }
  //播放结束
  const audioEnded = () => {
    if (playStatus === 2) {
      return audioRef.current.play()
    }
    dispatch(changeMusicAction(1))
  }
  //改变播放状态
  const changPlayStatus = () => {
    if (playStatus === 2) {
      dispatch(setPlayStatusAction(0))
    } else {
      dispatch(setPlayStatusAction(playStatus + 1))
    }
  }

  const changeMusic = (tag) => {
    dispatch(changeMusicAction(tag))
  }
  //
  const sliderChange = useCallback(
    (e) => {
      setValue(e)
      setCurrentTime((e / 100) * currentSong.dt)
      setIsPull(true)
    },
    [currentSong],
  )

  const onAfterChange = useCallback(
    (e) => {
      audioRef.current.currentTime = ((e / 100) * currentSong.dt) / 1000
      setCurrentTime((e / 100) * currentSong.dt)
      console.log((e / 100) * currentSong.dt, 'e/100*currentSong.dt')
      setIsPull(false)
      if (!isPlaying) {
        audioControl()
      }
    },
    [currentSong, isPlaying, audioControl],
  )

  return (
    <>
      {contextHolder}
      {currentSong.al ? (
        <AppPlayerWrapper
          isShow={isShow}
          isSuo={isSuo}
          onMouseEnter={(e) => mouseEnter(e)}
          onMouseLeave={(e) => mouseLeave(e)}>
          <div className="content wrap-v2">
            <AppPlayerLeft isPlaying={isPlaying}>
              <button className="prev" onClick={() => changeMusic(-1)}></button>
              <button className="play" onClick={() => audioControl()}></button>
              <button className="next" onClick={() => changeMusic(1)}></button>
            </AppPlayerLeft>

            <AppPlayerCenter>
              <div className="img_box">
                <img src={currentSong.al.picUrl + '?param=34y34'} alt=""></img>
                <div className="bg"></div>
              </div>
              <div className="detail_info">
                <div className="song_info">
                  <div className="song">{currentSong.name}</div>
                  <div className="singer">{finSonger}</div>
                  <div className="search"></div>
                </div>
                <div className="slider">
                  <Slider value={value} onChange={(e) => sliderChange(e)} onAfterChange={onAfterChange} />
                  <div className="time">
                    <span className="s_time">{finCurrentTime} </span>
                    <span className="e_time"> / {finTime}</span>
                  </div>
                </div>
              </div>
            </AppPlayerCenter>

            <Operator playStatus={playStatus}>
              <div className="left">
                <button className="sprite_playbar btn favor"></button>
                <button className="sprite_playbar btn share"></button>
              </div>
              <div className="right sprite_playbar">
                <button className="sprite_playbar btn volume"></button>
                <button className="sprite_playbar btn loop" onClick={() => changPlayStatus()}></button>
                <button className="sprite_playbar btn playlist"></button>
              </div>
            </Operator>
          </div>
          <div className="suo_box">
            <div className="suo" onClick={() => setIsSuo(!isSuo)}></div>
          </div>
          <audio ref={audioRef} onEnded={audioEnded} onTimeUpdate={audioTimeUpdate}></audio>
        </AppPlayerWrapper>
      ) : (
        ''
      )}
    </>
  )
})

export default AppPlayer
