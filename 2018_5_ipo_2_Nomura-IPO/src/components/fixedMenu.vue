<template>
<div class="fixed_menu">
  <div class="href_wrap">
    <a class="home" href="index.html"><div class="master-logo"></div></a>
    <a v-if="inPage[0]" @click="btn(0)" class="page page1" href="page1.html">
      <div class="icon icon1"></div>
      <span>邊<i></i>境<br>市場債</span>
    </a>
    <a v-if="inPage[1]" @click="btn(1)" class="page page2" href="page2.html">
      <div class="icon icon2"></div>
      <span>中<i></i>國<br>境內債</span>
    </a>
    <a v-if="inPage[2]" @click="btn(2)" class="page page3" href="page3.html">
      <div class="icon icon3"></div>
      <span>階<i></i>梯<br>到期債</span>
    </a>
  </div>
</div>
</template>

<script>
export default {
  name: 'fixedMenu',
  props: {
    inPage: Array,
    page: String
  },
  data() {
    return {
    };
  },
  methods: {
    btn(i) {
      let label = ['邊境市場債', '中國境內債', '階梯到期債'];
      if(this.page == 'page1') {
        gtag('event', '點擊', {
           'event_category': '邊境市場債',
           'event_label': label[i]
        });
      }
      if(this.page == 'page2') {
        gtag('event', '點擊', {
           'event_category': '中國境內債',
           'event_label': label[i]
        });
      }
      if(this.page == 'page3') {
        gtag('event', '點擊', {
           'event_category': '階梯到期債',
           'event_label': label[i]
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.fixed_menu {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 100vh;
  box-shadow: 0 3px 7px rgba(#000, .35);
  background-color: rgba(#fff, .9);
  z-index: 2;
}
a {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
}

.master-logo {
  width: 154px;
  height: 154px;
  margin: 0 auto 110px;
  background-image: url(./../assets/img/master/master-logo.png);
  background-size: 336*.458px 335*.458px;
  background-repeat: no-repeat;
}

.page {
  width: 174px;
  height: 84px;
  margin: 0 auto 46px;
  padding-right: 14px;
  border-radius: 10px;
  &1 { background-color: #004695; }
  &2 { background-color: #d60029; }
  &3 { background-color: #f49c11; }
}
span {
  width: 90px;
  line-height: 1.2;
  font-size: 28px;
  font-weight: bold;
  color: #fff;
}
i {
  display: inline-block;
  width: 1em;
}


.icon {
  margin-right: 12px;
  background-image: url(./../assets/img/com/fixed-menu.png);
  background-size: 145px 169px;
  background-repeat: no-repeat;
  &1 {
    width: 53px;
    height: 67px;
    background-position: -10px -92px;
  }
  &2 {
    width: 61px;
    height: 62px;
    background-position: -10px -10px;
  }
  &3 {
    width: 44px;
    height: 70px;
    background-position: -91px -10px;
  }
}



@media screen and (max-width: 1280px) {
  .fixed_menu {
    width: 200/1280*100vw;
    box-shadow: 0 3/1280*100vw 7/1280*100vw rgba(#000, .35);
  }
  .master-logo {
    width: 154/1280*100vw;
    height: 154/1280*100vw;
    margin: 0 auto 110/1280*100vw;
    background-size: 336*.458/1280*100vw 335*.458/1280*100vw;
  }

  .page {
    width: 170/1280*100vw;
    height: 84/1280*100vw;
    margin: 0 auto 46/1280*100vw;
    padding-right: 14/1280*100vw;
    border-radius: 10/1280*100vw;
  }
  span {
    width: 90/1280*100vw;
    font-size: 28/1280*100vw;
  }
  .icon {
    margin-right: 12/1280*100vw;
    background-size: 145/1280*100vw 169/1280*100vw;
    &1 {
      width: 53/1280*100vw;
      height: 67/1280*100vw;
      background-position: -10/1280*100vw -92/1280*100vw;
    }
    &2 {
      width: 61/1280*100vw;
      height: 62/1280*100vw;
      background-position: -10/1280*100vw -10/1280*100vw;
    }
    &3 {
      width: 44/1280*100vw;
      height: 70/1280*100vw;
      background-position: -91/1280*100vw -10/1280*100vw;
    }
  }
}


@media screen and (max-width: 1024px) {
  .fixed_menu {
    top: auto;
    bottom: 0;
    width: 100%;
    height: 150px;
    box-shadow: 0 0 24px rgba(#000, .2);
    background-color: #fff;
  }
  .href_wrap {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .master-logo {
    width: 124px;
    height: 124px;
    margin: 0 auto 0;
    background-size: 336*.369px 335*.369px;
  }
  .page {
    display: flex;
    justify-content: center;
    width: 31%;
    height: 100%;
    margin: 0;
    border-radius: 0;
  }
  span {
    width: 110px;
    font-size: 36px;
  }
  .icon {
    margin-right: 12px;
    background-size: 145px 169px;
    &1 {
      width: 53px;
      height: 67px;
      background-position: -10px -92px;
    }
    &2 {
      width: 61px;
      height: 62px;
      background-position: -10px -10px;
    }
    &3 {
      width: 44px;
      height: 70px;
      background-position: -91px -10px;
    }
  }
}


/*如果視窗為橫向，視窗為直向: orientation: portrait*/
@media screen and (max-width: 750px) and (orientation: landscape),
       screen and (max-width: 768px) and (orientation: portrait) {
  .fixed_menu {
    height: 150*.7/750*100vw;
    box-shadow: 0 0 24*.7/750*100vw rgba(#000, .2);
  }
  .master-logo {
    width: 124*.7/750*100vw;
    height: 124*.7/750*100vw;
    background-size: 336*.369*.7/750*100vw 335*.369*.7/750*100vw;
  }
  span {
    width: 110*.7/750*100vw;
    font-size: 36*.7/750*100vw;
  }
  .icon {
    margin-right: 12*.7/750*100vw;
    background-size: 145*.7/750*100vw 169*.7/750*100vw;
    &1 {
      width: 53*.7/750*100vw;
      height: 67*.7/750*100vw;
      background-position: -10*.7/750*100vw -92*.7/750*100vw;
    }
    &2 {
      width: 61*.7/750*100vw;
      height: 62*.7/750*100vw;
      background-position: -10*.7/750*100vw -10*.7/750*100vw;
    }
    &3 {
      width: 44*.7/750*100vw;
      height: 70*.7/750*100vw;
      background-position: -91*.7/750*100vw -10*.7/750*100vw;
    }
  }
}


@media screen and (max-width: 750px) {
  .fixed_menu {
    height: 150/750*100vw;
    box-shadow: 0 0 24/750*100vw rgba(#000, .2);
  }
  .master-logo {
    width: 124/750*100vw;
    height: 124/750*100vw;
    background-size: 336*.369/750*100vw 335*.369/750*100vw;
  }
  span {
    width: 110/750*100vw;
    font-size: 36/750*100vw;
  }
  .icon {
    margin-right: 12/750*100vw;
    background-size: 145/750*100vw 169/750*100vw;
    &1 {
      width: 53/750*100vw;
      height: 67/750*100vw;
      background-position: -10/750*100vw -92/750*100vw;
    }
    &2 {
      width: 61/750*100vw;
      height: 62/750*100vw;
      background-position: -10/750*100vw -10/750*100vw;
    }
    &3 {
      width: 44/750*100vw;
      height: 70/750*100vw;
      background-position: -91/750*100vw -10/750*100vw;
    }
  }
}

</style>
