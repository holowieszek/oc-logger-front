import ApiService from './api.service';

const UserService = {
  checkIfAuthenticated() {
    const tokens = this.getCurrentUser();
    const verify = ApiService.post('oc/user', tokens);

    return verify;
  },
  getAccessToken(query) {
    const oauthVerifier = new URLSearchParams(query).get('oauth_verifier')
    const tokens = this.getCurrentUser();

    const accessToken = ApiService.post('oauth/accessToken', { oauthVerifier, ...tokens });

    return accessToken;
  },
  getCurrentUser() {
    const oauthToken = localStorage.getItem('oauth_token');
    const oauthTokenSecret = localStorage.getItem('oauth_token_secret');

    return {
      oauthToken,
      oauthTokenSecret
    }
  }
}

export default UserService;