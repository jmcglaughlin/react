import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'enter search term' };

  onFormSubmit(event) {
    // circumvent form clearing data on enter by using event.preventDefault() method
    event.preventDefault();
  }

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
