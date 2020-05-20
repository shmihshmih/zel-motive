<template>
    <div>
        Изобразительное искусство
        <table>
            <tr>
                <td 
                    v-for="artType of artTypes"
                    :key="artType.path"
                >
                    <router-link :to="{path: '/art/' + artType.path, params: { type: artType.path}}">{{ artType.caption }}</router-link>

                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                notIndex: true,
                artTypes: [
                    {
                        caption: "Живопись",
                        path: 'zhiv'
                    },
                    {
                        caption: "Бытовая",
                        path: "bytov"
                    }
                ]
            }
        },
    }
</script>

<style>
    table {
        margin-left: auto;
        margin-right: auto;
    }
</style>