// Action creator

// Using a named export allows to export several functions from a single file
// accepts a song object
export const selectSong = (song = null) => {
  // Return an action
  // as an object that returns the type (all caps) and payload
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
