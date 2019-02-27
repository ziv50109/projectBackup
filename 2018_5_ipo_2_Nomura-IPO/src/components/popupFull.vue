<template>
<transition name="popup" mode="out-in" @after-enter="afterEnter()" @after-leave="afterLeave()">
  <div class="popup_wrap" v-if="popupShow">
    <div class="popup_bg" @click="close()"></div>
    <div class="popup_content-wrap">
      <div class="close" @click="close()"></div>
      <slot></slot>
    </div>
  </div>
</transition>
</template>

<script>
export default {
  name: 'popup',
  props: {
    popupShow: Boolean,
  },
  data() {
    return {
    };
  },
  methods: {
    close() {
      this.$emit('update:popupShow', false);
    },
    afterEnter() {
    },
    afterLeave() {
    }
  }
};
</script>

<style lang="scss" scoped>
.popup {
  &-enter, &-leave-to { opacity: 0; }
  &-enter-active, &-leave-active { transition: opacity .3s; }
}

.popup_wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  overflow: auto;
  z-index: 5;
  background-color: rgba(#000, .4);
}
.popup_bg {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.popup_content-wrap {
  position: relative;
  max-width: 960px;
  margin: 180px auto;
  z-index: 1;
}
.close {
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border: 3px solid #3271ab;
  cursor: pointer;
  z-index: 1;
  &:before, &:after {
    content: '';
    position: absolute;
    top: 17px;
    left: 7px;
    width: 24px;
    height: 4px;
    background-color: #3271ab;
    transform: rotate(45deg);
  }
  &:after { transform: rotate(-45deg); }
}


@media screen and (max-width: 1024px) {
  .popup_wrap {
    position: fixed;
    display: block;
    z-index: 5;
  }
  .popup_content {
    top: 10%;
    min-height: 640px;
  }
}
@media screen and (max-width: 1024px) {
  .popup_wrap { padding: 0 50/1024*100vw; }
}

@media screen and (max-width: 750px) {
  .popup_wrap { padding: 0 37/750*100vw; }
  .popup_content-wrap { margin: 180/750*100vw auto; }
  .popup_content {
    top: 0;
    min-height: 100vh;
  }
  .close {
    top: 24/750*100vw;
    right: 24/750*100vw;
    width: 44/750*100vw;
    height: 44/750*100vw;
    border: 3/750*100vw solid #3271ab;
    &:before, &:after {
      top: 17/750*100vw;
      left: 7/750*100vw;
      width: 24/750*100vw;
      height: 4/750*100vw;
    }
  }
}
</style>
