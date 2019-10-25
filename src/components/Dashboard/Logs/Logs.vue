<template>
  <v-card
    outlined
    tile
    class="logs"
  >
    <div v-if="geocaches">
      <div v-for="(geocache, index) in geocaches" :key="index">
        <LogItem :geocache="geocache" />
      </div>
    </div>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import LogItem from './LogItem';

export default {
  data: () => ({}),
  computed: mapGetters(['geocaches']),
  components: { LogItem }
}
</script>

<style>
.logs {
  overflow-y: auto;
  height: calc(100vh - 64px);
}
</style>