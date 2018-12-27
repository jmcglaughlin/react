import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'enter search term' };

  // change to arrow function
  onFormSubmit = event => {
    event.preventDefault();

    // ES5 binds this to arrow functions
    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>ImageSearch: </label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
