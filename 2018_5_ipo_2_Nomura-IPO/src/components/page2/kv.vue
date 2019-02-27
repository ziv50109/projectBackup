<template>
<div class="kv_wrap">
  <div class="kv_box">
    <div class="logo bg_com"></div>
    <div class="hand bg_com"></div>
  </div>
</div>
</template>

<script>
export default {
  name: 'kv',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.mobile { display: none; }

.bg_com {
  background-repeat: no-repeat;
  background-size: contain;
}

.kv_wrap {
  width: 100%;
  height: 710px;
  padding-left: 264px;
  background-image: url(./../../assets/img/p2/p2-kv_bg-pc.jpg);
  background-size: cover;
  overflow: hidden;
}
.kv_box {
  position: relative;
  max-width: 1500px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 46px;
  z-index: 1;
}
.logo {
  width: 135px;
  height: 92px;
  background-image: url(./../../assets/img/com/logo.png);
}
.hand {
  position: relative;
  top: 100px;
  right: -514px;
  width: 1386*.87px;
  height: 1066*.87px;
  background-image: url(./../../assets/img/master/bg2-2.png);
  background-size: 1386*.87px 1066*.87px;
}


@media screen and (max-width: 1400px) {
  .kv_wrap { background-position: -140/1400*100vw 0; }
  .hand {
    top: 100/1400*100vw;
    right: -404/1400*100vw;
    width: 1386*.8/1400*100vw;
    height: 1066*.8/1400*100vw;
    background-size: 1386*.8/1400*100vw 1066*.8/1400*100vw;
  }
}


@media screen and (max-width: 1280px) {
  .kv_wrap {
    height: 710/1280*100vw;
    padding-left: 264/1280*100vw;
  }
  .kv_box {
    max-width: 1216/1280*100vw;
    padding-top: 46/1280*100vw;
  }
  .logo {
    width: 135/1280*100vw;
    height: 92/1280*100vw;
  }
}


@media screen and (max-width: 1024px) {
  .kv_wrap {
    height: 687/1024*100vw;
    padding: 0;
    background-position: 36% 0;
  }
  .kv_box {
    max-width: 100%;
    padding-top: 20/1024*100vw;
  }
  .logo {
    width: 177*.82/1024*100vw;
    height: 120*.82/1024*100vw;
    margin-left: 20/1024*100vw;
  }
  .hand {
    top: 114/1024*100vw;
    right: -440/1024*100vw;
    width: 1386*.7/1024*100vw;
    height: 1066*.7/1024*100vw;
    background-size: 1386*.7/1024*100vw 1066*.7/1024*100vw;
  }
}


@media screen and (max-width: 750px) {
  .kv_wrap {
    height: 687/750*100vw;
    background-image: url(./../../assets/img/p2/p2-kv_bg-m.jpg);
  }
  .kv_box { padding-top: 38/750*100vw; }
  .logo {
    width: 177/750*100vw;
    height: 120/750*100vw;
    margin-left: 38/750*100vw;
  }
  .hand {
    top: 90/750*100vw;
    right: -178/750*100vw;
    width: 1386*.74/750*100vw;
    height: 1066*.74/750*100vw;
    background-size: 1386*.74/750*100vw 1066*.74/750*100vw;
  }
}
</style>
