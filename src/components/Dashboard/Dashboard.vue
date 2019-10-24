<template>
  <v-container fluid class="dashboard">
    <!-- <h1 class="text-center">{{ username }}</h1> -->
    <v-row>
      <v-col lg="3" class="left">
        <p>left</p>
      </v-col>
      <v-col lg="9" class="right">
        <p>right</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import asyncWrapper from '../../utils/asyncWrapper';
import { mapGetters } from 'vuex';

export default {
  data: () => ({

  }),
  computed: mapGetters(['username'])
}
</script>

<style scoped>
.dashboard {
  background: red !important;
}

.dashboard .left {
  background: blue;
}

.dashboard .right {
  background: yellow;
}
</style>