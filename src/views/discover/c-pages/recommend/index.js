import React, { memo } from 'react'
import BannerSwitch from './components/bannerSwitch/index'
import { RecommendWrapper, RecommendWrapperLeft, RecommendWrapperRight } from './styled'
import HotRecommend from './components/hotRecommend'
import NewAlbum from './components/newAlbum'
import Ranking from './components/ranking'

const Recommend = memo(() => {

  return (
    <RecommendWrapper>
      <BannerSwitch></BannerSwitch>
      <div className='content1 wrap-v2'>
        <RecommendWrapperLeft>
          <HotRecommend></HotRecommend>
          <NewAlbum></NewAlbum>
          <Ranking></Ranking>
        </RecommendWrapperLeft>
        <RecommendWrapperRight></RecommendWrapperRight>
      </div>
    </RecommendWrapper>
  )
})

export default Recommend