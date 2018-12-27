import React from 'react';

class SearchBar extends React.Component {
  // callback function to allow feedback of input typing
  // onInputChange(event) {
  //   // typicallly only interested in the value extracted this way
  //   console.log(event.target.value);
  // }

  // call back function is replace with an anonymous funciton
  // performing single task as shorthand
  // note: event is typically shortened to simply e
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>ImageSearch: </label>
            <input type="text" onChange={e => console.log(e.target.value)} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
