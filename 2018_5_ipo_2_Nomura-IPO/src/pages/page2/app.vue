<template>
<div id="app">
  <!-- v-readyshow -->
  <main class="content_box">
    <page2></page2>
  </main>
</div>
</template>

<script>
import page2 from 'components/page2/page2';

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    checkPopup(val) {
      const body = document.querySelector('body');
      if(val) {
        body.classList.add('scroll-disable');
      } else {
        setTimeout(()=> {
          body.classList.remove('scroll-disable');
        }, 0);
      }
    }
  },
  components: {
    page2,
  }
}
</script>

<style lang="scss">
@import './../../assets/css/reset.scss';
@import './../../assets/css/p2-kv.scss';

.before-enter { opacity: 0; }

.fwb { font-weight: bold; }

body.scroll-disable {
  overflow: hidden;
  margin-left: -17px;
}

#app { overflow: hidden; }

.content_box { transition: opacity .4s; }

@media screen and (max-width: 1024px) {
  body.scroll-disable { margin-left: 0; }
}
</style>
