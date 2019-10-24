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
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: { Header },
  computed: mapGetters(['isLoading'])
};
</script>