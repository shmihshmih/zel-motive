<template>
  <div id="app">

  <loader v-if="false" />
  <topMenu v-if="this.$route.path != '/' "/>
  <router-view />
  </div>
</template>

<script>
import loader from '@/components/loader.vue'
import topMenu from '@/components/topMenu.vue'
export default {
  name: 'App',
  data() {
    return {
      bibliography: [
        {id:1, author: "kashtanov anton", caption: "nazvanoe"},
        {id:2, author: "kashtanov anton2", caption: "nazvanoe2"},
        {id:3, author: "kashtanov anton3", caption: "nazvanoe3"},
      ],
      loading: true
    }
  },
  components: {
    loader, topMenu
  },
  methods: {
    hellloFromHighParent(id) {
      console.log('hello from high parent' + id);
      this.bibliography = this.bibliography.filter(t => t.id !== id)

    }, 
    removeLoader() {
      this.loading = false
    }
  },
  //следим за роутом для будущих манипуляций
  watch: {
    '$route' (to, from) {
      console.log(this.$route);
      console.log(to + from)
    }
  }
}
</script>

<style>
body {
    display: block;
    margin: 0;
    width: 100%;
    font-size: 12px;
    text-shadow: 0 0 1px transparent;
    padding: 0;

}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}


</style>
