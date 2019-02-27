import Vue from 'vue'
import App from './app.vue'

Vue.config.productionTip = false;

// scroll show
Vue.directive('vpshow', {
  inViewport(el) {
    let rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight;
  },
  bind(el, binding) {
    el.classList.add('before-enter');
    el.onScroll = ()=> {
      el.classList.add('before-enter');
      if(binding.def.inViewport(el)) {
        el.classList.remove('before-enter');
        binding.def.unbind(el, binding);
      }
    }
    window.addEventListener('scroll', el.onScroll);
  },
  inserted(el, binding) {
    // el.onScroll();
  },
  unbind(el, binding) {
    window.removeEventListener('scroll', el.onScroll);
    delete el.onScroll;
  }
});

// ready show
Vue.directive('readyshow', {
  inViewport(el) {
    let rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight;
  },
  bind(el, binding) {
    el.classList.add('before-enter');
    el.show = ()=> {
      el.classList.remove('before-enter');
      binding.def.unbind(el, binding);
    }
    window.addEventListener('load', el.show);
  },
  inserted(el, binding) {
    el.show();
  },
  unbind(el, binding) {
    window.removeEventListener('load', el.show);
    delete el.show;
  }
});

new Vue({
  render: h => h(App)
}).$mount('#app');