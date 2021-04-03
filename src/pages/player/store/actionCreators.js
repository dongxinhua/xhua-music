import { getSongsDetail } from "@/services/player";

import * as actionTypes from "./constants";

const changeCurrentMusicAction = (song) => ({
  type: actionTypes.CHANGE_CURRENT_MUSIC,
  currentMusic: song
})

export const getSongsDetailAction = (ids) => {
  return dispatch => {
    getSongsDetail(ids).then(res => {
      dispatch(changeCurrentMusicAction(res.songs[0]))
    })
  }
}