import { SONG } from "../../constants/actionTypes";

export const selectedSongReducer = (selectedSong = null, action) => {
  switch (action.type) {
    case SONG.SELECT:
      return action.payload;
    default:
      return selectedSong;
  }
};
