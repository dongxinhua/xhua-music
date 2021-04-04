import { getSongsDetail, getLyric } from "@/services/player";
import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric.js"

import * as actionTypes from "./constants";

const changeCurrentMusicAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_MUSIC,
  currentMusic: song
})

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
})

const changeCurrentMusicIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_MUSIC_INDEX,
  index
})

const changeLyricListAction = (lyricList) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
})

export const changeCurrentLyricIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
})

export const changeCurrentIndexAndSongAction = (tag) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(["player", "sequence"]);
    const playList = getState().getIn(["player", "playList"]);
    let currentMusicIndex = getState().getIn(["player", "currentMusicIndex"]);

    switch (sequence) {
      case 1: // 随机播放
        let randomNumer = getRandomNumber(playList.length);
        while (randomNumer === currentMusicIndex) {
          randomNumer = getRandomNumber(playList.length);
        }
        currentMusicIndex = randomNumer;
        break;
      default: // 其它播放
        currentMusicIndex += tag;
        if (currentMusicIndex >= playList.length) currentMusicIndex = 0;
        if (currentMusicIndex < 0) currentMusicIndex = playList.length - 1;
    }

    const currentMusic = playList[currentMusicIndex];
    dispatch(changeCurrentMusicAction(currentMusic));
    dispatch(changeCurrentMusicIndexAction(currentMusicIndex));

    // 修改歌词
    dispatch(getLyricAction(currentMusic.id));
  }
}

export const getSongsDetailAction = (ids) => {
  return (dispatch, getState) => {
    // 根据id查找 playList 中是否已经有了该歌曲
    // 获取歌曲列表
    const playList = getState().getIn(["player", "playList"]);
    // 判断该歌曲是否已经存在于歌曲列表
    const songIndex = playList.findIndex(song => song.id === ids);

    // 判断是否找到歌曲
    let song = null;
    if (songIndex !== -1) {
      // 当前歌曲在歌曲列表
      // 修改记录歌曲的 currentIndex
      dispatch(changeCurrentMusicIndexAction(songIndex));
      song = playList[songIndex];
      // 修改正在播放的歌曲为当前歌曲
      dispatch(changeCurrentMusicAction(song))

      // 修改歌词
      dispatch(getLyricAction(song.id));
    } else {
      // 当前歌曲不在歌曲列表
      // 请求歌曲数据
      getSongsDetail(ids).then(res => {
        // 获取当前歌曲
        song = res.songs && res.songs[0];
        if (!song) return; // 歌曲不存在 直接 return

        const newPlayList = [...playList];
        // 将该歌曲放进歌曲列表
        newPlayList.push(song);

        // 更新 redux 中的值
        // 修改歌曲列表为最新的歌曲列表
        dispatch(changePlayListAction(newPlayList));
        // 修改记录歌曲的 currentIndex 
        dispatch(changeCurrentMusicIndexAction(newPlayList.length - 1));
        // 修改正在播放歌曲为当前歌曲
        dispatch(changeCurrentMusicAction(song));

        // 修改歌词
        dispatch(getLyricAction(song.id));
      })
    }
  }
}

export const getLyricAction = (id) => {
  return dispatch => {
    getLyric(id).then(res => {
      const lyric = res.lrc.lyric;
      const lyricList = parseLyric(lyric)
      dispatch(changeLyricListAction(lyricList))
    })
  }
}