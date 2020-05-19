<template>
    <div id="navigator">
    <ul class="menu">
      <li>
        <router-link to="/">Главная</router-link>
        <span> | </span>
      </li>
      <li>
        <router-link to="/folklore">Фольклор</router-link>
        <span> | </span>
      </li>
      <li>
        <router-link to="/bibliography">Библиография</router-link>
        <span> | </span>
      </li>
      <li>
        <router-link to="/art">Изобразительное искусство</router-link>
        <span> | </span>
      </li>
      <li>
        <router-link to="/literature">Литература</router-link>
        <span> | </span>
      </li>
      <li>
        <router-link to="/movies">Киноматограф</router-link>
        <span> | </span>
      </li>
      <li>
        <router-link to="/music">Музыка</router-link>
        <span> | </span>
      </li>
      <li>
        <router-link to="/theathre">Театр</router-link>
        <span> | </span>
      </li>
      <li>
        <router-link to="/about">Об издании</router-link>
        <span> | </span>
      </li>
      <!-- <li>
        <router-link to="/"
          v-on:click="removeLoader">12345</router-link>
      </li> -->
    </ul>
  </div>
</template>

<script>
</script>

<style>
#navigator {
  z-index: 20;
  background-color: #505050;
  position: relative;
  -moz-user-select: none;
  -webkit-user-select: none;
}
ul.menu {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;
    text-shadow: 0 0 1px transparent;
    white-space: nowrap;
}

ul.menu li {
    display: inline;
}

ul.menu li a, ul.menu li span {
    font: 12px/29px "Verdana", sans-serif;
    color: #fff;
    text-decoration: none;
}

ul.menu li a:hover {
  text-decoration: underline;
}

ul.menu li a:active {
  text-decoration: underline;
}
</style>