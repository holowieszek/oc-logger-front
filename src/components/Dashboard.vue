<template>
  <div>
    <h1 class="text-center">{{ username }}</h1>
  </div>
</template>

<script>
import asyncWrapper from '../utils/asyncWrapper';
import { mapGetters } from 'vuex';

export default {
  data: () => ({

  }),
  computed: mapGetters(['username'])
}
</script>

<style>

</style>