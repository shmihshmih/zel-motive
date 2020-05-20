<template>
    <div>
        <ul>
            <li 
                v-for="bibliographyItem of bibliography"
                :key="bibliographyItem.id"
            > 
                <router-link :to="{path: '/bibliography/' + bibliographyItem.id, params: {bibliographyItemId: bibliographyItem.id}}">
                    {{ bibliographyItem.id }} / {{ bibliographyItem.author }} / {{ bibliographyItem.caption }} / {{ bibliographyItem.year }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bibliography: [
                    {
                        id: 1, author: "автор", caption: "заголовок", year: "год издания"
                    },
                                        {
                        id: 2, author: "автор", caption: "заголовок", year: "год издания"
                    },
                                        {
                        id: 3, author: "автор", caption: "заголовок", year: "год издания"
                    },
                                        {
                        id: 4, author: "автор", caption: "заголовок", year: "год издания"
                    },
                                        {
                        id: 5, author: "автор", caption: "заголовок", year: "год издания"
                    },
                ]
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