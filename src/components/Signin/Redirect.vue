<template>
  <h1>redirect</h1>
</template>

<script>
import asyncWrapper from '../../utils/asyncWrapper';

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

        console.log(error, result);
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