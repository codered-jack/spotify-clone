export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  //token:
  //"BQBxiYfIFTYDllVAtjdrmarNmaJjWEguLWmNgQQurKUItslOp3PmTwByD5HYwRFHFzEsg6vzAXIdsX8-Xsb_33YL26Tm-N3dwYuM6yBUH93poq8mIPWSuk4pS80rUK6Q0sJ2eVDiW7qTsJ5oc3Q_1Yq6SdH0OV4U1p4N3gaLLyi3UadnJGPy",
};

const reducer = (state, action) => {
  console.log(action);

  //Action -> type,[payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_TOP_ARTISTS":
      return {
        ...state,
        top_artists: action.top_artists,
      };
    case "SET_SPOTIFY":
      return {
        ...state,
        spotify: action.spotify,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
