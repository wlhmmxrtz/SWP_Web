const CLIENT_ID = "your-client-id";
const REDIRECT_URI = "http://localhost:3000/";

async function useAuth(code) {
  const response = await fetch(
    `https://accounts.spotify.com/api/token?grant_type=authorization_code&code=${code}&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(`${CLIENT_ID}:${process.env.REACT_APP_CLIENT_SECRET}`)}`,
      },
    }
  );
  const data = await response.json();
  const token = data.access_token;
  return token;
}

export default useAuth;
