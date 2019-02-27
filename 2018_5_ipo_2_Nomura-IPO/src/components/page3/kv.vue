<template>
<div class="kv_wrap">
  <div class="kv_box">
    <div class="logo bg_com"></div>
    <div class="cleek_wrap">
      <div class="cleek bg_com"></div>
      <div class="cleek-shadow bg_com"></div>
      <div class="ball-shadow bg_com"></div>
    </div>
    <div class="ball bg_com"></div>
    <div class="text bg_com"></div>
    <div class="slogan bg_com"><p class="mobile">*以上還款比例假設投資人自期初進場並持續持有至到期之情境下期初單位數之比例</p></div>
    <div class="type_wrap">
      <span class="bg-red">新台幣</span>
      <span class="bg-green">美元</span>
      <span class="bg-blue">人民幣</span>
      <span>累積</span>
      <span>季配</span>
    </div>
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
  padding-left: 220px;
  background-image: url(./../../assets/img/p3/kv_bg-pc.jpg);
  background-position: center;
  background-size: cover;
}
.kv_box {
  position: relative;
  max-width: 1216px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 46px;
  z-index: 1;
}
.logo {
  position: relative;
  left: 2%;
  width: 135px;
  height: 92px;
  background-image: url(./../../assets/img/com/logo.png);
}

.cleek_wrap {
  position: absolute;
  top: -184px;
  left: 52px;
  width: 596px;
  height: 697px;
  z-index: 1;
  .cleek, .cleek-shadow, .ball-shadow {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .cleek {
    background-image: url(./../../assets/img/p3/kv-cleek.png);
    z-index: 1;
  }
  .cleek-shadow {
    background-image: url(./../../assets/img/p3/kv-cleek-s.png);
  }
  .ball-shadow {
    background-image: url(./../../assets/img/p3/kv-ball-s.png);
    z-index: 1;
  }
}

.ball {
  position: absolute;
  left: 432px;
  bottom: 15px;
  width: 244px;
  height: 378px;
  background-image: url(./../../assets/img/p3/kv-ball.png);
  z-index: 2;
}

.text {
  position: absolute;
  left: 182px;
  bottom: 37px;
  max-width: 305px;
  height: 162px;
  background-image: url(./../../assets/img/p3/kv-text.png);
  z-index: 3;
}

.slogan {
  position: absolute;
  top: 133px;
  right: 168px;
  width: 395px;
  height: 532px;
  background-image: url(./../../assets/img/p3/kv-slogan-pc.png);
}

.type_wrap {
  position: absolute;
  top: 32px;
  right: 220px;
  width: 310px;
  text-align: center;
  z-index: 1;
  span {
    display: inline-block;
    width: 87px;
    line-height: 1.5;
    margin: 4px;
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    border-radius: 14px;
    border: 2px solid #fff;
  }
  .bg-red {
    background-color: #E8342F;
    border-color: #E8342F;
  }
  .bg-green {
    background-color: #009A3E;
    border-color: #009A3E;
  }
  .bg-blue {
    background-color: #007AA3;
    border-color: #007AA3;
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
  .cleek_wrap {
    top: -184/1280*100vw;
    left: -125/1280*100vw;
    width: 596/1280*100vw;
    height: 697/1280*100vw;
  }
  .ball {
    left: 255/1280*100vw;
    bottom: 15/1280*100vw;
    width: 244/1280*100vw;
    height: 378/1280*100vw;
  }
  .text {
    left: 5/1280*100vw;
    bottom: 37/1280*100vw;
    max-width: 305/1280*100vw;
    height: 162/1280*100vw;
  }
  .slogan {
    top: 133/1280*100vw;
    right: 168/1280*100vw;
    width: 395/1280*100vw;
    height: 532/1280*100vw;
  }
  .type_wrap {
    top: 32/1280*100vw;
    right: 220/1280*100vw;
    width: 310/1280*100vw;
    span {
      width: 87/1280*100vw;
      margin: 4/1280*100vw;
      font-size: 20/1280*100vw;
      border-radius: 14/1280*100vw;
      border: 2/1280*100vw solid #fff;
    }
  }
}

$kv-scale: .84;
@media screen and (max-width: 1024px) {
  .mobile { display: block; }
  .kv_wrap {
    height: 830/1024*100vw;
    padding-left: 0;
    background-image: url(./../../assets/img/p3/kv_bg-m.jpg);
  }
  .kv_box {
    max-width: 100%;
    padding-top: 38/1024*100vw;
  }
  .logo {
    left: auto;
    width: 177/1024*100vw;
    height: 120/1024*100vw;
    margin-left: 50/1024*100vw;
  }
  .cleek_wrap {
    top: 0;
    left: 40/1024*100vw;
    width: 605*$kv-scale/1024*100vw;
    height: 708*$kv-scale/1024*100vw;
  }
  .ball {
    left: 366/1024*100vw;
    bottom: 66/1024*100vw;
    width: 250*$kv-scale/1024*100vw;
    height: 386*$kv-scale/1024*100vw;
  }
  .text {
    left: 178/1024*100vw;
    bottom: 94/1024*100vw;
    max-width: 325*$kv-scale/1024*100vw;
    height: 173*$kv-scale/1024*100vw;
  }
  .slogan {
    top: 200/1024*100vw;
    right: 152/1024*100vw;
    width: 350/1024*100vw;
    height: 425/1024*100vw;
    background-image: url(./../../assets/img/p3/kv-slogan-m.png);
    p {
      position: absolute;
      bottom: -84/1024*100vw;
      line-height: 1.2;
      font-size: 22/1024*100vw;
      color: #fff;
    }
  }
  .type_wrap {
    top: 54/1024*100vw;
    right: 300/1024*100vw;
    width: 330/1024*100vw;
    span {
      width: 96/1024*100vw;
      line-height: 1.5;
      margin: 4/1024*100vw;
      font-size: 22/1024*100vw;
      border-radius: 16/1024*100vw;
      border: 2/1024*100vw solid #fff;
    }
  }
}


@media screen and (max-width: 750px) {
  .kv_wrap { height: 830/750*100vw; }
  .kv_box { padding-top: 38/750*100vw; }
  .logo {
    width: 177/750*100vw;
    height: 120/750*100vw;
    margin-left: 38/750*100vw;
  }
  .cleek_wrap {
    top: 0;
    left: -106/750*100vw;
    width: 605*$kv-scale/750*100vw;
    height: 708*$kv-scale/750*100vw;
  }
  .ball {
    left: 214/750*100vw;
    bottom: 66/750*100vw;
    width: 250*$kv-scale/750*100vw;
    height: 386*$kv-scale/750*100vw;
  }
  .text {
    left: 30/750*100vw;
    bottom: 84/750*100vw;
    max-width: 325*$kv-scale/750*100vw;
    height: 180*$kv-scale/750*100vw;
  }
  .slogan {
    top: 184/750*100vw;
    right: 28/750*100vw;
    width: 350/750*100vw;
    height: 426/750*100vw;
    p {
      left: 24/750*100vw;
      bottom: -84/750*100vw;
      font-size: 22/750*100vw;
      @media screen and (max-width: 359px) {
        bottom: -140/750*100vw;
      }
    }
  }
  .type_wrap {
    top: 50/750*100vw;
    right: 144/750*100vw;
    width: 360/750*100vw;
    span {
      width: 96/750*100vw;
      margin: 4/750*100vw;
      font-size: 22/750*100vw;
      border-radius: 16/750*100vw;
      border: 2/750*100vw solid #fff;
    }
  }
}
</style>
