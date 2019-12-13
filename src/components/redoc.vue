<template>
  <div class="hello">
    <redoc-standalone specUrl="http://petstore.swagger.io/v2/swagger.json" />
  </div>
</template>

<script>
import { RedocStandalone } from 'redoc';

export default {
  name: 'redoc',
  data () {
    return {
      specUrl: 'http://petstore.swagger.io/v2/swagger.json',
    }
  },
  components: {
    'redoc-standalone': RedocStandalone
  }
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
