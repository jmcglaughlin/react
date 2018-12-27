import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

const source = 'https://api.unsplash.com/search/photos';
const authKey =
  '64102276ec4b87e450aeee53254979085bf04f67f84442fac9246f5f6fce7109';

class App extends React.Component {
  // callback function for the child
  async onSearchSubmit(term) {
    const response = await axios.get(source, {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID ' + authKey
      }
    });

    console.log(response.data.results);
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
