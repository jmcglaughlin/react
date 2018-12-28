import React from 'react';

class SearchBar extends React.Component {
  // Initialize state object parameters
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    // prevent browser from submitting form
    event.preventDefault();

    // wire up call back to App
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            {/* Initialize the Search term */}
            {/* wire-up event handler so that we can enter input and process */}
            <input
              type="text"
              placeholder="Enter term"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
