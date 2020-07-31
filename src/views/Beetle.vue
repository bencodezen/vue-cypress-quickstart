<script>
import axios from 'axios'

export default {
  methods: {
    sendBeetleRequest() {
      axios.post('/beetles-2').then(response => console.log(response))
    }
  }
}
</script>

<template>
  <main>
    <h1>Beetles</h1>
    <input type="text" id="search" />
    <div id="beetle-results"></div>
    <button id="sendRequest" @click="sendBeetleRequest">Send Request</button>
  </main>
</template>

<style></style>
