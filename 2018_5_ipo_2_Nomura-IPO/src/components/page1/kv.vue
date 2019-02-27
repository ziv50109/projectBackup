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
  background-image: url(./../../assets/img/p1/p1-kv_bg-pc.jpg);
  background-position: center;
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
  top: 0;
  left: -120px;
  width: 1092*.98px;
  height: 1229*.98px;
  background-image: url(./../../assets/img/master/bg2-1.png);
  background-size: 1092*.98px 1229*.98px;
}


@media screen and (max-width: 1600px) {
  .hand {
    top: 60px;
    left: -200px;
    width: 1092*.8px;
    height: 1229*.8px;
    background-size: 1092*.8px 1229*.8px;
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
  .hand {
    top: 100/1280*100vw;
    left: -200/1280*100vw;
    width: 1092*.8/1280*100vw;
    height: 1229*.8/1280*100vw;
    background-size: 1092*.8/1280*100vw 1229*.8/1280*100vw;
  }
}


@media screen and (max-width: 1024px) {
  .kv_wrap {
    height: 687/1024*100vw;
    padding: 0;
    background-position-x: 64%;
  }
  .kv_box {
    max-width: 100%;
    padding-top: 38/1024*100vw;
  }
  .logo {
    width: 177/1024*100vw;
    height: 120/1024*100vw;
    margin-left: 50/1024*100vw;
  }
  .hand {
    top: 60px;
    left: 0;
  }
}


@media screen and (max-width: 768px) {
  .kv_wrap {
    height: 687px;
    background-image: url(./../../assets/img/p1/p1-kv_bg-m.jpg);
  }
  .kv_box { padding-top: 38px; }
  .logo {
    width: 177px;
    height: 120px;
    margin-left: 38px;
  }
  .hand {
    top: 80px;
    left: -240px;
    width: 1092*.78px;
    height: 1229*.78px;
    background-size: 1092*.78/750*100vw 1229*.78px;
  }
}
@media screen and (max-width: 750px) {
  .kv_wrap {
    height: 687/750*100vw;
  }
  .kv_box { padding-top: 38/750*100vw; }
  .logo {
    width: 177/750*100vw;
    height: 120/750*100vw;
    margin-left: 38/750*100vw;
  }
  .hand {
    top: 80/750*100vw;
    left: -240/750*100vw;
    width: 1092*.78/750*100vw;
    height: 1229*.78/750*100vw;
    background-size: 1092*.78/750*100vw 1229*.78/750*100vw;
  }
}
</style>
