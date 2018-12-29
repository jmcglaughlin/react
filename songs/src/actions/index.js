// Action creator
export const selectSong = song => {
  return {
    type: 'SONG_SEELCTED',
    payload: song
  };
};
