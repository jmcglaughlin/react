// Alternative deconstruct Component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render() {
    return <div>SongList</div>;
  }
}

//  connect function executes the Songlist funciton
export default connect()(SongList);
