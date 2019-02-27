<template>
<div class="p2">
  <m-hamburger :mobileMenuOpen.sync="isMobileMenuOpen"></m-hamburger>
  <m-fixedbtn :popupShow.sync="isPopupOpen" :page="`page2`"></m-fixedbtn>
  <kv :class="`${ canPlay ? 'animation' : '' }`"></kv>
  <nomuramenu
    v-bind="$attrs"
    :page="`page2`"
    :names="menuItem"
    :positions="articlePosition"
    :mobileMenuOpen.sync="isMobileMenuOpen"
    :class="`${ isPopupOpen ? 'mr17' : '' }`">
    <div class="menu-btn_wrap">
      <a href="javascript:;" class="color-red desktop" @click="btn1()"><span class="icon icon1"></span><span class="text text1">優惠訊息</span></a>
      <a href="https://line.me/R/ti/p/%40edm6085d" target="_blank" class="color-green" @click="[closeMenu(), btn2()]"><span class="icon icon2"></span><span class="text text2">索取免費資訊</span></a>
      <a href="tel:0800008058" class="mobile color-red"><span class="text text3">聯絡我們</span></a>
    </div>
  </nomuramenu>
  <fixed-menu :page="`page2`" :inPage="[true, false, true]"></fixed-menu>
  <div class="article_content">
    <titlewrap></titlewrap>
    <article0 v-vpshow @reInit="init()"></article0>

    <article1 v-vpshow></article1>
    <article2 v-vpshow></article2>

    <article3 v-vpshow></article3>
    <article4 v-vpshow :videoplay="videoplay"></article4>
    <article5 v-vpshow></article5>
  </div>
  <nomurafooter></nomurafooter>

  <popup :popupShow.sync="isPopupOpen">
    <popup-content></popup-content>
  </popup>

  <totop></totop>
</div>
</template>

<script>
import kv from 'components/page2/kv';
import titlewrap from 'components/page2/titlewrap';
import article0 from 'components/page2/article0';
import article2 from 'components/page2/article2';
import article1 from 'components/page2/article1';
import article3 from 'components/page2/article3';
import article4 from 'components/page2/article4';
import article5 from 'components/page2/article5';
import popupContent from 'components/popupContent';

import mHamburger from 'components/hamburgerIcon';
import mFixedbtn from 'components/fixedIcon';
import nomuramenu from 'components/nomuramenu';
import nomurafooter from 'components/page2/nomurafooter';
import popup from 'components/popupFull';
import totop from 'components/toTop';
import fixedMenu from 'components/fixedMenu';


export default {
  name: 'page2',
  data() {
    return {
      canPlay: false,
      menuItem: ['新一代中國債', '基金特色', '基金投資主軸', '基金領航家', '經理人開講', '基金小檔案'],
      articlePosition: [],
      isPopupOpen: false,
      isMobileMenuOpen: false,
      videoplay: null
    };
  },
  mounted() {
    setTimeout(()=> {
      this.canPlay = true;
      this.init();
      this.hashCheck();
    }, 500);


    window.addEventListener('resize', this.init);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkViewing);
  },
  watch: {
    masterHeight() {
      this.init();
    },
    isPopupOpen() {
      this.checkPopupOpen();
      this.closeMenu();
    }
  },
  methods: {
    init() {
      const articleBox = document.querySelectorAll('.article_box');
      this.articlePosition = [];

      for(let i = 0; i < articleBox.length; i++) {
        this.articlePosition.push(articleBox[i].offsetTop);
      }
      this.checkPopupOpen();
    },
    hashCheck() {
      let self = this;
      switch(document.location.hash) {
        case '#popup':
          setTimeout(() => {
            self.isPopupOpen = true;
          }, 100);
          break;
        case '#video1':
          window.scrollTo(0, document.querySelector('.article4').offsetTop);
          this.videoplay = 0;
          break;
        case '#video2':
          window.scrollTo(0, document.querySelector('.article4').offsetTop + document.querySelector('.video2').clientHeight);
          this.videoplay = 1;
          break;
        case '#video3':
          window.scrollTo(0, document.querySelector('.article4').offsetTop + document.querySelector('.video3').clientHeight*2);
          this.videoplay = 2;
          break;
        default:
          break;
      }
    },
    closeMenu() {
      this.isMobileMenuOpen = false;
    },
    checkPopupOpen() {
      const body = document.querySelector('body');
      if(this.isPopupOpen) {
        body.classList.add('scroll-disable');
      } else {
        setTimeout(()=> {
          body.classList.remove('scroll-disable');
        }, 0);
      }
    },
    btn1() {
      this.isPopupOpen = true;
      gtag('event', '點擊', {
         'event_category': '中國境內債',
         'event_label': '優惠訊息'
      });
    },
    btn2() {
      gtag('event', '點擊', {
         'event_category': '中國境內債',
         'event_label': '加入Line'
      });
    }
  },
  components: {
    kv,
    mHamburger,
    mFixedbtn,
    nomuramenu,
    nomurafooter,
    titlewrap,
    article0,
    article2,
    article1,
    article3,
    article4,
    article5,
    popup,
    popupContent,
    totop,
    fixedMenu
  },
};
</script>

<style lang="scss" scoped>
// scroll show
.article_box { transition: opacity 1s, transform .6s; }
.before-enter {
  opacity: 0;
  transform: translateY(44px);
}

.p2 {
  position: relative;
  overflow: hidden;
}


.mr17 { margin-right: 17px; }
.menu-btn_wrap {
  .text { display: none; }
  .mobile { display: none; }
  .desktop { display: block; }
  a {
    display: block;
    width: 76px;
    height: 64px;
    margin: 27px auto 0;
    border: 3px solid;
    border-radius: 10px;
    background-color: #fff;
  }
  .color-red { border-color: #d70029; }
  .color-green { border-color: #00c43e; }
  .icon {
    display: block;
    margin: -10px auto 0;
    background-image: url(./../../assets/img/com/menu-icon.png);
    background-repeat: no-repeat;
    background-size: 129*.74px 388*.74px;
  }
  .icon1 {
    width: 94*.74px;
    height: 80*.74px;
    background-position: -10*.74px -267*.74px;
  }
  .icon2 {
    width: 86*.74px;
    height: 86*.74px;
    background-position: -10*.74px -10*.74px;
    transform: scale(.96);
  }
}


@media screen and (max-width: 1280px) {
  .menu-btn_wrap {
    a {
      width: 76/1280*100vw;
      height: 64/1280*100vw;
      margin: 27/1280*100vw auto 0;
      border: 3/1280*100vw solid;
      border-radius: 10/1280*100vw;
    }
    .icon {
      margin: -10/1280*100vw auto 0;
      background-size: 129*.74/1280*100vw 388*.74/1280*100vw;
    }
    .icon1 {
      width: 94*.74/1280*100vw;
      height: 80*.74/1280*100vw;
      background-position: -10*.74/1280*100vw -267*.74/1280*100vw;
    }
    .icon2 {
      width: 86*.74/1280*100vw;
      height: 86*.74/1280*100vw;
      background-position: -10*.74/1280*100vw -10*.74/1280*100vw;
    }
  }
}


@media screen and (max-width: 1024px) {
  .mr17 { margin-right: 0; }
  .menu-btn_wrap {
    margin-top: 210px;
    .text {
      text-align: center;
      display: block;
      line-height: 3.1;
      font-size: 44px;
      font-weight: bold;
      color: #d7163b;
      &:after {
        content: '';
        display: inline-block;
        margin-left: 14px;
        background-image: url(./../../assets/img/com/menu-icon-m.png);
        background-repeat: no-repeat;
      }
      &2:after {
        vertical-align: sub;
        width: 53px;
        height: 51px;
        background-position: -126px 0;
      }
      &3:after {
        vertical-align: middle;
        width: 48px;
        height: 37px;
        background-position: -126px -61px;
      }
    }
    .mobile { display: block; }
    .desktop { display: none; }
    a {
      width: 100%;
      height: auto;
      margin: 0 auto;
      border-radius: 0;
      background-color: #eee;
      border: 0;
      border-bottom: 4px solid;
    }
    .color-red { border-color: #d7163b; }
    .color-green { border-color: #d7163b; }
    .icon { display: none; }
  }
}


@media screen and (max-width: 750px) {
  .menu-btn_wrap {
    margin-top: 210/750*100vw;
    .text {
      font-size: 44/750*100vw;
      &:after {
        margin-left: 14/750*100vw;
        background-size: 200/750*100vw 100/750*100vw;
      }
      &2:after {
        width: 54/750*100vw;
        height: 52/750*100vw;
        background-position: -126/750*100vw 0;
      }
      &3:after {
        width: 48/750*100vw;
        height: 38/750*100vw;
        background-position: -126/750*100vw -59/750*100vw;
      }
    }
    a { border-bottom: 4/750*100vw solid; }
  }
}
</style>
