import request from "./request";

export const getTopBanners = () => {
  return request({
    url: "/banner"
  })
}

export const getHotRecommends = (limit) => {
  return request({
    url: "/personalized",
    params: {
      limit
    }
  })
}