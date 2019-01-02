// Alternative deconstruct Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// de-constructed React out so don;t need React.Component
class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        // see semantic css documentation for className usage
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select"
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// How to configure connect function
// By convention to map redux store states to react props
// operate on the data store data and return to react components
const mapStateToProps = state => {
  return { songs: state.songs };
};

// connect function runs a function that takes the SongList from the data store
// the Connect component is actually react Component so the connect function will
// provide the binding changes
// Connect component get updated on each state change of store
//
// connect also provides function of selectSong which is wired to the render helper as onClick
// This is passed in to our components as a props
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
// Connect calls the dispatch function for us
