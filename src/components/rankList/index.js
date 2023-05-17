import React, { memo, useMemo } from 'react'
import { No, RankListWrapper } from './styled'
import { useDispatch } from 'react-redux'
import { getSongDetailDataAction } from '../../views/app-player/store/actionCreators'

const RankList = memo((prop) => {
  let dispatch = useDispatch()
  const finImg = useMemo(() => {
    let imgs = [
      'http://p4.music.126.net/pcYHpMkdC69VVvWiynNklA==/109951166952713766.jpg',
      'http://p4.music.126.net/wVmyNS6b_0Nn-y6AX8UbpQ==/109951166952686384.jpg',
      'http://p4.music.126.net/iFZ_nw2V86IFk90dc50kdQ==/109951166961388699.jpg',
    ]
    return imgs[prop.type] + '?param=100y100'
  }, [prop.type])

  const finText = useMemo(() => {
    let text = ['飙升榜', '新歌榜', '原创榜']
    return text[prop.type]
  }, [prop.type])

  const playClick = (item)=>{
    dispatch(getSongDetailDataAction(item.id))
  }
  return (
    <RankListWrapper type={prop.type}>
      <div className="detail">
        <div className="img_box">
          <img src={finImg} alt={finText}></img>
          <div className="glass"></div>
        </div>
        <div className="name_box">
          <div className="name">{finText}</div>
          <div className="icon_box">
            <div className="icon1"></div>
            <div className="icon2"></div>
          </div>
        </div>
      </div>
      <div className="item_box">
        {prop.listData.map((item, index) => {
          return (
            <div className="item" key={item.name} onClick={()=>playClick(item)}>
              <No index={index}>{index + 1}</No>
              <div className="name_box1">
                <div className="song">{item.name}</div>
                <div className="icon_box1">
                  <div className="icon3"></div>
                  <div className="icon3"></div>
                  <div className="icon3"></div>
                </div>
              </div>
            </div>
          )
        })}
        <div className="item">
          <div className="all">查看更多&gt;</div>
        </div>
      </div>
    </RankListWrapper>
  )
})

export default RankList
