// Reducers
import { combineReducers } from 'redux';

// Setup a static store

// songs reducer is the data store of songs and their duration
const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
};

// the selected Song reducer simply returns the selected song
const selectedSongReducer = (selectedSong = null, action) => {
  // since a selected song will always be selected we don't need this
  // but is good to keep to eliminate potential crashing in future
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

// combineReducers() is a react-redux component
// This gives application access to the reducers which will return
// a list of songs and the selected song from the store
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
