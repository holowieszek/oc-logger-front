<template>
  <v-card
    outlined
    tile
    class="logs"
  >
    <div v-for="n in 15" :key="n">
      <LogItem :cacheName="'cache name'" />
    </div>
  </v-card>
</template>

<script>
import LogItem from './LogItem';
export default {
  data: () => ({}),
  components: { LogItem }
}
</script>

<style>
.logs {
  overflow-y: scroll;
  height: calc(100vh - 64px);
}
</style>