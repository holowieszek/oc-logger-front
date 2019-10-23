<template>
  <h1>redirect</h1>
</template>

<script>
import asyncWrapper from '../../utils/asyncWrapper';
import { mapActions } from 'vuex';

export default {
  data: () => ({

  }),
  methods: mapActions(['getAccessToken']), 
  created() {
    this.getAccessToken(window.location.search);
  }
}
</script>

<style>

</style>