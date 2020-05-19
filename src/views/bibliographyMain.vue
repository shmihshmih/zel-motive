<template>
    <div>
        <ul>
            <bibliographyItem
                v-for="bibliographyItem of bibliography"
                :key="bibliographyItem"
                v-bind:bibliographyItem="bibliographyItem"
                v-on:hellloFromMidParent="hellloFromMidParent"
            />
        </ul>
        <span>
            Список библиографии!
        </span>
    </div>
</template>

<script>
    import bibliographyItem from '@/views/bibliographyItem.vue'
    export default {
        props: ['bibliography'],
        components: {
            bibliographyItem
        },
        methods: {
            hellloFromMidParent (id) {
                console.log("HI!" + id)
                this.$emit('hellloFromHighParent', id)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>