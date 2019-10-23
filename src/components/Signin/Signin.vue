<template>
  <h1>Zaloguj się</h1>
</template>

<script>
import asyncWrapper from '../../utils/asyncWrapper';
import getParams from '../../utils/params';
import axios from 'axios';

export default {
  data: () => ({

  }),
  
  methods: {
    async getOAuthToken() {
      const { error, result } = await asyncWrapper(axios('oauth/requestToken'));

      if (result) {
        const params = getParams(result.data, ['oauth_token', 'oauth_token_secret']);

        localStorage.setItem('oauth_token', params.oauth_token);
        localStorage.setItem('oauth_token_secret', params.oauth_token_secret);

        window.location.href = `https://opencaching.pl/okapi/services/oauth/authorize?oauth_token=${params.oauth_token}`; 
      } else {
        console.error(error);
      }
    },
    
  },
  created() {
    this.getOAuthToken();
  },
}
</script>

<style>

</style>