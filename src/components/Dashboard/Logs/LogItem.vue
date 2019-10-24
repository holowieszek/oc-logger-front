<template>
  <v-list-item class="log">
    <v-list-item-content>
      <v-list-item-title class="title">{{ cacheName }}</v-list-item-title>
      <v-list-item-subtitle>Logged ?</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  data: () => ({}),
  props: ['cacheName']
}
</script>

<style>
.log:nth-child(even) {
  background: #F9F9F9
}
</style>