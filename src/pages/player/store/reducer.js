import { Map } from "immutable";

import * as actionTypes from "./constants";

const initialState = Map({
  currentMusic: {}
})

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case actionTypes.CHANGE_CURRENT_MUSIC:
      return state.set("currentMusic", action.currentMusic);
    default:
      return state;
  }
}