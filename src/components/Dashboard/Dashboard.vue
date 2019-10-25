<template>
  <v-container fluid class="dashboard">
    <v-row no-gutters>
      <v-col lg="3" class="left pa-0">
        <Logs/>
      </v-col>

      <v-col lg="9" class="right pa-0">
        <p class="text-center">{{ username }}</p>
        <input type="file" id="file" ref="file" @change="test" />

        <v-btn @click="onAddLogs">add logs</v-btn>
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
  computed: mapGetters(['username', 'fieldNotes']),
  methods: {
    ...mapActions(['getGeoCache', 'setFieldNotes', 'addLogs']),
    test(event) {
      const reader = new FileReader();

      reader.onload = event => {
        const lines = event.target.result.split('\n');

        for (let line = 0; line < lines.length; line++) {
          let data = lines[line].split(',');

          // console.log();

          // if (!data[3].split('"')) {
          //   console.log(data[0])
          // }
          if (data[0]) {
            this.getGeoCache(data);
            this.setFieldNotes(data);
          }
        }
      }

      reader.onerror = error => {
        console.log(error)
      }

      reader.readAsText(event.target.files[0]);
    },
    onAddLogs() {
      this.addLogs(this.fieldNotes)
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