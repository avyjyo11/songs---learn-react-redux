import { SONG } from "../../constants/actionTypes";

export const selectSong = (song) => ({
  type: SONG.SELECT,
  payload: song,
});
