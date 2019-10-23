<template>
  <v-app>
    <Header />
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: { Header },
  methods: mapActions(['checkIfAuthenticated']),
  created() {
    const oauthToken = localStorage.getItem('oauth_token');
    const oauthTokenSecret = localStorage.getItem('oauth_token_secret');

    const data = {
      oauthToken,
      oauthTokenSecret
    }

    this.checkIfAuthenticated(data);
  }
};
</script>