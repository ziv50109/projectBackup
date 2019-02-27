<template>
<div id="app">
  <master class="master" v-readyshow></master>
</div>
</template>

<script>
import master from 'components/index/master';

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    master,
  }
}
</script>

<style lang="scss">
@import './../../assets/css/reset.scss';

.master { transition: opacity .4s; }
.before-enter { opacity: 0; }
</style>
