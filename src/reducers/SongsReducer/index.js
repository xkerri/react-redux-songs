import { makeActionCreator } from "redux-toolbelt";

export const selectSong = makeActionCreator("SELECT_SONG");

export const listSongs = () => {
  return [
    {
      title: "Passionfruit",
      author: "Drake"
    },
    {
      title: "Sinner",
      author: "Veora"
    },
    {
      title: "Escapate Conmigo",
      author: "Ozuna & Wisin"
    },
    {
      title: "Psycokiller",
      author: "Talking Heads"
    }
  ];
};

export default function songsReducer(state = null, action) {
  switch (action.type) {
    case selectSong.TYPE: {
      return action.payload;
    }
    default:
      return state;
  }
}
