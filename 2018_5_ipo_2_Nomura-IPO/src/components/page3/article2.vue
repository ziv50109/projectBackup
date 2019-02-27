<template>
  <article class="article_box article2">
    <h3><span>基金特色</span></h3>
    <div class="article_content">
      <div class="row">
        <div class="info_box info_box1">
          <p class="title"><span>3</span>段到期，雙重戰術</p>
          <div class="pic_box"></div>
          <p class="info">資料來源：野村投信；資料日期：2018/4。上述配置比重為基本選債邏輯，實際配置比重將會依據真實投資組合配置時略有差異</p>
        </div>
        <div class="info_box info_box2">
          <p class="title"><span>3</span>大投資優勢，資金靈活配置</p>
          <div class="pic_box"></div>
          <p class="info">資料來源：野村投信；資料日期：2018/4</p>
        </div>
      </div>
      <div class="row">
        <div class="info_box info_box3">
          <p class="title"><span>4</span>種防禦機制，捍衛您的每一份資產</p>
          <div class="pic_box"></div>
          <p class="info">*此投資比率依基金規模而定，基本原則是單一高收益發行人上限不超過2%。基金規模越大，單一集中度會降低到1.5%~2%。<br>**此目標持債檔數依基金規模而定，基本原則是持債數50檔以上。基金規模越大，持債檔數有可能到達50檔到100檔。資料來源：野村投信；資料日期：2018/4</p>
        </div>
      </div>
  </div>
  </article>
</template>

<script>
export default {
  name: 'article2',
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

.row {
  display: flex;
  justify-content: space-between;
  max-width: 960px;
  margin: 0 auto;
}

.article_content { padding: 0 30px; }

.info_box {
  min-width: 50%;
  margin-top: 76px;
  &.info_box1 {
    max-width: 50%;
    .title { color: #ea5442; }
    .pic_box {
      width: 695*.613+px;
      height: 365*.613+px;
      margin-top: 22px;
      background-image: url(./../../assets/img/p3/a2-1-pic.png);
    }
    .info { margin-top: 23px; }
  }
  &.info_box2 {
    .title { color: #00a06e; }
    .pic_box {
      width: 694*.613+px;
      height: 371*.613+px;
      margin-top: 14px;
      background-image: url(./../../assets/img/p3/a2-2-pic.png);
    }
    .info { margin-top: 28px; }
  }
  &.info_box3 {
    margin-top: 58px;
    .title { color: #518ca9; }
    .pic_box {
      width: 890px;
      height: 448px;
      margin-top: 10px;
      background-image: url(./../../assets/img/p3/a2-3-pic-pc.png);

    }
    .info { margin-top: 12px; }
  }
}

.title {
  display: flex;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
  span {
    position: relative;
    margin-right: 18px;
    padding-left: 11px;
    font-size: 40px;
    &:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 46px;
      height: 46px;
      border-radius: 100%;
      border: 3px solid;
    }
  }
}

.pic_box {
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.info { padding: 0 30px 0 20px; }

.article2 {
  $size: 1.12;
  @media screen and (max-width: 1280px) {
    .row { max-width: 960*$size/1400*100+vw; }
    .info_box {
      &.info_box1 {
        max-width: 100%;
        .pic_box {
          width: 695*$size*.613/1400*100+vw;
          height: 365*$size*.613/1400*100+vw;
        }
      }
      &.info_box2 {
        .pic_box {
          width: 694*$size*.613/1400*100+vw;
          height: 371*$size*.613/1400*100+vw;
        }
      }
      &.info_box3 {
        .pic_box {
          width: 890*$size/1400*100+vw;
          height: 448*$size/1400*100+vw;
        }
      }
    }
    .title {
      font-size: 28*$size/1400*100+vw;
      span {
        margin-right: 18*$size/1400*100+vw;
        padding-left: 11*$size/1400*100+vw;
        font-size: 40*$size/1400*100+vw;
        &:before {
          width: 46*$size/1400*100+vw;
          height: 46*$size/1400*100+vw;
        }
      }
    }
  }


  @media screen and (max-width: 1024px) {
    .row { flex-direction: column; }
    .article_content { padding: 0; }
    .info_box {
      margin-top: 80px;
      &.info_box1 {
        .pic_box {
          max-width: 695px;
          width: 100%;
          height: 365px;
          margin-top: 28px;
        }
        .info { margin-top: 30px; }
      }
      &.info_box2 {
        .pic_box {
          max-width: 694px;
          width: 100%;
          height: 371px;
          margin-top: 30px;
        }
        .info { margin-top: 30px; }
      }
      &.info_box3 {
        .pic_box {
          max-width: 672px;
          width: 100%;
          height: 1238px;
          margin-top: 25px;
          background-image: url(./../../assets/img/p3/a2-3-pic-m.png);
        }
        .info { margin-top: 30px; }
      }
    }
    .title {
      font-size: 42px;
      span {
        margin-right: 28px;
        padding-left: 18px;
        font-size: 60px;
        &:before {
          width: 69px;
          height: 69px;
          border: 5px solid;
        }
      }
    }
    .info { padding: 0 40px 0 30px; }
  }


  @media screen and (max-width: 750px),
         screen and (max-width: 768px) and (orientation: portrait) {
    .row { max-width: 100%; }
    .info_box {
      margin-top: 80/750*100+vw;
      &.info_box1 {
        .pic_box {
          height: 365/750*100+vw;
          margin-top: 28/750*100+vw;
        }
        .info { margin-top: 30/750*100+vw; }
      }
      &.info_box2 {
        .pic_box {
          height: 371/750*100+vw;
          margin-top: 30/750*100+vw;
        }
        .info { margin-top: 30/750*100+vw; }
      }
      &.info_box3 {
        .pic_box {
          height: 1240/750*100+vw;
          margin-top: 25/750*100+vw;
        }
        .info { margin-top: 20/750*100+vw; }
      }
    }
    .title {
      font-size: 42/750*100+vw;
      span {
        margin-right: 28/750*100+vw;
        padding-left: 18/750*100+vw;
        font-size: 60/750*100+vw;
        &:before {
          width: 69/750*100+vw;
          height: 69/750*100+vw;
          border: 5/750*100+vw solid;
        }
      }
    }
    .info { padding: 0 40/750*100+vw 0 30/750*100+vw; }
  }
}
</style>
