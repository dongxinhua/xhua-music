import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { Hot_RECOMMEND_LIMMIT } from "@/common/constants.js";

import {
  HotRecommendWrapper
} from "./style";
import XHThemeHeaderRCM from "@/components/theme-header-rcm/";
import XHSongsCover from "@/components/songs-cover";
import { getHotRecommendsAction } from '../../store/actionCreators';

export default memo(function XHHotRecommend() {
  const dispatch = useDispatch();
  const hotRecommends = useSelector(state => state.getIn(["recommend", "hotRecommends"]), shallowEqual)

  useEffect(() => {
    dispatch(getHotRecommendsAction(Hot_RECOMMEND_LIMMIT));
  }, [dispatch]);

  return (
    <HotRecommendWrapper>
      <XHThemeHeaderRCM title="热门推荐" keywords={["华语", "流行", "摇滚", "民谣", "电子"]} />
      <div className="recommend-list">
        {
          hotRecommends.map(item => {
            return (
              <XHSongsCover key={item.id} info={item}/>
            )
          })
        }
      </div>
    </HotRecommendWrapper>
  )
})
