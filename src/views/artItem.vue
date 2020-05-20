<template>
    <div>
        <div>
            <router-link to="/art">
                Изобразительное искусство
            </router-link>
        </div>
        <div>
            <router-link :to="{path: '/art/' + this.$route.params.type, params: {type: this.$route.params.type}}">
                тип живописи {{this.$route.path}}
            </router-link>
        </div>
        <div>
            {{ itemId }}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                itemId: this.$route.path
            }
            
        }, 
    }
</script>

<style>

</style>