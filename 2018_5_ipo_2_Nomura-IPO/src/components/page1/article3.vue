<template>
  <article class="article_box article3">
    <div class="a-title">
      <h3>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 138 84">
          <path fill="#fff" stroke="#12789e" stroke-width="3" d="M59.8,20.2c0-7.6,6.2-6.6,6.2-12.4c0-3.5-2.8-6.3-6.2-6.3H36.7c-4.2,0-7.6,3.5-7.6,7.8v23.4c0,3.5-2.8,6.3-6.2,6.3c-5.8,0-4.7-6.3-12.2-6.3c-5.1,0-9.2,4.2-9.2,9.3c0,5.2,4.1,9.3,9.2,9.3c7.4,0,6.5-6.3,12.2-6.3c3.4,0,6.2,2.8,6.2,6.3v23.4c0,4.3,3.4,7.8,7.6,7.8h23.1c3.4,0,6.2-2.8,6.2-6.3c0-5.9-6.2-4.8-6.2-12.4c0-5.2,4.1-9.3,9.2-9.3c5.1,0,9.2,4.2,9.2,9.3c0,7.6-6.2,6.6-6.2,12.4c0,3.5,2.8,6.3,6.2,6.3h23.1c4.2,0,7.6-3.5,7.6-7.8V51.3c0-3.5,2.8-6.3,6.2-6.3c5.8,0,4.7,6.3,12.2,6.3c5.1,0,9.2-4.2,9.2-9.3c0-5.2-4.1-9.3-9.2-9.3c-7.4,0-6.5,6.3-12.2,6.3c-3.4,0-6.2-2.8-6.2-6.3V9.3c0-4.3-3.4-7.8-7.6-7.8H78.2c-3.4,0-6.2,2.8-6.2,6.3c0,5.8,6.2,4.8,6.2,12.4c0,5.2-4.1,9.3-9.2,9.3C63.9,29.5,59.8,25.3,59.8,20.2z"/>
        </svg>
        <span class="desktop">野村投信–債券投資的領航家</span>
        <span class="mobile">債券投資的領航家</span>
      </h3>
    </div>
    <div class="article_content">
      <ul>
        <li><p>積極發展在地投資能力，目標打造台灣最好的固定收益團隊</p></li>
        <li><p><span>4</span>位投資專家，平均投資年資<span>15</span>年</p></li>
      </ul>
      <div class="p-box">
        <img src="~assets/img/p1/p1-a3-1.png" alt="">
      </div>
      <p class="info">資料來源：野村投信，投信投顧公會；規模排名資料日期：2018/4/30</p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'article3',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import './../../assets/css/p1-article.scss';

.article3 { background-color: #def4fc; }
.a-title { background-color: #12789e; }

.desktop { display: inline; }
.mobile { display: none; }

.article3 .article_content {
  max-width: 906px;
  padding: 50px 0 80px;
}
ul {
  list-style: disc;
  padding-left: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #d70029;
}
li { line-height: 1.6; }
p {
  font-size: 24px;
  color: #221815;
}
span { color: #d70029; }

.p-box { margin: 25px auto 66px; }
img {
  display: block;
  margin: 0 auto;
}

.article3 {
  $size: 1.1;
  @media screen and (max-width: 1400px) {
    .article3 .article_content {
      max-width: 906/1400*100vw;
      padding: 50/1400*100vw 0 80/1400*100vw;
    }
    ul {
      padding-left: 20/1400*100vw;
      font-size: 16/1400*100vw;
    }
    p { font-size: 24/1400*100vw; }
    .p-box {
      max-width: 906/1400*100vw;
      margin: 25/1400*100vw 0 66/1400*100vw;
    }
    img { max-width: 858/1400*100vw; }
  }


  @media screen and (max-width: 1024px) {
    .desktop { display: none; }
    .mobile { display: inline; }
    .article_content {
      max-width: 906px;
      padding: 50px 0 80px;
    }
    ul {
      max-width: 650px;
      margin: 0 auto;
      padding: 0 20px;
      font-size: 26px;
    }
    li { margin-bottom: 20px; }
    p { font-size: 34px; }
    .p-box {
      max-width: 760px;
      margin: 45px auto 32px;
    }
    img { max-width: 100%; }
    .info {
      width: 694px;
      margin: 0 auto;
    }
  }


  @media screen and (max-width: 750px) {
    .article_content {
      max-width: 906/750*100vw;
      padding: 50/750*100vw 0 80/750*100vw;
    }
    ul {
      max-width: 650/750*100vw;
      padding: 0 20/750*100vw;
      font-size: 26/750*100vw;
    }
    li { margin-bottom: 20/750*100vw; }
    p { font-size: 34/750*100vw; }
    img {
      max-width: 104%;
      margin-left: -2%;
    }
    .p-box {
      max-width: 760/750*100vw;
      margin: 45/750*100vw auto 32/750*100vw;
    }
    .info { width: 694/750*100vw; }
  }
}
</style>
