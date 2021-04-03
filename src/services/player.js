import request from "./request";

export function getSongsDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}