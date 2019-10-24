<template>
  <v-container fluid class="dashboard">
    <v-row no-gutters>
      <v-col lg="3" class="left pa-0">
        <Logs />
      </v-col>

      <v-col lg="9" class="right pa-0">
        <p class="text-center">{{ username }}</p>
        <p class="text-center">{{ username }}</p>
        <p class="text-center">{{ username }}</p>
        <p class="text-center">{{ username }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logs from './Logs/Logs';
import { mapGetters } from 'vuex';

export default {
  data: () => ({

  }),
  components: { Logs },
  computed: mapGetters(['username'])
}
</script>

<style scoped>
.dashboard {
  background: red !important;
  height: calc(100vh - 64px);
  padding: 0;
  overflow: hidden;
}

.dashboard .left {
  background: blue;
}

.dashboard .right {
  background: yellow;
  height: calc(100vh - 64px);
}
</style>