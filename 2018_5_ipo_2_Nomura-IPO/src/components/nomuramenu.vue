<template>
  <div :class="`menu fixed ${ mobileMenuOpen ? 'open' : ''}`"
       :style="`${ !resizeEnd ? 'transition: transform 0s;' : '' }`">
    <div class="close" @click="closeMenu()"></div>
    <slot></slot>
    <ul>
      <li v-for="(item, index) in names"
        @click="click(index)"
        :class="`${ activeItem === index ? 'active' : '' }`">
        <div class="list-icon"></div>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import scrollTo from 'assets/js/scrollTo';

export default {
  name: 'nomuramenu',
  mixins: [scrollTo],
  inheritAttrs: false,
  props: {
    isViewing: Boolean,
    names: Array,
    page: String,
    positions: Array,
    mobileMenuOpen: Boolean,
  },
  data() {
    return {
      activeItem: null,
      isMobile: false,
      resizeEnd: true,
    };
  },
  mounted() {
    this.resizing();
    window.addEventListener('scroll', this.changeMenuIcon);
    window.addEventListener('resize', this.resizing);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.changeMenuIcon);
    window.removeEventListener('resize', this.resizing);
  },
  methods: {
    resizing() {
      let w = window.innerWidth;
      this.resizeEnd = false;
      setTimeout(()=> {
        let nw = window.innerWidth;
        if(nw == w) {
          this.resizeEnd = true;
        }
      }, 800);
    },
    changeMenuIcon() {
      let scrollY = window.scrollY || document.documentElement.scrollTop;

      for(let i = 0; i < this.positions.length; i++) {
        if(scrollY < this.positions[0]) {
           this.activeItem = null;
        } else if(scrollY >= this.positions[i] && scrollY < this.positions[i+1]) {
          this.activeItem = i;
        } else if(scrollY >= this.positions[this.positions.length-1]) {
          this.activeItem = this.positions.length-1;
        }
      }

    },
    click(index) {
      this.scrollToY(this.positions[index], 600);
      this.closeMenu();
      if(this.page == 'page1') {
        let label = this.names[index];
        gtag('event', '點擊', {
           'event_category': '邊境市場債',
           'event_label': label
        });
      }
      if(this.page == 'page2') {
        let label = this.names[index];
        gtag('event', '點擊', {
           'event_category': '中國境內債',
           'event_label': label
        });
      }
      if(this.page == 'page3') {
        let label = this.names[index];
        gtag('event', '點擊', {
           'event_category': '階梯到期債',
           'event_label': label
        });
      }
    },
    closeMenu() {
      this.$emit('update:mobileMenuOpen', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './../assets/css/p1-menu.scss';
@import './../assets/css/p2-menu.scss';
@import './../assets/css/p3-menu.scss';

.close { display: none; }
.menu {
  position: absolute;
  right: 20px;
  z-index: 3;
  &.fixed { position: fixed; }
}
li {
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  background-repeat: no-repeat;
  cursor: pointer;
  span {
    visibility: hidden;
    opacity: 0;
    white-space: nowrap;
    position: absolute;
    top: 8px\0;
    right: 0;
    font-size: 20px;
    font-weight: bold;
    color: #3f3e3e;
    transition: opacity .5s;
    z-index: -1;
  }
}


@media screen and (max-width: 1024px) {
  .close {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: 160px;
    height: 160px;
    cursor: pointer;
    &:before, &:after {
      content: '';
      position: absolute;
      top: 90px;
      left: 60px;
      width: 60px;
      height: 6px;
      border-radius: 2px;
      background-color: #fff;
      transform: rotate(-45deg);
    }
    &:after { transform: rotate(45deg); }
  }
  .menu {
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    overflow: auto;
    padding-bottom: 160px;

  }
  li {
    border-bottom: 3px solid #fff;
    span {
      visibility: visible;
      opacity: 1;
      position: static;
      font-size: 44px;
      color: #fff;
    }
  }
}


@media screen and (max-width: 750px) {
  .close {
    width: 160/750*100+vw;
    height: 160/750*100+vw;
    &:before, &:after {
      top: 90/750*100+vw;
      left: 60/750*100+vw;
      width: 60/750*100+vw;
      height: 6/750*100+vw;
      border-radius: 2/750*100+vw;
    }
  }
  .menu { padding-bottom: 160/750*100+vw; }
  li {
    border-bottom: 3/750*100+vw solid #fff;
    span { font-size: 44/750*100+vw; }
  }
}
</style>
