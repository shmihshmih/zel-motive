<template>
    <div>
        <div>
            <router-link to="/bibliography">Библиография</router-link>
        </div>
        <div>
            {{bibliographyItem.id}}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bibliographyItem: {
                    id: this.$route.params.id
                }
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