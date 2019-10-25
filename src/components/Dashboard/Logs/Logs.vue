<template>
  <v-card
    outlined
    tile
    class="logs"
  >
    <!-- <div v-for="n in 15" :key="n">
      <LogItem :cacheName="'cache name'" />
    </div> -->

    <div v-if="geocaches">
      <div v-for="(geocache, index) in geocaches" :key="index">
        <LogItem :cacheName="geocache.name" />
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
  overflow-y: scroll;
  height: calc(100vh - 64px);
}
</style>