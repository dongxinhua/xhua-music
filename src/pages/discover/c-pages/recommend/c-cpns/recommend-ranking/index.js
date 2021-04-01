import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getTopListAction } from '../../store/actionCreators';

import XHThemeHeaderRMC from "@/components/theme-header-rcm";
import { RankingWrapper } from "./style";

export default memo(function XHRecommendRanking() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch]);

  return (
    <RankingWrapper>
      <XHThemeHeaderRMC title="榜单" />
    </RankingWrapper>
  )
})
