<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

  <ul>
    <li>
      <h2>фольклор</h2>
    </li>
    <li>
      <h2>поэзия и проза</h2>
      <h3>проза</h3>
      <h3>поэзия</h3>
    </li>
    <li>
      <h2>музыка</h2>
    </li>
    <li>
      <h2>театр</h2>
    </li>
    <li>
      <h2>киноискусство</h2>
    </li>
    <li>
      <h2>изобразительное искусство</h2>
      <h3>иконопись</h3>
      <h3>крмпьютерная графика</h3>
      <h3>графика</h3>
      <h3>скульптура</h3>
      <h3>декоративно прикладное искусство</h3>
      <h3>художественная фотография</h3>
    </li>
  </ul>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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
