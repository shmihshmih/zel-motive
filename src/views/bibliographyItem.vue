<template>
    <li>
        <span 
            v-bind:class="{activeLink: !!bibliographyItem.id }"
            v-on:click="$emit('hellloFromMidParent', bibliographyItem.id)"
            >
            <strong>
                {{ bibliographyItem.id}}
            </strong>
            <span>
                {{ bibliographyItem.author }} / {{ bibliographyItem.caption }}
            </span>
            <span>
                Список библиографии
            </span>
        </span>
    </li>
</template>

<script>
    export default {
        props: {
            bibliographyItem: {
                type: Object, 
                required: true
            }
        }
    }
</script>

<style scoped>
 li {
     border: 1px solid #ccc;
     display: flex;
     padding: .5rem 2rem;
     justify-content: space-between;
     margin-bottom: 1rem;
 }
 .activeLink {
     text-decoration: underline;
 }
</style>