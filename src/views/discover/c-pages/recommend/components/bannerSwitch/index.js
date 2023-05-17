import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useShallowEqual from '@/hooks/useShallowEqual'
import { getBannerDataAction } from '../../store/actionCreators'
import { BannerSwitchBox, BannerSwitchCenter, BannerSwitchLeft, BannerSwitchRight } from './styled'
import { Carousel } from 'antd'
import { useState } from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { getIn } from 'immutable'

const BannerSwitch = memo(() => {
  const [bannerIndex, setBannerIndex] = useState(0)
  const carouselRef = useRef()
  const { bannerInfo } = useShallowEqual((state) => ({
    bannerInfo: getIn(state,['recommend','bannerInfo'])
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBannerDataAction())
  }, [dispatch])

  const beforeChange = useCallback((current, next) => {
    setBannerIndex(next)
  }, [setBannerIndex])

  const finImg =  bannerInfo[bannerIndex] && bannerInfo[bannerIndex].imageUrl + '?imageView&blur=40x20'
  
  const prev = ()=>{
    carouselRef.current.prev()
  }
  const next = ()=>{
    carouselRef.current.next()
  }
  return (
    <BannerSwitchBox bgImg={finImg}>
      <div className='wrap-v2 content'>
        <BannerSwitchLeft>
          <Carousel ref={carouselRef} autoplay effect="fade" beforeChange={beforeChange}>
            {
              bannerInfo.map((item, index) => {
                return (
                  <img key={item.imageUrl} className='img' alt={item.imageUrl} src={item.imageUrl + '?imageView&quality=89'}></img>
                )
              })
            }
          </Carousel>
        </BannerSwitchLeft>
        <BannerSwitchRight>
          <div className='download'></div>
          <div className='text'>PC 安卓 iPhone WP iPad Mac 六大客户端</div>
        </BannerSwitchRight>
        <BannerSwitchCenter>
          <div className='left_arrow' onClick={()=>prev()}></div>
          <div className='right_arrow' onClick={()=>next()}></div>
        </BannerSwitchCenter>
      </div>
    </BannerSwitchBox>
  )
})

export default BannerSwitch