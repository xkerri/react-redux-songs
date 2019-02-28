import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../reducers/SongsReducer";

class SongList extends React.Component {
  renderSongs() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              onClick={() => this.props.selectSong(song)}
              className="ui button primary"
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
    return <div className="ui divided list">{this.renderSongs()}</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.listSongs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
