<template>
  <article class="article_box article1">
    <h3><span>階梯到期債升級</span></h3>
    <div class="article_content">
      <div class="text_wrap">
        <h4>追求投資的「安全感」，<br class="mobile"><span>階梯到期債券策略</span>蔚為風潮</h4>
        <p class="fwb">二高二低環境的投資新解方：</p>
        <p>高成長、高波動、低利率、低收益的市場環境，階梯到期債券策略希望為您提供：</p>
      </div>
      <div class="infobox_wrap">
        <div class="box box1">
          <div class="icon"></div>
          <p class="title">確定高一點</p>
          <p>風險控管好，不怕黑天鵝</p>
        </div>
        <div class="box box2">
          <div class="icon"></div>
          <p class="title">風險低一點</p>
          <p>三階段到期，內建雙重戰術布局降低風險</p>
        </div>
        <div class="box box3">
          <div class="icon"></div>
          <p class="title">安全多一點</p>
          <p>鎖定債息收益，擁有定期現金流</p>
        </div>
      </div>
      <div class="pic_box desktop"></div>
      <m-toggleslider title="收益級別" color="#ff6d02" defaultshow>
        <div class="pic_box1"></div>
      </m-toggleslider>
      <m-toggleslider title="累積級別" color="#009a3e">
        <div class="pic_box2"></div>
      </m-toggleslider>
      <p class="info">資料來源：野村投信；資料日期：2018/4<br class="desktop">*以上還款比例假設投資人自期初進場並持續持有至到期之情境下期初單位數之比例</p>
    </div>
  </article>
</template>

<script>
import mToggleslider from 'components/page3/toggleSlider';

export default {
  name: 'article1',
  data() {
    return {
    };
  },
  methods: {
  },
  components: {
    mToggleslider,
  },
};
</script>

<style lang="scss" scoped>
@import './../../assets/css/p3-article.scss';

.desktop { display: block; }

.text_wrap {
  max-width: 900px;
  margin: 0 auto;
  h4 {
    margin: 48px 0 15px;
    font-size: 30px;
    font-weight: bold;
    color: #d70029;
    span {
      display: inline-block;
      line-height: 1.38;
      padding: 0 15px;
      margin: 0 .4%;
      color: #fff;
      background-color: #d70029;
    }
  }
  p {
    line-height: 1.5;
    font-size: 24px;
    color: #221815;
  }
}

.infobox_wrap {
  display: flex;
  justify-content: space-between;
  max-width: 900px;
  margin: 74px auto 0;
  .box {
    width: 295px;
    height: 213px;
    padding: 0 16px;
    border-radius: 8px;
    .icon {
      width: 154*.734+px;
      height: 154*.734+px;
      margin: -40px auto 10px;
      background-image: url(./../../assets/img/p3/a1-icon.png);
      background-repeat: no-repeat;
      background-size: 348*.734+px 348*.734+px;
    }
    .title {
      line-height: 1.6;
      font-size: 28px;
    }
    p {
      text-align: center;
      line-height: 1.4;
      font-size: 22px;
      font-weight: bold;
    }
    &.box1 {
      background-color: #fbdad1;
      .icon { background-position: #{-10*.734+px} #{-10*.734+px}; }
      .title { color: #ea5442; }
    }
    &.box2 {
      background-color: #ebf3d9;
      .icon { background-position: #{-184*.734+px} #{-10*.734+px}; }
      .title { color: #12a06f; }
    }
    &.box3 {
      background-color: #dce8f2;
      .icon { background-position: #{-10*.734+px} #{-184*.734+px}; }
      .title { color: #508daa; }
    }
  }
}

.pic_box {
  width: 957px;
  height: 858px;
  margin: 50px auto 0;
  background-image: url(./../../assets/img/p3/a1-pic.png);
  background-repeat: no-repeat;
  background-size: contain;
}

.info {
  text-align: justify;
  max-width: 900px;
  margin: 30px auto 0;
}


.article1 {
  $size: 1;
  @media screen and (max-width: 1280px) {
    .text_wrap {
      max-width: 900*$size/1400*100+vw;
      p { font-size: 22px; }
    }
    .infobox_wrap {
      max-width: 900*$size/1400*100+vw;
      .box {
        width: 295*$size/1400*100+vw;
        height: 213*$size/1400*100+vw;
        .icon {
          width: 154*$size*.756/1400*100+vw;
          height: 154*$size*.756/1400*100+vw;
          margin: -40*$size/1400*100+vw auto 10*$size/1400*100+vw;
          background-size: 348*$size*.734/1400*100+vw 348*$size*.734/1400*100+vw;
        }
        .title { font-size: 28*$size/1400*100+vw; }
        p { font-size: 22*$size/1400*100+vw; }
        &.box1 .icon { background-position: #{-10*$size*.734/1400*100+vw} #{-10*$size*.734/1400*100+vw}; }
        &.box2 .icon { background-position: #{-184*$size*.734/1400*100+vw} #{-10*$size*.734/1400*100+vw}; }
        &.box3 .icon { background-position: #{-10*$size*.734/1400*100+vw} #{-184*$size*.734/1400*100+vw}; }
      }
    }
    .pic_box {
      width: 957/1400*100+vw;
      height: 858/1400*100+vw;
    }
    .info { max-width: 900*$size/1400*100+vw; }
  }


  @media screen and (max-width: 1024px) {
    .desktop { display: none; }
    .text_wrap {
      max-width: 100%;
      h4 {
        line-height: 1.3;
        margin: 64px 0 25px;
        font-size: 48px;
        span {
          line-height: 1.32;
          margin: 0 2% 0 0;
        }
      }
      p { font-size: 30px; }
    }
    .infobox_wrap {
      flex-direction: column;
      margin: 18px auto 0;
      .box {
        width: 402px;
        height: 290px;
        margin: 74px auto 0;
        padding: 0 18px;
        border-radius: 12px;
        .icon {
          width: 154px;
          height: 154px;
          margin: -54px auto 14px;
          background-size: 348px 348px;
          background-size: 200% 200%\0;
        }
        .title { font-size: 38px; }
        p { font-size: 30px; }
        &.box1 .icon { background-position: #{-10px} #{-10px}; }
        &.box2 .icon { background-position: #{-184px} #{-10px}; }
        &.box3 .icon { background-position: #{-10px} #{-184px}; }
      }
    }
    .toggle-slider { margin: 80px auto 0; }
    .pic_box { display: none; }
    .pic_box1 {
      max-width: 685px;
      width: 100%;
      height: 2134px;
      margin: -44px 0 0 24px;
      background-image: url(./../../assets/img/p3/a1-1-m.png);
      background-repeat: no-repeat;
      background-size: contain;
    }
    .pic_box2 {
      max-width: 688px;
      width: 100%;
      height: 2543px;
      margin: -5px 0 0 22px;
      background-image: url(./../../assets/img/p3/a1-2-m.png);
      background-repeat: no-repeat;
      background-size: contain;
    }
    .info {
      max-width: 600px;
      margin: 65px auto 0;
    }
  }


  @media screen and (max-width: 750px) {
    .text_wrap {
      padding: 0 16/750*100+vw;
      h4 {
        margin: 64/750*100+vw 0 25/750*100+vw;
        font-size: 48/750*100+vw;
      }
      p { font-size: 30/750*100+vw; }
    }
    .infobox_wrap {
      margin: 18/750*100+vw auto 0;
      .box {
        width: 402/750*100+vw;
        height: 290/750*100+vw;
        margin: 74/750*100+vw auto 0;
        padding: 0 18/750*100+vw;
        border-radius: 12/750*100+vw;
        .icon {
          width: 154/750*100+vw;
          height: 154/750*100+vw;
          margin: -54/750*100+vw auto 14/750*100+vw;
          background-size: 348/750*100+vw 348/750*100+vw;
        }
        .title { font-size: 38/750*100+vw; }
        p { font-size: 30/750*100+vw; }
        &.box1 .icon { background-position: #{-10/750*100+vw} #{-10/750*100+vw}; }
        &.box2 .icon { background-position: #{-184/750*100+vw} #{-10/750*100+vw}; }
        &.box3 .icon { background-position: #{-10/750*100+vw} #{-184/750*100+vw}; }
      }
    }
    .toggle-slider { margin: 80/750*100+vw auto 0; }
    .pic_box1 {
      height: 2134/750*100+vw;
      margin: -44/750*100+vw 0 0 24/750*100+vw;
    }
    .pic_box2 {
      height: 2543/750*100+vw;
      margin: -5/750*100+vw 0 0 22/750*100+vw;
    }
    .info { margin: 65/750*100+vw auto 0; }
  }
}
</style>
