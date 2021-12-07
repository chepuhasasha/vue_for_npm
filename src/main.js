import Vue from 'vue';
import Test from './Test.vue';

if (document.querySelector('#armpits_of_ants')) {
  Vue.component('test', Test);
  new Vue({
    el: '#armpits_of_ants',
  });
}

export default Test;
