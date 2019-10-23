<template>
  <h1>redirect</h1>
</template>

<script>
import asyncWrapper from '../../utils/asyncWrapper';
import getParams from '../../utils/params';

export default {
  data: () => ({

  }),
  methods: {
    async getAccessToken() {
      const oauthVerifier = new URLSearchParams(window.location.search).get('oauth_verifier')
      const oauthToken = localStorage.getItem('oauth_token');
      const oauthTokenSecret = localStorage.getItem('oauth_token_secret');

      
      if (oauthVerifier && oauthToken && oauthTokenSecret) {
        const data = {
          oauthVerifier,
          oauthToken,
          oauthTokenSecret
        }

        const { error, result } = await asyncWrapper(this.$api.post('oauth/accessToken', data));

        if (result) {
          const params = getParams(result.data, ['oauth_token', 'oauth_token_secret']);

          localStorage.setItem('oauth_token', params.oauth_token);
          localStorage.setItem('oauth_token_secret', params.oauth_token_secret);

          this.$router.push('/dashboard');
        } else {
          console.error(error);
        }
      }
    }
  },
  created() {
    this.getAccessToken();
  }
}
</script>

<style>

</style>