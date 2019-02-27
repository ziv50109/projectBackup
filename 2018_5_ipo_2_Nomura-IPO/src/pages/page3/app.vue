<template>
<div id="app">
  <div ref="master">
  </div>
  <main class="content_box" ref="main" v-readyshow>
    <page3 :isViewing="inContent" :masterHeight="masterHeight"></page3>
  </main>
</div>
</template>

<script>
import page3 from 'components/page3/page3';

export default {
  name: 'app',
  data() {
    return {
      inContent: false,
      masterHeight: 0,
    };
  },
  mounted() {
    this.init();
    window.addEventListener('scroll', this.checkViewing);
    window.addEventListener('resize', this.init);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkViewing);
  },
  methods: {
    init() {
      this.masterHeight = this.$refs.master.offsetHeight;
    },
    checkViewing() {
      let rect = this.$refs.main.getBoundingClientRect();
      if(rect.top <= 0) {
        this.inContent = true;
      } else {
        this.inContent = false;
      }
    },
  },
  components: {
    page3,
  }
};
</script>

<style lang="scss">
@import './../../assets/css/reset.scss';
@import './../../assets/css/p3-kv.scss';

.before-enter { opacity: 0; }

body.scroll-disable {
  overflow: hidden;
  margin-left: -17px;
}

.fwb { font-weight: bold; }

#app { overflow: hidden; }

.content_box { transition: opacity .4s; }
.master { }

@media screen and (max-width: 1024px) {
  body.scroll-disable { margin-left: 0; }
}
</style>
