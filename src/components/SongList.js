import React, { Component } from "react";
import { connect } from "react-redux";

import { selectSong } from "../redux/actions";

class SongList extends Component {
  get _renderSongs() {
    return this.props.songs.map((song) => (
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
    ));
  }

  render() {
    return <div className="ui divided list">{this._renderSongs}</div>;
  }
}

// passed params to connect.
const actionCreators = { selectSong };
const mapStoreToProps = ({ songs, selectedSong }) => {
  return { songs, selectedSong };
};

export default connect(mapStoreToProps, actionCreators)(SongList);
