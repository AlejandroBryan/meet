'use strict';
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const calendar = google.calendar('v3');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const credentials = {
  client_id : process.env.CLIENT_ID,
  project_id : process.env.PROJECT_ID,
  client_secret : process.env.CLIENT_SECRET,
  calendar_id : process.env.CALENDAR_ID,
  auth_uri : 'https://accounts.google.com/o/oauth2/auth',
  token_uri : 'https://accounts.google.com/token',
  auth_provider_x59_cert_url: 'https://www.googleapis.com/auth/h2/v1/certs',
  redirect_uris: ['https://alejandrobryan.com/meet'],
  javascript_origins: ['https://alejandrobryan.com', 'http://localhost:3000']
}

const { client_id, client_secret, redirect_uris, calendar_id} = credentials;

const oAuth2Client = new google.auth.OAuth2(
  client_id,
  client_secret,
  redirect_uris[0]
)

module.exports.getAuthURL = async() => {

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });

  return{
    statusCode: 200,
    headers:{
      "Access-Control-Allow-Headers" : "*",
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Credentials': true,
      "Access-Control-Allow-Methods": "GET"
    },
    body: JSON.stringify({
      authUrl: authUrl,
    })
  }
}

module.exports.getAccessToken = async(event) => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  const code = decodeURIComponent(`${event.pathParameters.code}`);

  return new Promise((resolve, reject) => {
    oAuth2Client.getToken(code, (err, token)=>{
      if(err) reject(err)
      return resolve(token);
    })
  }).then((token) => {
    return {
      statusCode: 200,
      headers:{
        "Access-Control-Allow-Headers" : "*",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        "Access-Control-Allow-Methods": "GET"
      },
      body: JSON.stringify(token)

    }
  }).catch((err)=>{
    console.error(err);
    return{
      statusCode: 500,
      body: JSON.stringify(err)
    }

  })

}
module.exports.getCalendarEvents= async(event)=>{

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  const access_token = decodeURI(`${event.pathParameters.access_token}`);
  oAuth2Client.setCredentials({access_token});

  return new Promise((resolve, reject) => {

    calendar.events.list(
      {
        calendarId: calendar_id,
        auth: oAuth2Client,
        timeMin: new Date().toISOString(),
        singleEvents: true,
        orderBy: "startTime",
      },
      (error, response) => {
        if (error) {
          reject(error);
        } else {
          resolve(response);
        }
      }
    );

    }).then((results) => {
    return {
      statusCode: 200,
      headers:{
        "Access-Control-Allow-Headers" : "*",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
        "Access-Control-Allow-Methods": "GET"
      },
      body: JSON.stringify({ events: results.data.items })

    }
  }).catch((err)=>{
    console.error(err);
    return{
      statusCode: 500,
      headers:{
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(err)
    }

  })
}