import React, { memo, useEffect, useRef } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAlbumsAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import XHThemeHeaderRMC from "@/components/theme-header-rcm";
import XHAlbumCover from "@/components/album-cover";
import { AlbumWrapper } from "./style";

export default memo(function XHNewAlbum() {

  const dispatch = useDispatch();
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.getIn(["recommend", "newAlbums"])
  }), shallowEqual)

  const PageRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch])

  return (
    <AlbumWrapper>
      <XHThemeHeaderRMC title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02"
                onClick={e => PageRef.current.prev()}></button>
        <div className="album">
          <Carousel dots={false} ref={PageRef}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(iten => {
                        return (
                          <XHAlbumCover key={iten.id}
                                        info={iten}
                                        width={118}
                                        size={100}
                                        bgp="-570px">{iten.name}</XHAlbumCover>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02"
                onClick={e => PageRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
