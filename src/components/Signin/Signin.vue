<template>
  <h1>Zaloguj się</h1>
</template>

<script>
import asyncWrapper from '../../utils/asyncWrapper';
export default {
  data: () => ({

  }),
  
  methods: {
    async getOAuthToken() {
      const { error, result } = await asyncWrapper(this.$api.get('oauth/requestToken'));

      if (result) {
        const params = this.getParams(result.data, ['oauth_token', 'oauth_token_secret']);

        localStorage.setItem('oauth_token', params.oauth_token);
        localStorage.setItem('oauth_token_secret', params.oauth_token_secret);

        window.location.href = `https://opencaching.pl/okapi/services/oauth/authorize?oauth_token=${params.oauth_token}`; 
      } else {
        console.error(error);
      }
    },
    getParams(query, find) {
      let params = new URLSearchParams(query);
      const data = [];

      find.map(key => {
        return data[key] = params.get(key)
      });

      return data;
    }
  },
  created() {
    this.getOAuthToken();
  },
}
</script>

<style>

</style>