<template>
  <div id="app">
    <headers></headers>
    <router-view></router-view>
  </div>
</template>

<script>
import headers from '../layouts/componentView/nav'
export default {
  name: 'App',
  components: {
    headers
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
