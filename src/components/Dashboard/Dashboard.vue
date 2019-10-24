<template>
  <v-container fluid class="dashboard">
    <v-row no-gutters>
      <v-col lg="3" class="left pa-0">
        <Logs />
      </v-col>

      <v-col lg="9" class="right pa-0">
        <input type="file" id="file" ref="file" @change="test" />
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
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    items: []
  }),
  components: { Logs },
  computed: mapGetters(['username']),
  methods: {
    ...mapActions(['getGeoCache']),
    test(event) {
      const reader = new FileReader();

      reader.onload = event => {
        const lines = event.target.result.split('\n');

        for (let line = 0; line < lines.length; line++) {
          console.log(lines[line]);

          this.getGeoCache(lines[line].split(',')[0]);
          // this.items.push(lines[line].split(','));
          // console.log(this.items);
        }
      }

      reader.onerror = error => {
        console.log(error)
      }

      reader.readAsText(event.target.files[0]);
    }
  }
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