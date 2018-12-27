import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const source = 'https://api.unsplash.com/search/photos';
const authKey =
  '64102276ec4b87e450aeee53254979085bf04f67f84442fac9246f5f6fce7109';

class App extends React.Component {
  state = { images: [] };

  // callback function for the child
  onSearchSubmit = async term => {
    const response = await axios.get(source, {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ' + authKey
      }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        {/* pass property onSubmit as callback function onSearchSubmit to the component /} */}
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
