import React from 'react';

class SearchBar extends React.Component {
  // callback function to allow feedback of input typing
  onInputChange(event) {
    // typicallly only interested in the value extracted this way
    console.log(event.target.value);
  }

  // callback function to allow detection of input field click
  onInputClick(even) {
    console.log('input field was selected');
  }

  // () are left off of a callback function InputChange
  // if () included call back function is called on every invocation of render.
  // Leaving off () passes a reference of function to input element to use in
  // future as in  onChange
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>ImageSearch: </label>
            <input
              type="text"
              onClick={this.onInputClick}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
