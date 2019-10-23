<template>
  <div>
    <h1>dashboard</h1>
    <v-btn text @click="test">Test</v-btn>
  </div>
</template>

<script>
import asyncWrapper from '../utils/asyncWrapper';
export default {
  data: () => ({

  }),
  methods: {
    async test() {
      // console.log('test');
      const oauthToken = localStorage.getItem('oauth_token');
      const oauthTokenSecret = localStorage.getItem('oauth_token_secret');

      const data = {
        oauthToken,
        oauthTokenSecret
      }

      const { error, result } = await asyncWrapper(this.$api.post('oc/user', data));
      console.log(error, result);
    }
  }
}
</script>

<style>

</style>