<template>
  <div id="app">
     <p>hello Word</p>
     <add></add>
     <hr>
     <sub-button></sub-button>
  </div>
</template>

<script>
 
import add from './components/add'
import subButton from './components/sub'
export default {
  name: 'App',
  components: {
    add,
    subButton
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
