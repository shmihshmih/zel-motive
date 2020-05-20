<template>
    <div>
        <div>
            <router-link to="/literature">Литература</router-link>
        </div>
        <div>
            {{ literatureItems.caption }}
        </div>
        <div>
            {{  literatureItems.author }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                literatureItem: this.$route.params.id,
                literatureItems: 
                    {
                        id: 1, caption: "nazvanie", author: "author"
                    }
                
            }
        }
    }
</script>

<style>
</style>