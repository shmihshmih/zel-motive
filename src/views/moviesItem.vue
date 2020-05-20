<template>
    <div>
        <div>
            <router-link to="/movies">Кинематограф</router-link>
        </div>
        <div>
            {{moviesItem}}
        </div>
        <div>
            {{movie.caption}}
        </div>
        <div>
            {{movie.author}}
        </div>
    </div>
</template>

<script>
    export default {
         data() {
            return {
                movie: {id: 1, caption: "nazvanie", author: "avtor"},
                moviesItem: this.$route.params.id
            }
        }
    }
</script>

<style>
</style>