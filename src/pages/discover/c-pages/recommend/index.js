import React, { memo } from 'react';

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style';
import XHTopBanner from "./c-cpns/top-banner";
import XHHotRecommend from "./c-cpns/hot-recommend";
import XHNewAlbum from "./c-cpns/new-album";
import XHRecommendRanking from "./c-cpns/recommend-ranking";

export default memo(function XHRecommend(props) {

  return (
    <RecommendWrapper>
      <XHTopBanner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <XHHotRecommend />
          <XHNewAlbum />
          <XHRecommendRanking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
});
