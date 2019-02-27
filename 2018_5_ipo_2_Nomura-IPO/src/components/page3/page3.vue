<template>
<div class="p3">
  <m-hamburger :mobileMenuOpen.sync="isMobileMenuOpen"></m-hamburger>
  <m-fixedbtn :popupShow.sync="isPopupOpen" :page="`page3`"></m-fixedbtn>
  <kv :class="`${ canPlay ? 'animation' : '' }`"></kv>
  <nomuramenu
    v-bind="$attrs"
    :page="`page3`"
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
  <fixed-menu :page="`page3`" :inPage="[true, true, false]"></fixed-menu>
  <div class="article_content">
    <titlewrap></titlewrap>
    <article1 v-vpshow></article1>
    <article2 v-vpshow></article2>
    <article3 v-vpshow></article3>
    <article4 v-vpshow></article4>
  </div>
  <nomurafooter></nomurafooter>

  <popup :popupShow.sync="isPopupOpen">
    <popup-content></popup-content>
  </popup>

  <totop></totop>
</div>
</template>

<script>
import kv from 'components/page3/kv';
import titlewrap from 'components/page3/titlewrap';
import article1 from 'components/page3/article1';
import article2 from 'components/page3/article2';
import article3 from 'components/page3/article3';
import article4 from 'components/page3/article4';
import popupContent from 'components/popupContent';

import mHamburger from 'components/hamburgerIcon';
import mFixedbtn from 'components/fixedIcon';
import nomuramenu from 'components/nomuramenu';
import nomurafooter from 'components/page3/nomurafooter';
import popup from 'components/popupFull';
import totop from 'components/toTop';
import fixedMenu from 'components/fixedMenu';


export default {
  name: 'page3',
  props: {
    masterHeight: Number,
  },
  inheritAttrs: false,
  data() {
    return {
      canPlay: false,
      menuItem: ['階梯到期債升級', '基金特色', '債券投資專家', '基金小檔案'],
      articlePosition: [],
      isPopupOpen: false,
      isMobileMenuOpen: false,
    };
  },
  mounted() {
    setTimeout(()=> {
      this.canPlay = true;
      this.hashCheck();
    }, 500);

    this.init();
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
        this.articlePosition.push(articleBox[i].offsetTop + this.masterHeight);
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
         'event_category': '階梯到期債',
         'event_label': '優惠訊息'
      });
    },
    btn2() {
      gtag('event', '點擊', {
         'event_category': '階梯到期債',
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
    article1,
    article2,
    article3,
    article4,
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


.p3 {
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
    background-size: #{129*.74+px} #{388*.74+px};
  }
  .icon1 {
    width: 94*.74+px;
    height: 80*.74+px;
    background-position: #{-10*.74+px} #{-267*.74+px};
  }
  .icon2 {
    width: 86*.74+px;
    height: 86*.74+px;
    background-position: #{-10*.74+px} #{-10*.74+px};
    transform: scale(.96);
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
      color: #3271ab;
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
        background-position: 0 0;
      }
      &3:after {
        width: 48px;
        height: 37px;
        background-position: 0 -61px;
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
    .color-red { border-color: #3271AB; }
    .color-green { border-color: #3271AB; }
    .icon { display: none; }
  }
}


@media screen and (max-width: 750px) {
  .menu-btn_wrap {
    margin-top: 210/750*100+vw;
    .text {
      font-size: 44/750*100+vw;
      &:after {
        margin-left: 14/750*100+vw;
        background-size: 200/750*100vw 100/750*100vw;
      }
      &2:after {
        width: 54/750*100vw;
        height: 52/750*100vw;
      }
      &3:after {
        width: 48/750*100vw;
        height: 38/750*100vw;
        background-position: 0 -59/750*100vw;
      }
    }
    a { border-bottom: 4/750*100+vw solid; }
  }
}
</style>
