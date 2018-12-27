import React from 'react';
import SearchBar from './SearchBar';

class App extends React.Component {
  // callback function for the child
  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* pass property onSubmit as callback function onSearchSubmit to the component /} */}
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
