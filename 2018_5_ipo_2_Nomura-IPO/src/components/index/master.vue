<template>
<div class="wrap">
  <div class="logo"></div>
  <div class="main">
    <div class="box box1">
      <img class="img img-logo" src="~assets/img/master/master-logo.png" alt="野村投信 債創新">
    </div>
    <div class="box box2">
      <a class="box-content box2-content box2-1" href="page1.html" @click="gtagEvent(0)">
        <div class="btn bg-blue">
          <p>邊境市場債</p>
          <svg viewBox="0 0 232.3 121.9"><path d="M0 5.7L5.7 0l110.5 110.4L226.6 0l5.7 5.7-116.1 116.2z"/></svg>
        </div>
        <img class="img img1" src="~assets/img/master/bg2-1.png" alt="">
      </a>
      <a class="box-content box2-content box2-2" href="page2.html" @click="gtagEvent(1)">
        <div class="btn bg-red">
          <p>中國境內債</p>
          <svg viewBox="0 0 232.3 121.9"><path d="M0 5.7L5.7 0l110.5 110.4L226.6 0l5.7 5.7-116.1 116.2z"/></svg>
        </div>
        <img class="img img2" src="~assets/img/master/bg2-2.png" alt="">
      </a>
    </div>
    <div class="box box3">
      <a class="box-content box3-content box3-1" href="page3.html" @click="gtagEvent(2)">
        <div class="btn bg-yellow">
          <p>階梯到期債</p>
          <svg viewBox="0 0 232.3 121.9"><path d="M0 5.7L5.7 0l110.5 110.4L226.6 0l5.7 5.7-116.1 116.2z"/></svg>
        </div>
        <img class="img img3" src="~assets/img/master/bg3-1.png" alt="">
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'master',
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    gtagEvent(val) {
      let label = ['邊境債', '中國債', '階梯債'];
      gtag('event', '點擊', {
        'event_category': '債創新首頁',
        'event_label': label[val]
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  z-index: 3;
  overflow: hidden;
}

.logo {
  position: absolute;
  top: 48px;
  left: 48px;
  width: 135px;
  height: 92px;
  background-image: url(./../../assets/img/com/logo.png);
  background-repeat: no-repeat;
  background-size: contain;
}

.main {
    display: flex;
    width: 100%;
}
.box {
  height: 100vh;
  min-height: 703px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  &1 {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
  }
  &2 {
    flex: 2.1;
    display: flex;
    background-image: url(./../../assets/img/master/bg1.png);
    overflow: hidden;
  }
  &3 {
    flex: 1.05;
    background-image: url(./../../assets/img/master/bg2.png);
  }
  &-content {
    display: flex;
    height: 100%;
    cursor: pointer;
    .btn {
      align-self: flex-end;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      height: 7.73vw;
      max-height: 126px;
      z-index: 1;
    }
    .bg-blue { background-color: rgba(#014694,.8); }
    .bg-red { background-color: rgba(#c71429,.8); }
    .bg-yellow { background-color: rgba(#fba221,.8); }
    p {
      font-size: 42px;
      font-weight: bold;
      color: #fff;
    }
    svg {
      width: 39px;
      height: 20px;
      margin-top: 12px;
      fill: #fff;
    }
  }
  &2-content {
    position: relative;
    width: 50%;
  }
  &3-content {
    position: relative;
    width: 100%;
  }
}
.img {
  position: absolute;
  &-logo {
    position: static;
    max-width: 336px;
    width: 100%;
  }
  &1 {
    left: -300px;
    bottom: -320px;
    transform: scale(.77);
  }
  &2 {
    left: -170px;
    bottom: -10px;
    transform: scale(.77);
  }
  &3 {
    top: 0;
    left: -23px;
  }
  @media screen and (max-width: 1800px) {
    &-logo {transform-origin: center; }
    &1 {
      left: -200px;
      transform-origin: left bottom;
      transform: scale(.69);
    }
    &2 {
      left: -30px;
      bottom: 0;
      transform-origin: left bottom;
      transform: scale(.69);
    }
    &3 {
      transform-origin: left top;
      transform: scale(.9);
    }
  }
  @media screen and (max-width: 1600px) {
    &1 {
      bottom: -174/1600*100vw;
      width: 840/1600*100vw;
      transform: scale(.9);
    }
    &2 {
      bottom: 42/1600*100vw;
      width: 1066/1600*100vw;
      transform: scale(.9);
    }
    &3 {
      width: 498/1600*100vw;
      transform: scale(.9);
    }
  }
}


@media screen and (max-width: 1280px) {
  .box {
    &-content {
      .btn {
        height: 100%;
        max-height: 100/1280*100vw;
      }
      p { font-size: 36/1280*100vw; }
      svg {
        width: 30/1280*100vw;
        height: 15/1280*100vw;
        margin-top: 6/1280*100vw;
      }
    }
  }
  .img {
    &1 {
      left: -220/1280*100vw;
      bottom: -180/1280*100vw;
      width: 840*.9/1280*100vw;
      transform: scale(.9);
    }
    &2 {
      top: 40/1280*100vw;
      left: -50/1280*100vw;
      width: 1066*.9/1280*100vw;
      transform: scale(.9);
    }
    &3 {
      top: auto;
      bottom: 120/1280*100vw;
      left: -20/1280*100vw;
      transform: scale(.9);
    }
  }
}


@media screen and (max-width: 1023px) {
  .logo {
    top: 46px;
    left: 48px;
    width: 177px;
    height: 120px;
  }
  .main { flex-direction: column; }
  .box {
    height: 25vh;
    min-height: 236px;
    &1 { justify-content: flex-end; }
    &2 {
      height: 50vh;
      min-height: 236*2px;
      flex-direction: column;
      background: none;
      overflow: initial;
    }
    &3 { z-index: 1; }
    &-content {
      justify-content: flex-end;
      .btn {
        width: 94px;
        height: 100%;
        max-height: none;
      }
      p {
        writing-mode: vertical-lr;
        -ms-writing-mode: tb-lr;
        font-size: 36px;
      }
      svg {
        width: 32px;
        height: 20px;
        margin-top: 12px;
        margin-left: 6px;
      }
    }
    &2-content {
      width: 100%;
      height: 25vh;
      min-height: 50%;
      background-size: 1880*.6px 710*.6px;
      background-repeat: no-repeat;
      &.box2-1 {
        background-image: url(./../../assets/img/p1/p1-kv_bg-pc.jpg);
        background-position: 48% 74%;
      }
      &.box2-2 {
        overflow: hidden;
        justify-content: flex-start;
        background-image: url(./../../assets/img/p2/p2-kv_bg-pc.jpg);
        background-position: 86% 100%;
      }
    }
    &3-content { overflow: hidden; }
  }
  .img {
    &-logo {
      max-width: 236px;
      margin-right: 52px;
    }
    &1, &2, &3 {
      top: 0;
      bottom: auto;
      left: 0;
      right: 0;
      margin: auto;
    }
    &1 {
      top: -12%;
      left: -18%;
      right: auto;
      width: 624px;
      transform: scale(1);
    }
    &2 {
      transform-origin: top center;
      transform: scale(1) rotate(22deg);
      top: 22%;
      left: 50%;
      width: 730px;
    }
    &3 {
      top: -140%;
      left: -6%;
      width: 406px;
      transform: scale(1);
    }
  }
}


@media screen and (max-width: 750px) {
  .logo {
    top: 46/750*100vw;
    left: 48/750*100vw;
    width: 177/750*100vw;
    height: 120/750*100vw;
  }
  .box {
    min-height: 236/750*100vw;
    &2 { min-height: 236*2/750*100vw; }

    &-content {
      .btn { width: 94/750*100vw; }
      p {
        margin-left: 4/750*100vw;
        font-size: 40/750*100vw;
        letter-spacing: 1px;
      }
      svg {
        width: 32/750*100vw;
        height: 20/750*100vw;
        margin-top: 12/750*100vw;
        margin-left: 8/750*100vw;
      }
    }
    &2-content {
      background-size: 1880*.66/750*100vw 710*.66/750*100vw;
      &.box2-1 {
        background-position: 53% 76%;
      }
      &.box2-2 {
        background-position: 70% 100%;
      }
    }
  }
  .img {
    &-logo {
      max-width: 236/750*100vw;
      margin-right: 52/750*100vw;
    }
    &1 {
      top: -12%;
      left: -18%;
      right: auto;
      width: 624/750*100vw;
    }
    &2 {
      transform-origin: top center;
      transform: scale(1) rotate(22deg);
      top: 22%;
      left: 47%;
      width: 730/750*100vw;
    }
    &3 {
      top: -104%;
      left: -6%;
      width: 406/750*100vw;
    }
  }
}
</style>
