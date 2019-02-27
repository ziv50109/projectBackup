<template>
  <article class="article_box article4">
    <div class="a-title">
      <h3>
        <svg viewBox="0 0 103 103">
          <path fill="#fff" stroke="#b51c27" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M87.5,53c3.2,0,6,1.5,7.9,3.7c2,0.3,4.1,0.1,6.1-0.4V25.5H71.4c-0.4-1.8-0.5-3.6-0.3-5.4c2.2-1.9,3.7-4.8,3.7-8c0-5.8-4.6-10.5-10.4-10.5c-5.7,0-10.4,4.7-10.4,10.5c0,3.2,1.4,6.1,3.7,8c0.3,1.8,0.2,3.7-0.3,5.4H27.5v30.2c-0.4,0.2-0.9,0.4-1.3,0.5c-2.1,0.7-4.3,0.9-6.4,0.5C17.9,54.4,15,53,11.9,53C6.1,53,1.5,57.7,1.5,63.5C1.5,69.3,6.1,74,11.9,74c3.2,0,6-1.5,7.9-3.7c2.1-0.3,4.3-0.1,6.4,0.5c0.4,0.1,0.9,0.3,1.3,0.5v30.2h31.4c0.6-2,0.8-4.2,0.5-6.3c-2.2-1.9-3.7-4.8-3.7-8c0-5.8,4.6-10.5,10.4-10.5c5.7,0,10.4,4.7,10.4,10.5c0,3.2-1.4,6.1-3.7,8c-0.3,2.1-0.1,4.2,0.5,6.3h28.3V70.7c-2-0.6-4-0.7-6.1-0.4c-1.9,2.3-4.7,3.7-7.9,3.7c-5.7,0-10.4-4.7-10.4-10.5C77.2,57.7,81.8,53,87.5,53z"/>
        </svg>
        <span>經理人開講 </span>
      </h3>
    </div>
    <div class="article_content">
      <div class="video-box video1">
        <youtube class="iframe_box"
          ref="video1"
          :video-id="`dkY-sSCiWKg`"
          :player-vars="autoplay1"
          player-width="100%"
          player-height="100%"
          @playing="playing(0)"
        ></youtube>
      </div>
      <div class="video-box video2">
        <youtube class="iframe_box"
          ref="video2"
          :video-id="`ReYqGb_S9Ys`"
          :player-vars="autoplay2"
          player-width="100%"
          player-height="100%"
          @playing="playing(1)"
        ></youtube>
      </div>
      <div class="video-box video3">
        <youtube class="iframe_box"
          ref="video2"
          :video-id="`Ntso2HEq6nY`"
          :player-vars="autoplay3"
          player-width="100%"
          player-height="100%"
          @playing="playing(2)"
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
      autoplay2: { autoplay: 0 },
      autoplay3: { autoplay: 0 }
    };
  },
  watch: {
    videoplay(i) {
      if(i === 0) {

      }
      if(i === 1) {

      }
      if(i === 2) {

      }
    }
  },
  methods: {
    playing(i) {
      let arr = ['中國債影片1', '中國債影片2', '中國債影片3'];
      gtag('event', '點擊', {
         'event_category': '中國境內債',
         'event_label': arr[i]
      });
    }
  },
};
</script>

<style lang="scss" scoped>
@import './../../assets/css/p2-article.scss';

.article4 { background-color: #343434; }
.a-title { background-color: #b51c27; }

.video-box {
  width: 854px;
  height: 480px;
  margin: 0 auto 60px;
  &:last-child { margin-bottom: 0; }
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
