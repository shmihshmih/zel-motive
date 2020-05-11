var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    }
  })


  Vue.component('folklor', {
    props: ['title'],
    template: 'folklor <h3>{{ title }}</h3>'
  })