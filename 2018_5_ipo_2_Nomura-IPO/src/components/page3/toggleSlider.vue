<template>
<div class="toggle-slider">
  <div class="toggle-btn_wrap" :style="`background-color: ${ color }`" @click="isOpen = !isOpen">
    <p>{{ title }}</p>
    <div :class="`icon ${ isOpen ? 'open' : '' }`"></div>
  </div>
  <transition name="toggle">
    <div class="toggle-center_box" v-show="isOpen">
      <slot></slot>
    </div>
  </transition>
</div>
</template>

<script>
export default {
  name: 'toggleSlider',
  props: {
    title: String,
    color: String,
    defaultshow: Boolean,
  },
  data() {
    return {
      isOpen: this.$props.defaultshow,
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.toggle-slider { display: none; }

.toggle {
  &-enter, &-leave-to { transform: scaleY(0); }
  &-enter-active, &-leave-active { transition: transform .3s; }
}

@keyframes bounce {
  0% { transform: rotate(180deg) translate3d(0,0,0); }
  35% { transform: rotate(180deg) translate3d(0,-30%,0); }
  100% { transform: rotate(180deg) translate3d(0,0,0); }
}
@keyframes rotate {
  0% { transform: rotate(180deg); }
  100% { transform: rotate(0); }
}


@media screen and (max-width: 1024px) {
  .toggle-slider {
    position: relative;
    display: block;
  }
  .toggle-btn_wrap {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 76px;
    padding: 0 30px 0 25px;
    border-radius: 10px;
    cursor: pointer;
    z-index: 1;
    p {
      font-size: 48px;
      font-weight: bold;
      color: #fff;
    }
    .icon {
      width: 38px;
      height: 23px;
      background-image: url(./../../assets/img/p3/toggle-icon.png);
      background-repeat: no-repeat;
      background-size: contain;
      transform: rotate(180deg);
      animation: bounce 1s infinite cubic-bezier(0.39, 0.575, 0.565, 1);
      &.open {
        animation: none;
        transform: rotate(0);
      }
    }
  }
  .toggle-center_box { transform-origin: top; }
}


@media screen and (max-width: 750px) {
  .toggle-btn_wrap {
    height: 76/750*100+vw;
    padding: 0 30/750*100+vw 0 25/750*100+vw;
    border-radius: 10/750*100+vw;
    p { font-size: 48/750*100+vw; }
    .icon {
      width: 38/750*100+vw;
      height: 23/750*100+vw;
    }
  }
}
</style>
