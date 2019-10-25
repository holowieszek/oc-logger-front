<template>
  <v-list-item class="log">
    <v-list-item-content>
      <v-list-item-title class="title">{{ geocache.name }}</v-list-item-title>
      <v-list-item-subtitle>Logged ? {{ geocache.is_found }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  data: () => ({}),
  props: ['geocache']
}
</script>

<style>
.log:nth-child(even) {
  background: #F9F9F9
}
</style>