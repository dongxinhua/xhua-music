import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getTopBannersAction } from "../../store/actionCreators";

import { Carousel } from 'antd';
import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from "./style";

export default memo(function XHTopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dispatch = useDispatch();
  const { topBanners } = useSelector((state) => ({
    // topBanners: state.get("recommend").get("topBanners")
    topBanners: state.getIn(["recommend", "topBanners"])
  }), shallowEqual);

  // 其它hooks
  const CalouselRef = useRef();
  useEffect(() => {
    // 获取首页轮播图数据
    dispatch(getTopBannersAction());
  }, [dispatch])

  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(prev => prev = to);
  }, [])

  // 其它业务逻辑
  const bgImage = topBanners[currentIndex] && (topBanners[currentIndex].imageUrl + "?imageView&blur=40x20");

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay={true} ref={CalouselRef} beforeChange={bannerChange}>
            {
              topBanners.map((item, index) => {
                return (
                  <div key={item.imageUrl} className="banner-item">
                    <img src={item.imageUrl} alt={item.typeTitle} className="image"/>
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button className="btn left" onClick={e => CalouselRef.current.prev()}></button>
          <button className="btn right" onClick={e => CalouselRef.current.next()}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})
