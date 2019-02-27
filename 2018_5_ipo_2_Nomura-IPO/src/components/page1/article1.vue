<template>
  <article class="article_box article1">

    <div class="article_content">
      <slider class="slider style1">
        <div slot="0" class="slider_content slider_content-1">
          <h4>「邊境市場」跟你想得不一樣</h4>
          <img :src="img1" alt="薩爾瓦多 農產豐富2017年獲得WBC世界咖啡大賽冠軍；埃及 同時獲得IMF融資與中國一帶一路戰略性投資；斯里蘭卡 礦產豐富世界前五大寶石生產大國，有「寶石島」之譽；肯亞 全世界最成功的行動支付，90%成年人使用；莫三比克 電價便宜、設備好成為全球前5大外資直接投資國；厄瓜多 為石油輸出國組織(OPEC)成員，原油資源豐富。">
          <p class="info">資料來源：野村投信整理；資料日期：2018/03。</p>
        </div>
        <div slot="1" class="slider_content slider_content-2">
          <h4>雙倍支持，邊境市場軟硬通吃</h4>
          <h5><span>77%</span>的邊境市場國家獲得國際貨幣基金組織(IMF)的融資支持或(並)可望受惠中國一帶一路計畫</h5>
          <img :src="img2" alt="國際貨幣基金組織，對國家財政管理提供專業知識協助: 突尼西亞、加彭、喀麥隆、迦納、肯亞、約旦、奈及利亞、塞內加爾、巴拉圭、喬治亞、牙買加、宏都拉斯、象牙海岸。一帶一路，聚焦基礎建設發展，相關國家的軟硬體可獲得強化: 厄瓜多、安哥拉、馬爾地夫、衣索比亞、玻利維亞、越南、亞塞拜然、亞美尼亞、巴基斯坦、白俄羅斯、塔吉克。交集: 埃及、斯里蘭卡、伊拉克、蒙古。">
          <p class="info">資料來源：野村投信整理；資料日期：2018/03。</p>
        </div>
      </slider>
    </div>
  </article>
</template>

<script>
import slider from 'components/slider';

export default {
  name: 'article1',
  data() {
    return {
      img1: require('assets/img/p1/p1-s-1.png'),
      img2: require('assets/img/p1/p1-s-2.png')
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
        this.img1 = require('assets/img/p1/p1-s-1.png');
        this.img2 = require('assets/img/p1/p1-s-2.png');
      } else {
        this.img1 = require('assets/img/p1/p1-s-1-m.png');
        this.img2 = require('assets/img/p1/p1-s-2-m.png');
      }
    }
  },
  components: {
    slider,
  },
};
</script>

<style lang="scss" scoped>
@import './../../assets/css/p1-article.scss';

.desktop { display: block; }

.article1 { background-color: #ffebcd; }
.a-title { background-color: #f29709; }

.slider_content {
  max-width: 900px;
  margin: 0 auto;
  overflow: hidden;
  &-1 {
    h4 { margin: 68px 18px 46px; }
    img {
      width: 93%;
      margin-bottom: 10px;
    }
  }
  &-2 {
    h4 { margin: 68px 18px 26px; }
    h5 { margin: 0 18px 40px; }
    img {
      width: 91%;
      margin-bottom: 44px;
    }
  }
}
h4 {
  font-size: 34px;
  font-weight: bold;
  color: #e08a04;
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


.article1 {
  $size: 1;
  @media screen and (max-width: 1400px) {
    .slider_content {
      max-width: 900/1400*100vw;
      &-1 {
        h4 { margin: 68/1400*100vw 18/1400*100vw 46/1400*100vw; }
        img { margin-bottom: 10/1400*100vw; }
      }
      &-2 {
        h4 { margin: 68/1400*100vw 18/1400*100vw 26/1400*100vw; }
        h5 { margin: 0 18/1400*100vw 40/1400*100vw; }
        img { margin-bottom: 44/1400*100vw; }
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
    .slider_content {
      max-width: 100%;
      &-1 {
        h4 { margin: 78px 38px; }
        img {
          width: 100%;
          margin-bottom: 10px;
        }
      }
      &-2 {
        h4 { margin: 78px 38px 22px; }
        h5 { margin: 0 38px 98px; }
        img {
          width: 633px;
          margin-bottom: 44px;
        }
      }
    }
    h4 { font-size: 40px; }
    h5 {
      font-size: 28px;
      span { font-size: 40px; }
    }
    .info { padding-left: 48px; }
  }


  @media screen and (max-width: 750px) {
    .slider_content {
      &-1 {
        h4 { margin: 78/750*100vw 38/750*100vw 64/750*100vw; }
        img { margin-bottom: 10/750*100vw; }
      }
      &-2 {
        h4 { margin: 78/750*100vw 38/750*100vw 22/750*100vw; }
        h5 { margin: 0 38/750*100vw 98/750*100vw; }
        img {
          width: 633/750*100vw;
          margin-bottom: 44/750*100vw;
        }
      }
    }
    h4 { font-size: 40/750*100vw; }
    h5 {
      font-size: 28/750*100vw;
      span { font-size: 40/750*100vw; }
    }
    .info { padding-left: 48/750*100vw; }
  }
}
</style>
