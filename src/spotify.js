//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://spotify-clone-2ec2f.web.app/"; //http://localhost:3000/

const clientId = "1504a1aa4ae947bb8fab79c319904575";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      //http://localhost:3000/#access_token=BQCtG5CeLovrCPjvnAEk7cGbj7e-CK1mO452mzC7rd3T890L1Bw2ujyNS1A1cY4D0QyUjwkdBNArfiWAb1DlnBfhuyHZlcfbFRvwfoZgdW7C8YGLBGmoWLpuKmpNL1dPIkc-YNGX-SmyIf6qHRih6AcvMglJh1JQT8vO0uOa463WyfpWs4fP&token_type=Bearer&expires_in=3600
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
