<template>
  <article class="article_box article2">
    <div class="a-title">
      <h3>
        <svg viewBox="0 0 103 103">
          <path fill="#fff" stroke="#205bab" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M87.5,53c3.2,0,6,1.5,7.9,3.7c2,0.3,4.1,0.1,6.1-0.4V25.5H71.4c-0.4-1.8-0.5-3.6-0.3-5.4c2.2-1.9,3.7-4.8,3.7-8c0-5.8-4.6-10.5-10.4-10.5c-5.7,0-10.4,4.7-10.4,10.5c0,3.2,1.4,6.1,3.7,8c0.3,1.8,0.2,3.7-0.3,5.4H27.5v30.2c-0.4,0.2-0.9,0.4-1.3,0.5c-2.1,0.7-4.3,0.9-6.4,0.5C17.9,54.4,15,53,11.9,53C6.1,53,1.5,57.7,1.5,63.5C1.5,69.3,6.1,74,11.9,74c3.2,0,6-1.5,7.9-3.7c2.1-0.3,4.3-0.1,6.4,0.5c0.4,0.1,0.9,0.3,1.3,0.5v30.2h31.4c0.6-2,0.8-4.2,0.5-6.3c-2.2-1.9-3.7-4.8-3.7-8c0-5.8,4.6-10.5,10.4-10.5c5.7,0,10.4,4.7,10.4,10.5c0,3.2-1.4,6.1-3.7,8c-0.3,2.1-0.1,4.2,0.5,6.3h28.3V70.7c-2-0.6-4-0.7-6.1-0.4c-1.9,2.3-4.7,3.7-7.9,3.7c-5.7,0-10.4-4.7-10.4-10.5C77.2,57.7,81.8,53,87.5,53z"/>
        </svg>
        <span class="desktop">主動發掘中國境內債最甜美的機會，只在野村投信</span>
        <span class="mobile">主動發掘中國契機</span>
      </h3>
    </div>
    <div class="article_content">
      <slider class="slider style2">
        <div slot="0" class="slider_content slider_content-1">
          <h4>本基金投資主軸，全方位掌握中國債契機</h4>
          <img :src="img1" alt="">
          <p class="info">資料來源：野村投信，Bloomberg, JP Morgan, Markit。資料日期：2018/02。註：中國非AAA公司債為中國境內信評AA級及其以下之債種；JACI為J.P. Morgan Asia Credit Index縮寫，涵蓋中國境外發行之債券。此投資主軸僅作說明配置使用，不代表未來實際投組比例。</p>
        </div>
        <div slot="1" class="slider_content slider_content-2">
          <h4>基金投組以人民幣計價為主，高度參與貨幣升值</h4>
          <img :src="img2" alt="">
          <p class="info">資料來源：野村投信；資料日期：2018/05。</p>
        </div>
      </slider>
    </div>
  </article>
</template>

<script>
import slider from 'components/slider';

export default {
  name: 'article2',
  data() {
    return {
      img1: require('assets/img/p2/p2-s-1.png'),
      img2: require('assets/img/p2/p2-s-2.png')
    };
  },
  mounted() {
    this.init();

    window.addEventListener('resize', this.init);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.init);
  },
  methods: {
    init() {
      if(window.innerWidth > 1024) {
        this.img1 = require('assets/img/p2/p2-s-1.png');
        this.img2 = require('assets/img/p2/p2-s-2.png');
      } else {
        this.img1 = require('assets/img/p2/p2-s-1-m.png');
        this.img2 = require('assets/img/p2/p2-s-2-m.png');
      }
    }
  },
  components: {
    slider,
  },
};
</script>

<style lang="scss" scoped>
@import './../../assets/css/p2-article.scss';

.article2 { background-color: #def4fc; }
.a-title { background-color: #205bab; }

.desktop { display: inline; }
.mobile { display: none; }

.slider_content {
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  &-1 {
    h4 { margin: 68px 18px 46px; }
    img {
      max-width: 762px;
      width: 100%;
      margin-bottom: 44px;
    }
  }
  &-2 {
    h4 { margin: 68px 18px 40px; }
    h5 { margin: 0 18px 40px; }
    img {
      max-width: 726px;
      width: 100%;
      margin-bottom: 44px;
    }
  }
}
h4 {
  font-size: 34px;
  font-weight: bold;
  color: #205bab;
}
h5 {
  font-size: 24px;
  font-weight: bold;
  color: #221815;
  span { font-size: 32px; }
}
img {
  display: block;
  margin: 0 auto;
}
.info { padding-left: 20px; }


.article2 {
  $size: 1;
  @media screen and (max-width: 1400px) {
    .slider_content {
      max-width: 900/1400*100vw;
      &-1 {
        h4 { margin: 68/1400*100vw 18/1400*100vw 46/1400*100vw; }
        img {
          max-width: 762/1400*100vw;
          margin-bottom: 44/1400*100vw;
        }
      }
      &-2 {
        h4 { margin: 68/1400*100vw 18/1400*100vw 40/1400*100vw; }
        h5 { margin: 0 18/1400*100vw 40/1400*100vw; }
        img {
          max-width: 726/1400*100vw;
          margin-bottom: 44/1400*100vw;
        }
      }
    }
    h4 { font-size: 34/1400*100vw; }
    h5 {
      font-size: 24/1400*100vw;
      span { font-size: 32/1400*100vw; }
    }
    .info { padding-left: 20/1400*100vw; }
  }


  @media screen and (max-width: 1024px) {
    .desktop { display: none; }
    .mobile { display: inline; }
    .slider_content {
      max-width: 100%;
      &-1 {
        h4 { margin: 78px 38px 40px; }
        img {
          max-width: 599px;
          margin-bottom: 44px;
        }
      }
      &-2 {
        h4 { margin: 78px 38px 22px; }
        h5 { margin: 0 38px 98px; }
        img {
          max-width: 604px;
          margin-bottom: 44px;
        }
      }
    }
    h4 { font-size: 40px; }
    h5 {
      font-size: 28px;
      span { font-size: 40px; }
    }
    .info { padding: 0 40px; }
  }


  @media screen and (max-width: 750px) {
    .slider_content {
      &-1 {
        h4 { margin: 78/750*100vw 38/750*100vw 64/750*100vw 40/750*100vw; }
        img {
          width: 599/750*100vw;
          margin-bottom: 44/750*100vw;
        }
      }
      &-2 {
        h4 { margin: 78/750*100vw 38/750*100vw 22/750*100vw; }
        h5 { margin: 0 38/750*100vw 98/750*100vw; }
        img {
          width: 604/750*100vw;
          margin-bottom: 44/750*100vw;
        }
      }
    }
    h4 { font-size: 40/750*100vw; }
    h5 {
      font-size: 28/750*100vw;
      span { font-size: 40/750*100vw; }
    }
    .info { padding: 0 40/750*100vw; }
  }
}
</style>
