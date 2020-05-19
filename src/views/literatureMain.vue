<template>
    <div>
        литература
    </div>
</template>

<script>
//import bibliographyList from '@/components/bibliographyList.vue'
export default {
  data() {
    return {
      bibliography: [
        {id:1, author: "kashtanov anton", caption: "nazvanoe"},
        {id:2, author: "kashtanov anton2", caption: "nazvanoe2"},
        {id:3, author: "kashtanov anton3", caption: "nazvanoe3"},
      ]
    }
  },
  components: {
    
  },
  methods: {
    hellloFromHighParent(id) {
      console.log('hello from high parent' + id);
      this.bibliography = this.bibliography.filter(t => t.id !== id)
    }
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
