<template>
    <div>
        <div>Фильмы</div>
    <div>
        <ul>
            <li 
                v-for="movie of movies"
                :key="movie.id"
            > 
                <router-link :to="{path: '/movies/' + movie.id, params: {movieItemId: movie.id}}">
                    {{ movie.id }} / {{ movie.author }} / {{ movie.caption }}
                </router-link>
            </li>
        </ul>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                movies: [
                    {id: 1, caption: "nazvanie", author: "avtor"},
                    {id: 2, caption: "nazvanie", author: "avtor"},
                    {id: 3, caption: "nazvanie", author: "avtor"},
                    {id: 4, caption: "nazvanie", author: "avtor"},
                    {id: 5, caption: "nazvanie", author: "avtor"},
                    {id: 6, caption: "nazvanie", author: "avtor"},
                ]
            }
        }
    }
</script>