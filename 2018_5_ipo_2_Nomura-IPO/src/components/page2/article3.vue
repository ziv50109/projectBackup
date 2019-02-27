<template>
  <article class="article_box article3">
    <div class="a-title">
      <h3>
        <svg viewBox="0 0 103 103">
          <path fill="#fff" stroke="#12789e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M87.5,53c3.2,0,6,1.5,7.9,3.7c2,0.3,4.1,0.1,6.1-0.4V25.5H71.4c-0.4-1.8-0.5-3.6-0.3-5.4c2.2-1.9,3.7-4.8,3.7-8c0-5.8-4.6-10.5-10.4-10.5c-5.7,0-10.4,4.7-10.4,10.5c0,3.2,1.4,6.1,3.7,8c0.3,1.8,0.2,3.7-0.3,5.4H27.5v30.2c-0.4,0.2-0.9,0.4-1.3,0.5c-2.1,0.7-4.3,0.9-6.4,0.5C17.9,54.4,15,53,11.9,53C6.1,53,1.5,57.7,1.5,63.5C1.5,69.3,6.1,74,11.9,74c3.2,0,6-1.5,7.9-3.7c2.1-0.3,4.3-0.1,6.4,0.5c0.4,0.1,0.9,0.3,1.3,0.5v30.2h31.4c0.6-2,0.8-4.2,0.5-6.3c-2.2-1.9-3.7-4.8-3.7-8c0-5.8,4.6-10.5,10.4-10.5c5.7,0,10.4,4.7,10.4,10.5c0,3.2-1.4,6.1-3.7,8c-0.3,2.1-0.1,4.2,0.5,6.3h28.3V70.7c-2-0.6-4-0.7-6.1-0.4c-1.9,2.3-4.7,3.7-7.9,3.7c-5.7,0-10.4-4.7-10.4-10.5C77.2,57.7,81.8,53,87.5,53z"/>
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
@import './../../assets/css/p2-article.scss';

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
