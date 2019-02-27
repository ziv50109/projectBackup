<template>
  <article class="article_box article0">
    <div class="article_content">
      <svg style="display:none"><defs><path id="j" d="M0,0v0.4c3.8,0,6.9,2.8,6.9,6.2c0,5.8-6.9,4.8-6.9,12.3c0,5.1,4.6,9.2,10.3,9.2c5.6,0,10.1-4,10.3-9v-0.5c-0.2-7.2-6.9-6.3-6.9-12c0-3.4,3.1-6.2,6.9-6.2V0H0z"/></defs></svg>
      <div class="article_content-box">
        <div class="p-box">
          <svg class="jigsaw-icon t color-d" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
          <svg class="jigsaw-icon b color-l" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
          <p class="title">
            <span>啟動</span>中港債券通
            <svg class="jigsaw-icon r" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
          </p>
          <h4>新一代中國債券基金  唯一主動操作選擇</h4>
          <ul>
            <li><p>納入中國債最大版圖，一次囊括全部投資契機，範疇最廣，機會盡握！</p></li>
            <li><p>本基金採取主動操作，以投資級中國境內債券為主，搭配境外發行中國債券為輔，目標創造超額報酬</p></li>
          </ul>
          <img :src="img1" alt="">
          <p class="info">資料來源：野村投信，資料日期：2018/05。<br>*資料來源：野村投信，Bloomberg，USD。中國境內債指數為Bloomberg Barclays China Aggregate Index。資料期間：<br>2015/12/04-2018/03/30。以上僅作資產配置說明，非為個股/債推薦，且不保證為未來持債。所提指數投資人無法直接投資指數，僅為市場數值統計概況說明，非基金績效表現之預測。</p>
        </div>
        <div class="toggle-box_wrap">
          <div :class="`toggle-box_btn ${ cbg ? 'cbg' : '' }`" @click="toggleBox()"></div>
          <div class="toggle-box_content" v-show="toggleShow">
            <h5>「中國境內債」違約率其實遠低於你的想像</h5>
            <div class="pic"></div>
            <p class="info">資料來源：Standard Chartered，中國境內債指數為Bloomberg Barclays China Aggregate Index，高收益債指數均為美銀美林債券指數；資料日期：2017/12/31。</p>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'article0',
  data() {
    return {
      img1: require('assets/img/p2/p2-a0-1.png'),
      toggleShow: false,
      cbg: false
    };
  },
  mounted() {
    this.init();
    window.addEventListener('resize', this.init);
    setInterval(() => {
      this.cbg = !this.cbg;
    }, 444);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.init);
  },
  methods: {
    init() {
      if(window.innerWidth > 1024) {
        this.img1 = require('assets/img/p2/p2-a0-1.png');
      } else {
        this.img1 = require('assets/img/p2/p2-a0-1-m.png');
      }
    },
    toggleBox() {
      this.toggleShow = !this.toggleShow;
      setTimeout(() => {
        this.$emit('reInit');
      },100)

    }
  },
};
</script>

<style lang="scss" scoped>
@import './../../assets/css/p2-article.scss';

.article0 { background-color: #ffebcd; }

.p-box {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 960px;
  width: 100%;
  margin: 0 70px;
  padding: 96px 38px 46px;
  border-radius: 16px;
  background-color: #fff;
  * { z-index: 1; }
  .info {
    width: 840px;
    margin: 0 auto;
  }
}
.jigsaw-icon {
  position: absolute;
  width: 46px;
  height: 60px;
  &.t {
    right: 106px;
    top: -1px;
  }
  &.b {
    left: 80px;
    bottom: -58px;
  }
  &.r {
    transform: rotate(-90deg);
    width: 26px;
    height: 38px;
    top: 24px;
    right: -30px;
    fill: #f29709;
  }
}
.color-l { fill: #fff; }
.color-d { fill: #ffebcd; }

.title {
  position: absolute;
  top: 0;
  left: 0;
  display: inline-block;
  line-height: 2.15;
  padding: 0 50px 0 38px;
  font-size: 34px;
  font-weight: bold;
  color: #fff;
  background-color: #f29709;
  border-top-left-radius: 16px;
  border-bottom-right-radius: 10px;
  span {
    vertical-align: text-bottom;
    display: inline-block;
    line-height: 1.35;
    margin-right: 6px;
    padding: 0 14px;
    font-size: 28px;
    background-color: #d60029;
  }
}

h4 {
  font-size: 34px;
  font-weight: bold;
  color: #e08a04;
}

ul {
  list-style: disc;
  margin: 12px 0 50px;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #E2932B;
  p {
    line-height: 1.4;
    margin-bottom: 4px;
    font-size: 24px;
    color: #221815;
  }
}

img {
  max-width: 100%;
  width: 874px;
  margin: 0 auto;
}

.toggle-box_wrap {
  position: relative;
  margin: 74px 0 0 70px;
}
.toggle-box_btn {
  position: relative;
  width: 457px;
  height: 98px;
  background-image: url(./../../assets/img/p2/p2-a0-3-1.png);
  cursor: pointer;
  z-index: 1;
  &.cbg {
    background-image: url(./../../assets/img/p2/p2-a0-3-2.png);
  }
}

.toggle-box_content {
  margin-top: -66px;
  width: 960px;
  padding: 30px 40px;
  background-color: #fff;
  border-radius: 16px;
}
h5 {
  text-align: right;
  font-size: 24px;
  font-weight: bold;
  color: #231815;
}
.pic {
  width: 735px;
  height: 171px;
  margin: 44px auto 0;
  background-image: url(./../../assets/img/p2/p2-a0-2.png);
  background-repeat: no-repeat;
}
.info {
  width: 844px;
  margin: 26px auto 0;
}


.article0 {
  $size: 1;
  @media screen and (max-width: 1400px) {
    .p-box {
      max-width: 960/1400*100vw;
      margin: 0;
      padding: 96/1400*100vw 38/1400*100vw 46/1400*100vw;
      border-radius: 16/1400*100vw;
      .info { width: 840/1400*100vw; }
    }
    .jigsaw-icon {
      width: 46/1400*100vw;
      height: 60/1400*100vw;
      &.t {
        right: 106/1400*100vw;
        top: -1/1400*100vw;
      }
      &.b {
        left: 80/1400*100vw;
        bottom: -58/1400*100vw;
      }
      &.r {
        width: 26/1400*100vw;
        height: 38/1400*100vw;
        top: 24/1400*100vw;
        right: -30/1400*100vw;
      }
    }
    .title {
      padding: 0 50/1400*100vw 0 38/1400*100vw;
      font-size: 34/1400*100vw;
      border-top-left-radius: 16/1400*100vw;
      border-bottom-right-radius: 10/1400*100vw;
      span {
        margin-right: 6/1400*100vw;
        padding: 0 14/1400*100vw;
        font-size: 28/1400*100vw;
      }
    }
    h4 { font-size: 34/1400*100vw; }
    ul {
      margin: 12/1400*100vw 0 50/1400*100vw;
      padding-left: 20/1400*100vw;
      font-size: 20/1400*100vw;
      p {
        margin-bottom: 4/1400*100vw;
        font-size: 24/1400*100vw;
      }
    }
    img { width: 874/1400*100vw; }
    .toggle-box_wrap { margin: 74/1400*100vw 0 0 0; }
    .toggle-box_btn {
      width: 457/1400*100vw;
      height: 98/1400*100vw;
      background-size: 457/1400*100vw 98/1400*100vw;
    }
    .toggle-box_content {
      margin-top: -66/1400*100vw;
      width: 960/1400*100vw;
      padding: 30/1400*100vw 40/1400*100vw;
      border-radius: 16/1400*100vw;
    }
    h5 {font-size: 24/1400*100vw; }
    .pic {
      width: 735/1400*100vw;
      height: 171/1400*100vw;
      margin: 44/1400*100vw auto 0;
      background-size: 735/1400*100vw 171/1400*100vw;
    }
    .info {
      width: 844/1400*100vw;
      margin: 26/1400*100vw auto 0;
    }
  }


  @media screen and (max-width: 1024px) {
    .p-box {
      max-width: 960px;
      padding: 110px 38px 66px;
      border-radius: 16px;
      .info { width: 650px; }
    }
    .jigsaw-icon {
      width: 57px;
      height: 90px;
      &.t {
        right: 40px;
        top: -7px;
      }
      &.b {
        transform: rotate(180deg);
        left: auto;
        right: 30px;
        bottom: -7px;
        fill: #ffebcd;
      }
      &.r {
        width: 26px;
        height: 38px;
        top: 24px;
        right: -30px;
      }
    }
    .title {
      padding: 0 50px 0 38px;
      font-size: 36px;
      border-top-left-radius: 16px;
      border-bottom-right-radius: 10px;
      span {
        margin-right: 6px;
        padding: 0 14px;
        font-size: 28px;
      }
    }
    h4 {
      line-height: 1.3;
      padding-right: 30px;
      font-size: 40px;
    }
    ul {
      margin: 12px 0 70px;
      padding-left: 20px;
      font-size: 24px;
      p {
        margin-bottom: 4px;
        font-size: 28px;
      }
    }
    img { width: 874px; }
    .toggle-box_wrap { margin: 44px 0 0 0; }
    .toggle-box_btn {
      width: 457px;
      height: 98px;
      background-size: 457px 98px;
    }
    .toggle-box_content {
      margin-top: -66px;
      width: 750px;
      padding: 108px 26px 60px;
      border-radius: 16px;
    }
    h5 {
      text-align: center;
      font-size: 36px;
    }
    .pic {
      width: 646px;
      height: 261px;
      margin: 40px auto 0;
      background-image: url(./../../assets/img/p2/p2-a0-2-m.png);
      background-size: 646px 261px;
    }
    .info {
      width: 650px;
      margin: 40px auto 0;
    }
  }


  @media screen and (max-width: 750px) {
    .p-box {
      max-width: 960/750*100vw;
      padding: 110/750*100vw 38/750*100vw 66/750*100vw;
      border-radius: 0;
      .info { width: 650/750*100vw; }
    }
    .jigsaw-icon {
      width: 57/750*100vw;
      height: 90/750*100vw;
      &.t {
        right: 40/750*100vw;
        top: -7/750*100vw;
      }
      &.b {
        right: 30/750*100vw;
        bottom: -7/750*100vw;
      }
      &.r {
        width: 26/750*100vw;
        height: 38/750*100vw;
        top: 24/750*100vw;
        right: -30/750*100vw;
      }
    }
    .title {
      padding: 0 50/750*100vw 0 38/750*100vw;
      font-size: 36/750*100vw;
      border-top-left-radius: 0;
      border-bottom-right-radius: 10/750*100vw;
      span {
        margin-right: 6/750*100vw;
        padding: 0 14/750*100vw;
        font-size: 28/750*100vw;
      }
    }
    h4 {
      padding-right: 30/750*100vw;
      font-size: 40/750*100vw;
    }
    ul {
      margin: 12/750*100vw 0 70/750*100vw;
      padding-left: 20/750*100vw;
      font-size: 24/750*100vw;
      p {
        margin-bottom: 4/750*100vw;
        font-size: 28/750*100vw;
      }
    }
    img { width: 874/750*100vw; }
    .toggle-box_wrap { margin: 32/750*100vw 0 0 0; }
    .toggle-box_btn {
      left: 40/750*100vw;
      width: 457/750*100vw;
      height: 98/750*100vw;
      background-size: 457/750*100vw 98/750*100vw;
    }
    .toggle-box_content {
      margin-top: -66/750*100vw;
      width: 750/750*100vw;
      padding: 108/750*100vw 26/750*100vw 60/750*100vw;
      border-radius: 0;
    }
    h5 { font-size: 36/750*100vw; }
    .pic {
      width: 646/750*100vw;
      height: 261/750*100vw;
      margin: 40/750*100vw auto 0;
      background-size: 646/750*100vw 261/750*100vw;
    }
    .info {
      width: 650/750*100vw;
      margin: 40/750*100vw auto 0;
    }
  }
}
</style>
