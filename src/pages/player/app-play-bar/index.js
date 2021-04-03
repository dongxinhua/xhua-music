import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongsDetailAction } from '../store/actionCreators';
import { getSongsSizeImage, getSongers, formatMinuteSecond, getPlaySong } from "@/utils/format-utils.js"

import { Slider } from 'antd';
import {
  PlaybarWrapper,
  Control,
  PlayInfo,
  Operator
} from "./style";

export default memo(function XHAppPlayerBar() {
  // state props
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // redux hooks
  const dispatch = useDispatch();
  const { currentMusic } = useSelector(state => ({
    currentMusic: state.getIn(["player", "currentMusic"])
  }), shallowEqual);

  // other hooks
  const audioRef = useRef();
  useEffect(() => {
    dispatch(getSongsDetailAction(30352891))
  }, [dispatch])

  useEffect(() => {
    // 初次渲染就要设置 audio 的 src 属性，设置播放的音乐
    audioRef.current.src = getPlaySong(currentMusic.id);
  }, [currentMusic]);

  // other handle 
  const image = (currentMusic.al && currentMusic.al.picUrl) || "";
  const songerArr = currentMusic.ar || [];
  const duration = currentMusic.dt || 0; // 总时长
  const showDuration = formatMinuteSecond(duration);
  const showCurrentTime = formatMinuteSecond(currentTime);
  // const progress = currentTime / duration * 100; // 当前时长 / 总时长 * 100 == 进度

  // handle function
  const playMusic = useCallback(() => {
    // 控制歌曲的播放与暂停
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying])

  const timeUpdate = (e) => {
    // 这是 audio 音乐播放器的 时间改变的回调
    if (!isChanging) { // !isChanging 滑块没有正在拖动
      // 在滑块没有移动的时候  再修改 currentTime 以及 progress
      // 设置歌曲播放的当前时间 获取到的时间是秒，要转化成毫秒
      // 歌曲当前时间改变 控制条的进度改变
      setCurrentTime(e.target.currentTime * 1000);
      // 如果滑块没有正在改变 再设置进度
      setProgress(currentTime / duration * 100);
    }
  }

  const sliderChange = useCallback((value) => {
    // 滑块改变中的回调 value 为滑块在进度条的进度
    // 滑块正在拖动 修改 isChanging 为 true
    setIsChanging(true);
    // 滑块滑动过程中也要修改显示时间
    setCurrentTime(value / 100 * duration)
    // 设置进度为 value
    setProgress(value);
  }, [duration])

  const sliderAfterChange = useCallback((value) => {
    // 滑块改变后的回调 value 为滑块在进度条的进度
    let current = value / 100 * duration / 1000; // 根据滑块拖动计算的时间 得到秒
    audioRef.current.currentTime = current; // 设置 audio 的歌曲播放的时间为根据滑块拖动计算的时间 是秒
    setCurrentTime(current * 1000); // 设置新的 currentTime 
    // 滑块拖动结束 修改 isChanging 为 false
    setIsChanging(false);

    // 设置
    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic])

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_player prev"></button>
          <button className="sprite_player play"
            onClick={e => playMusic()}></button>
          <button className="sprite_player next"></button>
        </Control>
        <PlayInfo>
          <div className="image">
            <a href="/#">
              <img src={getSongsSizeImage(image, 34)} alt="" />
            </a>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentMusic.name}</span>
              <a href="#/" className="singer-name">{getSongers(songerArr)}</a>
            </div>
            <div className="progress">
              <Slider defaultValue={30}
                tooltipVisible={false}
                value={progress}
                onChange={sliderChange}
                onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator>
          <div className="left">
            <button className="sprite_player btn favor"></button>
            <button className="sprite_player btn share"></button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume"></button>
            <button className="sprite_player btn loop"></button>
            <button className="sprite_player btn playlist"></button>
          </div>
        </Operator>
      </div>
      <audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
    </PlaybarWrapper>
  )
})
