<template>
<div class="hamburger" @click="openMenu()">
  <span></span>
  <span></span>
  <span></span>
</div>
</template>

<script>
export default {
  name: 'hamburgerIcon',
  props: {
    mobileMenuOpen: Boolean,
  },
  data() {
    return {
    };
  },
  methods: {
    openMenu() {
      this.$emit('update:mobileMenuOpen', true);
    },
  },
};
</script>

<style lang="scss" scoped>
.hamburger { display: none; }
.p1 .hamburger { background-color: #17569D; }
.p2 .hamburger { background-color: #d60029; }
.p3 .hamburger { background-color: #3271ab; }

@media screen and (max-width: 1024px) {
  .hamburger {
    position: fixed;
    top: 52px;
    right: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 96px;
    height: 96px;
    padding: 22px 0;
    border-radius: 10px;
    cursor: pointer;
    z-index: 2;
    span {
      display: block;
      width: 60px;
      height: 7px;
      border-radius: 4px;
      background-color: #fff;
    }
  }
}


/*如果視窗為橫向，視窗為直向: orientation: portrait*/
@media screen and (max-width: 750px) and (orientation: landscape),
       screen and (max-width: 768px) and (orientation: portrait) {
  .hamburger {
    top: 42*.74/750*100+vw;
    right: 22*.74/750*100+vw;
    width: 96*.74/750*100+vw;
    height: 96*.74/750*100+vw;
    padding: 22*.74/750*100+vw 0;
    border-radius: 10*.74/750*100+vw;
    span {
      width: 60*.74/750*100+vw;
      height: 7*.74/750*100+vw;
      border-radius: 4*.74/750*100+vw;
    }
  }
}


@media screen and (max-width: 750px) {
  .hamburger {
    top: 42/750*100+vw;
    right: 22/750*100+vw;
    width: 96/750*100+vw;
    height: 96/750*100+vw;
    padding: 22/750*100+vw 0;
    border-radius: 10/750*100+vw;
    span {
      width: 60/750*100+vw;
      height: 7/750*100+vw;
      border-radius: 4/750*100+vw;
    }
  }
}

</style>
