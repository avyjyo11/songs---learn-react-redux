import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return <></>;
  }

  return (
    <div className="ui card">
      <div className="content">
        <div className="header">{song.title}</div>
        <div className="meta">
          <span className="date">Duration: {song.duration}</span>
        </div>
        <div className="description">Description</div>
      </div>
    </div>
  );
};

const mapStoreToProps = ({ selectedSong }) => ({ song: selectedSong });

export default connect(mapStoreToProps)(SongDetail);
