import { getIn } from 'immutable'
import React, { memo, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import MenuHeader from '../../../../../../components/menuHeader'
import useShallowEqual from '../../../../../../hooks/useShallowEqual'
import { getNewAlbumDataAction } from '../../store/actionCreators'
import { NewAlbumContent, NewAlbumWrapper } from './styled'
import { Carousel } from 'antd'

const NewAlbum = memo(() => {
  let carouselRef = useRef()
  let dispatch = useDispatch()
  let { newAlbumInfo } = useShallowEqual((state) => ({
    newAlbumInfo: getIn(state, ['recommend', 'newAlbumInfo']),
  }))
  useEffect(() => {
    dispatch(getNewAlbumDataAction(10))
  }, [dispatch])
  const prevClick = ()=>{
    carouselRef.current.prev()
  }
  const nextClick = ()=>{
    carouselRef.current.next()
  }
  return (
    <NewAlbumWrapper>
      <MenuHeader title="新碟上架"></MenuHeader>
      <NewAlbumContent>
        <div className="left_arrow" onClick={()=>prevClick()}></div>
        <div className="carousel">
          <Carousel  dots={false} ref={carouselRef}>
            {[0, 1].map((item) => {
              return (
                <div className="album_list" key={item}>
                  {newAlbumInfo.slice(item * 5, (item + 1) * 5).map((item1) => {
                    return (
                      <div className="album_item" key={item1.id}>
                        <div className="img_box">
                          <img src={item1.picUrl} alt={item1.name}></img>
                        </div>
                        <div className='song_name'>{item1.name}</div>
                        <div className='artist'>{item1.artist.name}</div>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <div className="right_arrow"  onClick={()=>nextClick()}></div>
      </NewAlbumContent>
    </NewAlbumWrapper>
  )
})

export default NewAlbum
