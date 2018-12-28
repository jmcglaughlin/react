import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  render() {
    return (
      // setup a margin on page with container div
      <div className="ui container">
        <SearchBar />
      </div>
    );
  }
}

export default App;
