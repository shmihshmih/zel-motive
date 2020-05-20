<template>
    <div>
        <div>
            <div>
                <router-link to="/art">Изобразительное искусство</router-link>
            </div>
            {{ type }}
            <div 
                v-for="item of items"
                :key="item.caption"
                class="art-item-capsule ">
                
                <router-link :to="{ path: '/art/' + type + '/' + item.id, params: {item: item.id}}">
                                    <img src="https://via.placeholder.com/150" alt="image">
                <div>
                    {{ item.caption }}
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                type: this.$route.params.type,
                items: [
                    {id: 1, name: "assadasd", caption: "asdasdasd", author: "asdasda", description: "asdsdasd"},
                    {id: 2, name: "assadasd", caption: "asdasdasd", author: "asdasda", description: "asdsdasd"},
                    {id: 3, name: "assadasd", caption: "asdasdasd", author: "asdasda", description: "asdsdasd"},
                    {id: 4, name: "assadasd", caption: "asdasdasd", author: "asdasda", description: "asdsdasd"},
                    {id: 5, name: "assadasd", caption: "asdasdasd", author: "asdasda", description: "asdsdasd"},
                    {id: 6, name: "assadasd", caption: "asdasdasd", author: "asdasda", description: "asdsdasd"},
                ]
            }
        }
    }
</script>

<style>
.art-item-capsule {
    display: flex;
    margin: 3px;
}
</style>