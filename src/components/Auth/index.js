import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'demoday.auth0.com',
    clientID: 'Qo9GXUd9vStLjV3FK10WFqdMuvH5FS8q',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://demoday.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
