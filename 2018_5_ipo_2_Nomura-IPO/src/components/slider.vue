<template>
<div>
  <svg style="display:none"><defs><path id="j" d="M0,0v0.4c3.8,0,6.9,2.8,6.9,6.2c0,5.8-6.9,4.8-6.9,12.3c0,5.1,4.6,9.2,10.3,9.2c5.6,0,10.1-4,10.3-9v-0.5c-0.2-7.2-6.9-6.3-6.9-12c0-3.4,3.1-6.2,6.9-6.2V0H0z"/></defs></svg>
  <div class="jigsaw_box">
    <svg class="jigsaw-icon rt color-d" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
    <svg class="jigsaw-icon lb color-l" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
    <transition name="fade">
      <slot :name="nowIndex" v-if="show"></slot>
    </transition>
    <div class="ctr ctr-l" v-show="nowIndex !== 0" @click="moveTo(nowIndex-1)"></div>
    <div class="ctr ctr-r" v-show="nowIndex !== itemLength-1" @click="moveTo(nowIndex+1)"></div>
  </div>
  <ul class="dot_wrap">
    <li v-for="(dot, index) in itemLength"
      :class="`dot ${ index === nowIndex ? 'active' : '' }`"
      @click="moveTo(index)"></li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'slider',
  mounted() {
    this.init();
  },
  data() {
    return {
      itemLength: 0,
      nowIndex: 0,
      show: true
    };
  },
  watch: {
    nowIndex(val) {
      if(val < 0) { this.nowIndex = 0; }
      if(val > this.itemLength-1) { this.nowIndex = this.itemLength-1; }
    }
  },
  methods: {
    init() {
      this.itemLength = this.objSize(this.$slots);
    },
    objSize(obj) {
      return Object.keys(obj).length;
    },
    moveTo(val) {
      this.show = false;
      this.nowIndex = val;
      setTimeout(()=>{this.show = true},44)
    },
  },
};
</script>

<style lang="scss" scoped>
.jigsaw_box {
  position: relative;
  padding-bottom: 45px;
  border-radius: 20px;
  background-color: #fff;
}
.jigsaw-icon {
  position: absolute;
  width: 50px;
  height: 70px;
  &.rt {
    right: 108px;
    top: -1px;
  }
  &.lb {
    left: 80px;
    bottom: -66px;
  }
}

.fade-enter-active, .fade-leave-active { transition: opacity .44s; }
.fade-enter, .fade-leave-to { opacity: 0; }

.ctr_wrap {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
}
.ctr {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 90px;
  height: 66%;
  cursor: pointer;
  z-index: 1;
  &:before, &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 54px;
    height: 7px;
    border-radius: 10px;
    transform-origin: left;
    transform: rotate(-45deg);
  }
  &:after { transform: translateY(-44%) rotate(45deg); }
  &-l { left: 0; }
  &-r {
    right: 0;
    transform: rotateY(180deg);
  }
}

.dot_wrap {
  display: flex;
  justify-content: center;
  margin: 62px 0 0;
}
.dot {
  width: 22px;
  height: 22px;
  margin: 0 8px;
  border: 2px solid;
  border-radius: 100%;
  cursor: pointer;
}


.color-l { fill: #fff; }
.style1 {
  .color-d { fill: #ffebcd; }
  .ctr { &:after, &:before { background-color: #f29709; } }
  .dot {
    border-color: #f29709;
    &:hover, &.active { background-color: #f29709; }
  }
}
.style2 {
  .color-d { fill: #def4fc; }
  .ctr { &:after, &:before { background-color: #205bab; } }
  .dot {
    border-color: #205bab;
    &:hover, &.active { background-color: #205bab; }
  }
}


@media screen and (max-width: 1400px) {
  .jigsaw_box {
    padding-bottom: 45/1400*100vw;
    border-radius: 20/1400*100vw;
  }
  .jigsaw-icon {
    width: 50/1400*100vw;
    height: 70/1400*100vw;
    &.rt {
      right: 108/1400*100vw;
      top: -1/1400*100vw;
    }
    &.lb {
      left: 80/1400*100vw;
      bottom: -66/1400*100vw;
    }
  }
  .ctr {
    width: 90/1400*100vw;
    height: 66%;
    &:before, &:after {
      width: 54/1400*100vw;
      height: 7/1400*100vw;
      border-radius: 10/1400*100vw;
    }
  }
  .dot_wrap { margin: 62/1400*100vw 0 0; }
  .dot {
    width: 22/1400*100vw;
    height: 22/1400*100vw;
    margin: 0 8/1400*100vw;
    border: 2/1400*100vw solid;
  }
}


@media screen and (max-width: 1024px) {
  .jigsaw_box {
    padding-bottom: 84px;
    border-radius: 20px;
  }
  .jigsaw-icon {
    width: 57px;
    height: 88px;
    &.rt {
      right: 28px;
      top: -6px;
    }
    &.lb {
      left: auto;
      right: 28px;
      bottom: -6px;
      transform: rotate(180deg);
      fill: #DEF4FC;
    }
  }
  .ctr {
    width: 74px;
    &:before, &:after {
      width: 54px;
      height: 7px;
      border-radius: 10px;
    }
  }
  .dot_wrap { margin: 34px 0 0; }
  .dot {
    width: 37px;
    height: 37px;
    margin: 0 12px;
    border: 4px solid;
  }
}


@media screen and (max-width: 750px) {
  .jigsaw_box {
    padding-bottom: 84/750*100vw;
    border-radius: 0;
  }
  .jigsaw-icon {
    width: 57/750*100vw;
    height: 88/750*100vw;
    &.rt {
      right: 28/750*100vw;
      top: -6/750*100vw;
    }
    &.lb {
      right: 28/750*100vw;
      bottom: -6/750*100vw;
    }
  }
  .ctr {
    width: 74/750*100vw;
    &:before, &:after {
      width: 54/750*100vw;
      height: 7/750*100vw;
      border-radius: 10/750*100vw;
    }
  }
  .dot_wrap { margin: 34/750*100vw 0 0; }
  .dot {
    width: 37/750*100vw;
    height: 37/750*100vw;
    margin: 0 12/750*100vw;
    border: 4/750*100vw solid;
  }
}
</style>
