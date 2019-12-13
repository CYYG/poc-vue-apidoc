<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <router-link tag="li" to="/redoc">
      <a>Commande API REf</a>
    </router-link>
    <router-link tag="li" to="/guide">
      <a>Commande Guide</a>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Aladin API DOC',
  data () {
    return {
      title: 'Welcome to Vue API DOC'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
