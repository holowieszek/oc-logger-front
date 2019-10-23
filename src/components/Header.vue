<template>
  <v-app-bar app class="header">
    <v-toolbar-title class="headline text-uppercase">
      <router-link to="/" id="title">
        <span class="font-weight-bold">Opencaching</span>
        <span class="font-weight-light">logger</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
     <v-toolbar-items>
        <v-btn text v-if="isLoggedIn">{{ username }}</v-btn>
        <v-btn text to="/signin" v-else>Zaloguj się</v-btn>
      </v-toolbar-items>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({}),
  computed: mapGetters(['isLoggedIn', 'username'])
}
</script>

<style>
.header #title {
  color: #000;
  text-decoration: none;
}
</style>