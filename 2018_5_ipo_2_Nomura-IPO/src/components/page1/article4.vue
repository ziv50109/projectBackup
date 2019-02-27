<template>
  <article class="article_box article4">
    <div class="a-title">
      <h3>
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 138 84">
          <path fill="#fff" stroke="#b51c27" stroke-width="3" d="M59.8,20.2c0-7.6,6.2-6.6,6.2-12.4c0-3.5-2.8-6.3-6.2-6.3H36.7c-4.2,0-7.6,3.5-7.6,7.8v23.4c0,3.5-2.8,6.3-6.2,6.3c-5.8,0-4.7-6.3-12.2-6.3c-5.1,0-9.2,4.2-9.2,9.3c0,5.2,4.1,9.3,9.2,9.3c7.4,0,6.5-6.3,12.2-6.3c3.4,0,6.2,2.8,6.2,6.3v23.4c0,4.3,3.4,7.8,7.6,7.8h23.1c3.4,0,6.2-2.8,6.2-6.3c0-5.9-6.2-4.8-6.2-12.4c0-5.2,4.1-9.3,9.2-9.3c5.1,0,9.2,4.2,9.2,9.3c0,7.6-6.2,6.6-6.2,12.4c0,3.5,2.8,6.3,6.2,6.3h23.1c4.2,0,7.6-3.5,7.6-7.8V51.3c0-3.5,2.8-6.3,6.2-6.3c5.8,0,4.7,6.3,12.2,6.3c5.1,0,9.2-4.2,9.2-9.3c0-5.2-4.1-9.3-9.2-9.3c-7.4,0-6.5,6.3-12.2,6.3c-3.4,0-6.2-2.8-6.2-6.3V9.3c0-4.3-3.4-7.8-7.6-7.8H78.2c-3.4,0-6.2,2.8-6.2,6.3c0,5.8,6.2,4.8,6.2,12.4c0,5.2-4.1,9.3-9.2,9.3C63.9,29.5,59.8,25.3,59.8,20.2z"/>
        </svg>
        <span>經理人開講</span>
      </h3>
    </div>
    <div class="article_content">
      <div class="video-box video1">
        <youtube class="iframe_box"
          ref="video1"
          :video-id="`FESoTUfzI6Y`"
          :player-vars="autoplay1"
          player-width="100%"
          player-height="100%"
          @playing="playing(0)"
        ></youtube>
      </div>
      <div class="video-box video2">
        <youtube class="iframe_box"
          ref="video2"
          :video-id="`-rSH2a-xoek`"
          :player-vars="autoplay2"
          player-width="100%"
          player-height="100%"
          @playing="playing(1)"
        ></youtube>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'article4',
  props: {
    videoplay: Number
  },
  data() {
    return {
      autoplay1: { autoplay: 0 },
      autoplay2: { autoplay: 0 }
    };
  },
  mounted() {

  },
  watch: {
    videoplay(i) {
      if(i === 0) {

      }
      if(i === 1) {

      }
    }
  },
  methods: {
    playing(i) {
      let arr = ['邊境債影片1', '邊境債影片2'];
      gtag('event', '點擊', {
         'event_category': '邊境市場債',
         'event_label': arr[i]
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import './../../assets/css/p1-article.scss';

.article4 { background-color: #343434; }
.a-title { background-color: #b51c27; }

.video-box {
  width: 854px;
  height: 480px;
  margin: 0 auto 60px;
  &.video2 { margin-bottom: 0; }
}
.iframe_box, iframe {
  width: 100%;
  height: 100%;
}

.article4 {
  $size: 1.16;
  @media screen and (max-width: 1400px) {
    .video-box {
      width: 854/1400*100vw;
      height: 480/1400*100vw;
      margin: 0 auto 60/1400*100vw;
      &.video2 { margin-bottom: 0; }
    }
  }


  @media screen and (max-width: 1024px) {
    .video-box {
      width: 684px;
      height: 384px;
      margin: 0 auto 70px;
    }
  }


  @media screen and (max-width: 750px) {
    .video-box {
      width: 684/750*100vw;
      height: 384/750*100vw;
      margin: 0 auto 70/750*100vw;
    }
  }
}
</style>
