<template>
  <div class="title_wrap">
    <div class="title_box">
      <h1>野村<span class="color-blue">邊境市場</span>高收益主權債基金<p class="title2">(本基金主要係投資於非投資等級之高風險債券且配息來源可能為本金)</p></h1>
      <p><span class="title3"><div class="icon t1"></div>境內首檔</span><span>邊境新星躍起，新興收益債升級</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'titlewrap',
  inheritAttrs: false,
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.color-blue { color: #004695; }

.title_wrap {
  position: relative;
  padding: 16px 0 30px;
  background-color: #fff;
  box-shadow: 0 5px 10px rgba(#000, .2);
  z-index: 1;
  .title_box {
    max-width: 780px;
    width: 100%;
    margin: 0 auto;
  }
  h1 {
    letter-spacing: 7.5px;
    text-align: justify;
    line-height: 1.2;
    font-size: 48px;
    font-weight: bold;
    color: #221815;
    .title2 {
      letter-spacing: 0;
      display: block;
      margin: 0;
      font-size: 48px;
      color: #898989;
    }
  }
  p {
    margin-top: 22px;
    font-size: 36px;
    font-weight: bold;
    color: #004695;
    .title3 {
      position: relative;
      display: inline-block;
      height: 63px;
      line-height: 1.75;
      margin: 0 14px 0 28px;
      padding: 0 37px 0 30px;
      color: #fff;
      background-color: #004695;
    }
  }
}
.icon {
  background-image: url(./../../assets/img/com/p1np2-s.png);
  background-repeat: no-repeat;
  &.t1 {
    position: absolute;
    top: -17px;
    left: -20px;
    width: 40px;
    height: 80px;
    background-position: -107px -10px;
  }
}

@media screen and (max-width: 1400px) {
  .title_wrap {
    padding: 16/1400*100vw 0 30/1400*100vw;
    .title_box { max-width: 820/1400*100vw; }
    h1 {
      font-size: 48/1400*100vw;
      .title2 { font-size: 48/1400*100vw; }
    }
    p {
      margin-top: 10/1400*100vw;
      font-size: 32/1400*100vw;
      .title3 {
        height: 63/1400*100vw;
        line-height: 1.66;
        margin-left: 20/1400*100vw;
        padding: 0 40/1400*100vw;
        font-size: 38/1400*100vw;
        border-radius: 4/1400*100vw;
      }
    }
  }
  .icon {
    background-size: 200/1400*100vw 112/1400*100vw;
    &.t1 {
      top: -17/1400*100vw;
      left: -20/1400*100vw;
      width: 40/1400*100vw;
      height: 80/1400*100vw;
      background-position: -107/1400*100vw -10/1400*100vw;
    }
  }
}


@media screen and (max-width: 1024px) {
  .title_wrap {
    padding: 40px 0 50px;
    .title_box {
      max-width: 880px;
      padding: 0 20px;
      letter-spacing: 2.5px;
    }
    h1 {
      line-height: 1.2;
      font-size: 52px;
      .title2 {
        display: inline;
        line-height: 1.2;
        font-size: 52px;
      }
    }
    p {
      text-align: center;
      margin-top: 22px;
      font-size: 36px;
      .title3 {
        height: 69px;
        line-height: 1.5;
        margin: 0 14px 22px 28px;
        padding: 0 37px 0 30px;
        font-size: 50px;
      }
      span {
        display: block;
        font-size: 40px;
      }
    }
  }
  .icon {
    background-size: 200*1.1px 112*1.1px;
    &.t1 {
      top: -17*1.1px;
      left: -20*1.1px;
      width: 40*1.1px;
      height: 80*1.1px;
      background-position: -107*1.1px -10*1.1px;
    }
  }
}


@media screen and (max-width: 750px) {
  .title_wrap {
    padding: 40/750*100vw 0 50/750*100vw;
    background-color: #eee;
    box-shadow: 0 5/750*100vw 10/750*100vw rgba(#000, .2);
    .title_box {
      max-width: 880/750*100vw;
      padding: 0 20/750*100vw;
    }
    h1 {
      font-size: 52/750*100vw;
      .title2 { font-size: 52/750*100vw; }
    }
    p {
      margin-top: 22/750*100vw;
      font-size: 36/750*100vw;
      .title3 {
        height: 69/750*100vw;
        margin: 0 14/750*100vw 22/750*100vw 28/750*100vw;
        padding: 0 37/750*100vw 0 30/750*100vw;
        font-size: 50/750*100vw;
      }
      span { font-size: 40/750*100vw; }
    }
  }
  .icon {
    background-size: 200*1.1/750*100vw 112*1.1/750*100vw;
    &.t1 {
      top: -17*1.1/750*100vw;
      left: -20*1.1/750*100vw;
      width: 40*1.1/750*100vw;
      height: 80*1.1/750*100vw;
      background-position: -107*1.1/750*100vw -10*1.1/750*100vw;
    }
  }
}
</style>
