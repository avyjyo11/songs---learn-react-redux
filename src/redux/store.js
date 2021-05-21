import { createStore, combineReducers } from "redux";

import * as reducers from "./reducers";

const store = createStore(
  combineReducers({
    songs: reducers.songsReducer,
    selectedSong: reducers.selectedSongReducer,
  })
);

export default store;
