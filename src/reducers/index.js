import { combineReducers } from "redux";
import songsReducer, { listSongs } from "./SongsReducer";

export default combineReducers({
  songsReducer,
  listSongs
});
