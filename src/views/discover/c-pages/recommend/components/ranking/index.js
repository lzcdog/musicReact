import React, { memo, useEffect } from 'react'
import MenuHeader from '../../../../../../components/menuHeader'
import { RankContent, RankWrapper } from './styled'
import RankList from '../../../../../../components/rankList'
import { useDispatch } from 'react-redux'
import { getRankingDataAction } from '../../store/actionCreators'
import { SETHOTRANK, SETMINERANK, SETNEWRANK } from '../../store/constants'
import useShallowEqual from '../../../../../../hooks/useShallowEqual'
import { getIn } from 'immutable'

const Ranking = memo(() => {
  let { hotRankInfo, newRankInfo, mineRankInfo } = useShallowEqual((state) => ({
    hotRankInfo: getIn(state, ['recommend', 'hotRankInfo']),
    newRankInfo: getIn(state, ['recommend', 'newRankInfo']),
    mineRankInfo: getIn(state, ['recommend', 'mineRankInfo']),
  }))
  let dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRankingDataAction(SETHOTRANK))
    dispatch(getRankingDataAction(SETMINERANK))
    dispatch(getRankingDataAction(SETNEWRANK))
  }, [dispatch])
  return (
    <RankWrapper>
      <MenuHeader title="榜单"></MenuHeader>
      <RankContent>
        <RankList type={0} listData={hotRankInfo}></RankList>
        <RankList type={1} listData={newRankInfo}></RankList>
        <RankList type={2} listData={mineRankInfo}></RankList>
      </RankContent>
    </RankWrapper>
  )
})

export default Ranking
