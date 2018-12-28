import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';

class App extends React.Component {
  state = { videos: [] };

  // Setup call back for youtube submit
  onTermSubmit = async term => {
    // setup youtube axios request
    const response = await youtube.get('search', {
      params: { q: term }
    });
    // use setState for binding to frontend
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        {/*  wire callback to process youtube submittal */}
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
