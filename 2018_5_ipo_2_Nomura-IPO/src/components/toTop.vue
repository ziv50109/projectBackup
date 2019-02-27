<template>
<div class="toTop" @click="scrollToY(0, 600)">
  <svg viewBox="0 0 63.1 37.2"><path fill="#878787" d="M54.5,33.4c1.8,2.1,4.9,3.8,6.9,3.8c2,0,2.2-1.7,0.4-3.8L34.8,1.6c-1.8-2.1-4.7-2.1-6.5,0L1.2,33.4c-1.8,2.1-1.6,3.8,0.4,3.8s5.1-1.7,6.9-3.8l19.7-23.2c1.8-2.1,4.7-2.1,6.5,0L54.5,33.4z"/></svg>
</div>
</template>

<script>
import scrollTo from 'assets/js/scrollTo';

export default {
  name: 'toTop',
  mixins: [scrollTo],
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.toTop {
  position: fixed;
  right: 35px;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  border: 3px solid rgba(#cbcbcb, .9);
  background-color: rgba(#fff, .9);
  cursor: pointer;
  z-index: 1;
  svg {
    width: 30px;
    height: 17px;
  }
}

@media screen and (max-width: 1024px) {
  .toTop {
    right: 22px;
    bottom: 170px;
    width: 104px;
    height: 104px;
    border-radius: 10px;
    border-width: 4px;
    svg {
      width: 64px;
      height: 36px;
    }
  }
}


/*如果視窗為橫向，視窗為直向: orientation: portrait*/
@media screen and (max-width: 750px) and (orientation: landscape),
       screen and (max-width: 768px) and (orientation: portrait) {
  .toTop {
    right: 22*.65/750*100+vw;
    bottom: 180*.65/750*100+vw;
    width: 104*.65/750*100+vw;
    height: 104*.65/750*100+vw;
    border-radius: 10*.65/750*100+vw;
    border-width: 4*.65/750*100+vw;
    svg {
      width: 64*.65/750*100+vw;
      height: 36*.65/750*100+vw;
    }
  }
}


@media screen and (max-width: 750px) {
  .toTop {
    right: 22/750*100+vw;
    bottom: 170/750*100+vw;
    width: 104/750*100+vw;
    height: 104/750*100+vw;
    border-radius: 10/750*100+vw;
    border-width: 4/750*100+vw;
    svg {
      width: 64/750*100+vw;
      height: 36/750*100+vw;
    }
  }
}

</style>
