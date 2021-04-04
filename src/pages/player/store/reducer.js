import { Map } from "immutable";

import * as actionTypes from "./constants";

const initialState = Map({
  playList: [
    {
      "name": "牵丝戏",
      "id": 30352891,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 188565,
          "name": "银临",
          "tns": [],
          "alias": []
        },
        {
          "id": 188558,
          "name": "Aki阿杰",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 100,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 3098268,
        "name": "牵丝戏",
        "picUrl": "https://p1.music.126.net/Nd86SOcyCxU5Qu7jdZn_MQ==/7725168696876736.jpg",
        "tns": [],
        "pic": 7725168696876736
      },
      "dt": 239302,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 9574444,
        "vd": -51224
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 5744684,
        "vd": -48626
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 3829804,
        "vd": -46965
      },
      "a": null,
      "cd": "1",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 1,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 0,
      "publishTime": 1422288000007
    },
    {
      "name": "红昭愿",
      "id": 452986458,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 12174521,
          "name": "音阙诗听",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 142,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 35114938,
        "name": "红昭愿",
        "picUrl": "https://p1.music.126.net/8ltR3o9R8uJ9_5Cc71cDhA==/109951162951242154.jpg",
        "tns": [],
        "pic_str": "109951162951242154",
        "pic": 109951162951242160
      },
      "dt": 173217,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 6930852,
        "vd": 930
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 4158529,
        "vd": 1160
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 2772367,
        "vd": -2
      },
      "a": null,
      "cd": "1",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 8256,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "mv": 0,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416678,
      "publishTime": 1484064000007
    },
    {
      "name": "虞兮叹",
      "id": 1479526505,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 13282198,
          "name": "闻人听書_",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": "",
      "fee": 8,
      "v": 3,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 95455188,
        "name": "虞兮叹",
        "picUrl": "https://p1.music.126.net/6gdwWjPXUkyTx4CuuSxkIg==/109951165319864977.jpg",
        "tns": [],
        "pic_str": "109951165319864977",
        "pic": 109951165319864980
      },
      "dt": 210000,
      "h": {
        "br": 320002,
        "fid": 0,
        "size": 8401965,
        "vd": -43176
      },
      "m": {
        "br": 192002,
        "fid": 0,
        "size": 5041197,
        "vd": -40587
      },
      "l": {
        "br": 128002,
        "fid": 0,
        "size": 3360813,
        "vd": -38922
      },
      "a": null,
      "cd": "01",
      "no": 1,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 0,
      "s_id": 0,
      "mark": 0,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "resourceState": true,
      "single": 0,
      "noCopyrightRcmd": null,
      "rtype": 0,
      "rurl": null,
      "mst": 9,
      "cp": 1416842,
      "mv": 0,
      "publishTime": 0
    }
  ],
  currentMusicIndex: 0,
  currentMusic: {},
  sequence: 0, // 0 循环 1 随机 2 单曲
  lyricList: [],
  currentLyricIndex: 0
})

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_MUSIC:
      return state.set("currentMusic", action.currentMusic);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_MUSIC_INDEX:
      return state.set("currentMusicIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    default:
      return state;
  }
}