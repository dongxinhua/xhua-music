import * as actionTypes from "./constants";
import { getTopBanners } from "@/services/recommend.js";
import { getHotRecommends } from "@/services/recommend";

export const changeTopBannersAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners
})

export const changeHotRecommendAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMEND,
  hotRecommends: res.result
})

export const getTopBannersAction = () => {
  return (dispatch) => {
    getTopBanners().then(res => {
      dispatch(changeTopBannersAction(res));
    })
  }
}

export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then(res => {
      dispatch(changeHotRecommendAction(res));
    })
  }
}