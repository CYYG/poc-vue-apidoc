<template>
  <div class="hello">
    <h2>Cette doc utilise VueJS ainsi que le composant Redoc (React)</h2>
    <h2>Elle peut intégrer les API de Confluence pour le guide</h2>
  </div>
</template>

<script>
import { ReactInVue } from 'vuera'
import { RedocStandalone } from 'redoc';

export default {
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
