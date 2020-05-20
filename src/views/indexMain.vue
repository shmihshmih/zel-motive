<template>
    <div>
        <div>
            <span>
                МБУ "Централизованная библиотечная система зеленодольского муниципального района"
            </span>
        </div>
        <div>
            <span>
                Зеленодольские мотивы в фольклоре, литературе, музыке, театре, кино и изобразительном искусстве.
            </span>
        </div>
        <div>
            <span>
                Библиографический указатель
            </span>
        </div>

        <table>
            <tr>
                <td>
                    <router-link to="/art">
                        <div class="main-menu-capsule">
                            <img src="@/assets/art.png" alt="">
                            <div>
                                <span>Изобразительное искусство</span>
                            </div>
                        </div>
                    </router-link>
                </td>
                <td>
                    <router-link to="/bibliography">
                        <div class="main-menu-capsule">
                            <img src="@/assets/bibliography.png" alt="">
                            <div>
                                <span>Библиография</span>
                            </div>
                        </div>
                    </router-link>
                </td>
                <td>
                    <router-link to="/folklore">
                        <div class="main-menu-capsule">
                            <img src="@/assets/lapti.jpeg" alt="">
                            <div>
                                <span>Фольклор</span>
                            </div>
                        </div>
                    </router-link>
                </td>
                <td>
                    <router-link to="/literature">
                        <div class="main-menu-caplsule">
                            <img src="@/assets/literature.jpeg" alt="">
                            <div>
                                <span>ПРоза и поэзия</span>
                            </div>
                        </div>
                    </router-link>
                </td>
            </tr>
            <tr>
                <td>
                    <router-link to="/movies">
                        <div class="main-menu-capsule">
                            <img src="@/assets/movies.jpeg" alt="">
                            <div>
                                <span>Кинематограф</span>
                             </div>
                        </div>
                    </router-link>
                </td>
                <td>
                    <router-link to="/music">
                        <div class="main-menu-capsule">
                            <img src="@/assets/music.jpeg" alt="">
                            <div>
                                <span>Музыка</span>
                          </div>
                         </div>
                    </router-link>
                </td>
                <td>
                    <router-link to="/theathre">
                        <div class="main-menu-capsule">
                            <img src="@/assets/theathre.jpg" alt="">
                            <div>
                               <span>Театр</span>
                            </div>
                        </div>
                    </router-link>
                </td>
                <td>
                    <router-link to="/about">
                        <div class="main-menu-capsule">
                            <img src="@/assets/about.jpeg" alt="">
                            <div>
                                <span>Об издании</span>
                            </div>
                        </div>
                    </router-link>
                </td>
            </tr>
        </table>
        <div>
            Зеленодольск 2020
        </div>

    </div>
</template>

<script>
    export default {
        methods: {
        }
    }
</script>

<style scoped>
    table {
        margin-left: auto;
        margin-right: auto;
    }
    .main-menu-capsule {
        max-width: 400px;
    }
    .main-menu-capsule img {
        width: 200px;
        display: block;
    }
    .main-menu-capsule span {
        text-align: center;
    }
</style>