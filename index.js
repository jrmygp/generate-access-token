const { google } = require("googleapis");

const MESSAGING_SCOPE = "https://www.googleapis.com/auth/firebase.messaging";
const SCOPES = [MESSAGING_SCOPE];

async function getAccessToken() {
  try {
    const key = require("./service-account.json");
    const jwtClient = new google.auth.JWT(key.client_email, undefined, key.private_key, SCOPES, undefined);
    const tokens = await jwtClient.authorize();
    console.log("access_token: ", tokens.access_token);
  } catch (error) {
    console.log("an error occured");
  }
}

getAccessToken();
