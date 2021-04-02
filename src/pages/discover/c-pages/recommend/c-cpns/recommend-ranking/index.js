import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';

import XHThemeHeaderRMC from "@/components/theme-header-rcm";
import XHTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

export default memo(function XHRecommendRanking() {

  const dispatch = useDispatch();
  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.getIn(["recommend", "upRanking"]),
    newRanking: state.getIn(["recommend", "newRanking"]),
    originRanking: state.getIn(["recommend", "originRanking"])
  }), shallowEqual);

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch]);

  return (
    <RankingWrapper>
      <XHThemeHeaderRMC title="榜单" />
      <div className="tops">
        <XHTopRanking info={upRanking} />
        <XHTopRanking info={newRanking} />
        <XHTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})
