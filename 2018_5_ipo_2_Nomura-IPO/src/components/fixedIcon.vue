<template>
<div class="fixed_wrap">
  <a href="javascript:;" class="border color-red" @click="openPopup()"><span class="icon icon1"></span></a>
  <a href="https://line.me/R/ti/p/%40edm6085d" target="_blank" class="desktop border color-green"><span class="icon icon2"></span></a>
  <a href="tel:0800008058" target="_blank" class="desktop"><span class="icon icon3"></span></a>
</div>
</template>

<script>
export default {
  name: 'fixedIcon',
  props: {
    page: String,
    popupShow: Boolean,
  },
  data() {
    return {
    };
  },
  methods: {
    openPopup() {
      this.$emit('update:popupShow', true);
      if(this.page == 'page1') {
        gtag('event', '點擊', {
           'event_category': '邊境市場債',
           'event_label': '優惠訊息'
        });
      }
      if(this.page == 'page2') {
        gtag('event', '點擊', {
           'event_category': '中國境內債',
           'event_label': '優惠訊息'
        });
      }
      if(this.page == 'page3') {
        gtag('event', '點擊', {
           'event_category': '階梯到期債',
           'event_label': '優惠訊息'
        });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.fixed_wrap { display: none; }
.desktop { display: block; }

@media screen and (max-width: 1024px) {
  .fixed_wrap {
    display: block;
    position: fixed;
    bottom: 290px;
    right: 22px;
    z-index: 2;
  }
  .desktop { display: none; }
  a {
    display: block;
    margin-bottom: 27px;
    &:nth-of-type(1) { margin-bottom: 13px; }
  }
  .border {
    width: 104px;
    height: 86px;
    background-color: #fff;
    border-radius: 10px;
    border: 3px solid;
    &.color-red { border-color: #d70029; }
    &.color-green { border-color: #00c43e; }
  }
  .icon {
    display: block;
    margin: 0 auto;
    background-image: url(./../assets/img/com/menu-icon.png);
    background-repeat: no-repeat;
    &1 {
      position: relative;
      top: -9px;
      width: 94px;
      height: 80px;
      background-position: -10px -267px;
    }
    &2 {
      position: relative;
      top: -9px;
      width: 86px;
      height: 86px;
      background-position: -10px -10px;
    }
    &3 {
      width: 109px;
      height: 109px;
      background-position: -10px -138px;
    }
  }
}


/*如果視窗為橫向，視窗為直向: orientation: portrait*/
@media screen and (max-width: 750px) and (orientation: landscape),
       screen and (max-width: 768px) and (orientation: portrait) {
  .fixed_wrap {
    bottom: 300*.65/750*100vw;
    right: 22*.65/750*100vw;
  }
  a {
    margin-bottom: 20*.65/750*100vw;
    &:nth-of-type(1) { margin-bottom: 8*.65/750*100vw; }
  }
  .border {
    width: 104*.65/750*100vw;
    height: 86*.65/750*100vw;
    border-radius: 10*.65/750*100vw;
    border: 3*.65/750*100vw solid;
  }
  .icon {
    background-size: 129*.65/750*100vw 388*.65/750*100vw;
    &1 {
      top: -9*.65/750*100vw;
      width: 94*.65/750*100vw;
      height: 80*.65/750*100vw;
      background-position: -10*.65/750*100vw -267*.65/750*100vw;
    }
    &2 {
      top: -9*.65/750*100vw;
      width: 86*.65/750*100vw;
      height: 86*.65/750*100vw;
      background-position: -10*.65/750*100vw -10*.65/750*100vw;
    }
    &3 {
      width: 109*.65/750*100vw;
      height: 109*.65/750*100vw;
      background-position: -10*.65/750*100vw -138*.65/750*100vw;
    }
  }
}


@media screen and (max-width: 750px) {
  .fixed_wrap {
    bottom: 270/750*100vw;
    right: 22/750*100vw;
  }
  a {
    margin-bottom: 27/750*100vw;
    &:nth-of-type(1) { margin-bottom: 26/750*100vw; }
  }
  .border {
    width: 104/750*100vw;
    height: 86/750*100vw;
    border-radius: 10/750*100vw;
    border: 3/750*100vw solid;
  }
  .icon {
    background-size: 129/750*100vw 388/750*100vw;
    &1 {
      top: -9/750*100vw;
      width: 94/750*100vw;
      height: 80/750*100vw;
      background-position: -10/750*100vw -267/750*100vw;
    }
    &2 {
      top: -9/750*100vw;
      width: 86/750*100vw;
      height: 86/750*100vw;
      background-position: -10/750*100vw -10/750*100vw;
    }
    &3 {
      width: 109/750*100vw;
      height: 109/750*100vw;
      background-position: -10/750*100vw -138/750*100vw;
    }
  }
}
</style>
