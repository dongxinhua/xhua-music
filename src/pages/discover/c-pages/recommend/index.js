import React, { memo, useEffect } from 'react';
import { connect, shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopBannersAction } from './store/actionCreators';

export default memo(function XHRecommend(props) {
  const dispatch = useDispatch();
  const { topBanners } = useSelector((state) => ({
    topBanners: state.recommend.topBanners
  }), shallowEqual)

  useEffect(() => {
    dispatch(getTopBannersAction());
  }, [dispatch])

  return (
    <div>
      <h2>XHRecommend: {topBanners.length}</h2>
    </div>
  )
});
