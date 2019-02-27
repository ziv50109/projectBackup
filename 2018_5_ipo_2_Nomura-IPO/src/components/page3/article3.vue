<template>
  <article class="article_box article3 bg-style">
    <div class="box">
      <h3><span>野村投信<i>–</i><br class="mobile">債券投資的領航家</span></h3>
      <div class="article_content">
        <div class="col col1">
          <ul>
            <li><p>積極發展在地投資能力，目標打造台灣最好的固定收益團隊</p></li>
            <li><p><span class="color-red">4</span>位投資專家，平均投資年資<span class="color-red">15</span>年</p></li>
          </ul>
          <p class="info desktop">資料來源：野村投信，投信投顧公會；規模排名資料日期：2018/4/30</p>
        </div>
        <div class="col col2">
          <div class="pic"></div>
          <p class="info mobile">資料來源：野村投信，投信投顧公會；規模排名資料日期：2018/4/30</p>
        </div>
      </div>
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
@import './../../assets/css/p3-article.scss';

.color-red { color: #d70029; }
.mobile { display: none; }

.article_box { margin-top: 74px; }

.bg-style {
  padding: 70px 0 44px;
  background-color: #b9d5ee;
  h3 {
    position: relative;
    top: -27px;
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    span {
      display: inline-block;
      line-height: 2;
      padding: 0 44px;
      border-radius: 8px;
      background-color: #3271ab;
    }
  }
}

.box {
  max-width: 960px;
  margin: 0 auto;
  padding: 0 28px 40px;
  border-radius: 8px;
  background-color: #fff;
}

i { font-style: normal; }

.article3 .article_content {
  display: flex;
  justify-content: space-between;
  margin-left: 0;
}

.col1 {
  text-align: justify;
  width: 330px;
}
ul {
  list-style: disc;
  padding-left: 24px;
  color: #d70029;
}
li {
  margin-bottom: 5px;
  p {
    line-height: 1.5;
    font-size: 24px;
    font-weight: bold;
    color: #221815;
  }
}

.info {
  letter-spacing: .6px;
  padding: 24px 0 0 10px;
}

.pic {
  width: 712*.778+px;
  height: 267*.778+px;
  margin-top: 26px;
  background-image: url(./../../assets/img/p3/a3-pic.png);
  background-repeat: no-repeat;
  background-size: contain;
}


.article3 {
  $size: 1.1;
  @media screen and (max-width: 1400px) {
    .article_box { margin-top: 74/1400*100+vw; }
    .box {
      max-width: 960*$size/1400*100+vw;
      margin-left: 220/1400*100+vw;
    }
    .col1 { padding-right: 20px; }
    li p { font-size: 24/1400*100+vw; }
    .pic {
      width: 712/1400*100+vw;
      height: 267/1400*100+vw;
    }
  }


  @media screen and (max-width: 1024px) {
    .desktop { display: none; }
    .mobile { display: block; }
    &.article_box { margin-top: 142px; }
    &.bg-style {
      padding: 134px 0 74px;
      h3 {
        top: -68px;
        font-size: 54px;
        span {
          line-height: 1.2;
          padding: 13px 66px;
          border-radius: 8px;
        }
      }
    }
    .box {
      max-width: 100%;
      margin: 0 auto;
      padding: 0 0 54px;
      border-radius: 0;
    }
    i { display: none; }
    .article_content {
      flex-direction: column;
      margin-left: auto;
    }
    .col1 { width: 660px; }
    ul { padding-left: 66px; }
    li {
      margin-bottom: 14px;
      font-size: 46px;
      p {
        line-height: 1.2;
        font-size: 46px;
      }
    }
    .info {
      letter-spacing: .6px;
      padding: 20px 0 0 66px;
    }
    .pic {
      width: 712px;
      height: 267px;
      margin-top: 20px;
    }
  }


  @media screen and (max-width: 750px) {
    &.article_box { margin-top: 142/750*100+vw; }
    &.bg-style {
      padding: 134/750*100+vw 0 74/750*100+vw;
      h3 {
        top: -68/750*100+vw;
        font-size: 54/750*100+vw;
        span {
          padding: 13/750*100+vw 66/750*100+vw;
          border-radius: 8/750*100+vw;
        }
      }
    }
    .box { padding: 0 0 54/750*100+vw; }
    .col1 {
      width: 660/750*100+vw;
      padding: 0;
    }
    ul { padding-left: 66/750*100+vw; }
    li {
      margin-bottom: 14/750*100+vw;
      font-size: 46/750*100+vw;
      p { font-size: 46/750*100+vw; }
    }
    .info {
      letter-spacing: .6/750*100+vw;
      padding: 20/750*100+vw 0 0 66/750*100+vw;
    }
    .pic {
      width: 712/750*100+vw;
      height: 267/750*100+vw;
      margin-top: 20/750*100+vw;
    }
  }
}
</style>
