import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  return (
    <div>
      {props.selectedSong === null ? (
        <p>Nada que mostrar</p>
      ) : (
        <p>{props.selectedSong.title}</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { selectedSong: state.songsReducer };
};

export default connect(mapStateToProps)(SongDetail);
