import React, { memo } from 'react';

import {
  PlayerWrapper,
  PlayerLeft,
  PlayerRight
} from "./style";

export default memo(function XHPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <h2>XHPlayerInfo</h2>
          <h2>XHSongContent</h2>
        </PlayerLeft>
        <PlayerRight>
          <h2>XHSimiPlaylist</h2>
          <h2>XHSimiSong</h2>
          <h2>DownLoad</h2>
        </PlayerRight>
      </div>
    </PlayerWrapper>
  )
})
