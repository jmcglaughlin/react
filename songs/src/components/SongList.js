// Alternative deconstruct Component
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
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

// convention to map redux store states to react props
const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

// = connect function runs the map function pulling the redux store state
// into react class SongList
export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
