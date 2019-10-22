<template>
  <v-app-bar app class="header">
    <v-toolbar-title class="headline text-uppercase">
      <router-link to="/" id="title">
        <span class="font-weight-bold">Openchaching</span>
        <span class="font-weight-light">logger</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
     <v-toolbar-items>
        <v-btn text to="/login">Login</v-btn>
      </v-toolbar-items>
  </v-app-bar>
</template>

<script>
export default {

}
</script>

<style>
.header #title {
  color: #000;
  text-decoration: none;
}
</style>