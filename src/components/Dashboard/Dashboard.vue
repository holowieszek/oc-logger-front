<template>
  <v-container fluid class="dashboard">
    <v-row no-gutters>
      <v-col lg="2" md="6" class="left pa-0">
        <Logs />
      </v-col>

      <v-col lg="10" md="6" class="right pa-5">
        <p class="text-center">{{ username }}</p>
        <input type="file" id="file" ref="file" @change="test" />

        <v-textarea
          label="Comment"
          v-model="comment"
        ></v-textarea>

        {{ comment }}

        <v-btn @click="onAddLogs">add logs</v-btn>

        {{ fieldNotes.length }}
        {{ loggedGeocaches.length }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logs from './Logs/Logs';
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    items: [],
    comment: ''
  }),
  components: { Logs },
  computed: mapGetters(['username', 'fieldNotes', 'loggedGeocaches']),
  methods: {
    ...mapActions(['getGeoCache', 'setFieldNotes', 'addLogs']),
    test(event) {
      const reader = new FileReader();

      reader.onload = event => {
        const lines = event.target.result.split('\n');

        for (let line = 0; line < lines.length; line++) {
          let data = lines[line].split(',');

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
      const data = { fieldNotes: this.fieldNotes, comment: this.comment }

      this.addLogs(data)
    }
  }
}
</script>

<style scoped>
.dashboard {
  height: calc(100vh - 64px);
  padding: 0;
  overflow: hidden;
}

.dashboard .right {
  height: calc(100vh - 64px);
}
</style>