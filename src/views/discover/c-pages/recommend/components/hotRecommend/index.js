import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import MenuHeader from '../../../../../../components/menuHeader'
import useShallowEqual from '../../../../../../hooks/useShallowEqual'
import { getCount } from '../../../../../../utils/getCount'
import { getHotRecommendDataAction } from '../../store/actionCreators'
import { HotRecommendWrapper } from './styled'

const HotRecommend = memo(() => {
  let { hotRecommend } = useShallowEqual((state) => ({
    hotRecommend: state.getIn(['recommend', 'hotRecommendInfo']),
  }))
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getHotRecommendDataAction(8))
  }, [dispatch])
  return (
    <HotRecommendWrapper>
      <MenuHeader title="热门推荐" types={['华语','流行','摇滚','民谣','电子']}></MenuHeader>
      <div className="hot_recommend_list">
        {hotRecommend.map((item, index) => {
          return (
            <div className="hot_recommend_item" key={item.id}>
              <div className="img_box">
                <img src={item.picUrl} alt={item.name} />
                <div className="detail_info">
                  <div className="listen_icon"></div>
                  <div className="play_num">{getCount(item.playCount)}</div>
                  <div className="play_icon"></div>
                </div>
              </div>
              <div className="hot_recommend_item_name">{item.name}</div>
            </div>
          )
        })}
      </div>
    </HotRecommendWrapper>
  )
})

export default HotRecommend
