const DEFAULT_SONGS = [
  { title: "Peaches", duration: "5:12" },
  { title: "No srubs", duration: "4:05" },
  { title: "Build a bitch", duration: "3:25" },
];

export const songsReducer = (songs = DEFAULT_SONGS, _) => {
  return songs;
};
