<template>
  <h1>Zaloguj się</h1>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data: () => ({

  }),
  methods: mapActions(['getOAuthToken']),  
  created() {
    this.getOAuthToken();
  }
}
</script>

<style>

</style>