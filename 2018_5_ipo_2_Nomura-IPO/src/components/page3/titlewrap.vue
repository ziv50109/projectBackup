<template>
  <div class="title_wrap">
    <div class="title_box">
      <h1>野村<span class="fwb">五年階梯到期</span>新興市場債券基金<p class="title2">(本基金有相當比重投資於非投資等級之高風險債券且配息來源可能為本金)</p></h1>
      <p>全球首創【階梯到期】債券基金<span>再度強力登場</span></p>
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
  beforeDestroy() {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
.title_wrap {
  padding: 16px 0 30px;
  background-color: #eee;
  .title_box {
    max-width: 880px;
    width: 100%;
    margin: 0 auto;
    letter-spacing: 2.5px;
  }
  h1 {
    text-align: justify;
    line-height: 1.4;
    font-size: 48px;
    font-weight: normal;
    color: #d70029;
    .title2 {
      display: block;
      line-height: 1.2;
      font-size: 48px;
      font-weight: bold;
      color: #898989;
    }
  }
  p {
    margin-top: 10px;
    font-size: 32px;
    font-weight: bold;
    color: #3271ab;
    span {
      line-height: 1.3;
      margin-left: 20px;
      padding: 0 40px;
      font-size: 38px;
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      background-color: #3271ab;
    }
  }
}

@media screen and (max-width: 1400px) {
  .title_wrap {
    padding: 16/1400*100+vw 0 30/1400*100+vw;
    .title_box { max-width: 880/1400*100+vw; }
    h1 {
      font-size: 48/1400*100+vw;
      .title2 { font-size: 48/1400*100+vw; }
    }
    p {
      margin-top: 10/1400*100+vw;
      font-size: 32/1400*100+vw;
      span {
        margin-left: 20/1400*100+vw;
        padding: 0 40/1400*100+vw;
        font-size: 38/1400*100+vw;
        border-radius: 4/1400*100+vw;
      }
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
      margin-top: 26px;
      font-size: 40px;
      span {
        display: block;
        width: 456px;
        margin: 20px auto 0;
        padding: 0;
        font-size: 49px;
        border-radius: 8px;
      }
    }
  }
}


@media screen and (max-width: 750px) {
  .title_wrap {
    padding: 40/750*100+vw 0 50/750*100+vw;
    .title_box {
      max-width: 880/750*100+vw;
      padding: 0 20/750*100+vw;
      letter-spacing: 2.5/750*100+vw;
    }
    h1 {
      font-size: 52/750*100+vw;
      .title2 { font-size: 52/750*100+vw; }
    }
    p {
      margin-top: 26/750*100+vw;
      font-size: 40/750*100+vw;
      span {
        width: 456/750*100+vw;
        margin: 20/750*100+vw auto 0;
        font-size: 49/750*100+vw;
        border-radius: 8/750*100+vw;
      }
    }
  }
}
</style>
