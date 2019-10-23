<template>
  <v-app>
    <div v-if="!isLoading">
      <Header />
      <v-content>
        <router-view></router-view>
      </v-content>
    </div>
    <p v-else>Loading</p>
  </v-app>
</template>

<script>
import Header from './components/Header';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: { Header },
  computed: mapGetters(['isLoading']),
  methods: mapActions(['checkIfAuthenticated']),
  created() {
    // const oauthToken = localStorage.getItem('oauth_token');
    // const oauthTokenSecret = localStorage.getItem('oauth_token_secret');

    // const data = {
    //   oauthToken,
    //   oauthTokenSecret
    // }

    // this.checkIfAuthenticated(data);
  }
};
</script>