<template>
<div :class="`wrap on-${on+1}`">
  <div class="label_wrap">
    <div class="label label1" @click="on = 0">
      <span>2018<span class="desktop">/</span><br class="mobile"><i>6</i>/<i>25</i> 至 <i>7</i>/<i>17</i></span>
    </div>
    <div class="label label2" @click="on = 1">
      <span>2018<span class="desktop">/</span><br class="mobile"><i>7</i>/<i>11</i> 至 <i>7</i>/<i>17</i></span>
    </div>
  </div>
  <div class="content_wrap">
    <div class="cnt cnt1">
      <div class="cnt-box style-red">
        <h5><div class="img img-cnt1"></div><p><span class="color">野村五年階梯到期新興市場債券基金</span>(本基金有相當比重投資於非投資等級之高風險債券且配息來源可能為本金)<span class="info">注1</span></p></h5>
        <div class="row">
          <div class="card card1">
            <h6>第1喜</h6>
            <div class="row aic">
              <div class="img img-icon1"></div>
              <p class="text-box">手續費<br class="desktop"><span class="color big">5</span>折</p>
            </div>
          </div>
          <div class="card card2">
            <h6>第2喜<span>買一送二</span></h6>
            <div class="row aic">
              <div class="img img-icon2"></div>
              <p class="text-box">申購送：<span class="color">投信精選債券基金</span>單筆申購0%手續費優惠券<span class="info">注2</span></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card card3">
            <h6>第3喜<span>紅利倍倍送</span></h6>
            <div class="row aic">
              <div class="img img-icon3"></div>
              <p class="text-box">申購滿<span class="color">10</span>萬,<br class="desktop">加碼紅利！<br class="desktop">(如<span class="desktop">右</span><span class="mobile">下</span>表)</p>
            </div>
          </div>
          <div class="card card4 nostyle">
            <div class="row">
              <table>
                <tr>
                  <th>申購金額</th>
                  <th>加碼紅利</th>
                </tr>
                <tr>
                  <td>100,000~199,999</td>
                  <td>1,000點</td>
                </tr>
                <tr>
                  <td>200,000~499,999</td>
                  <td>3,000點</td>
                </tr>
                <tr>
                  <td>500,000~999,999</td>
                  <td>8,000點</td>
                </tr>
                <tr>
                  <td>1,000,000以上</td>
                  <td>15,000點</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <p class="bottom-text">只要申購 <span class="color">2</span> 檔以上基金，更可享紅利倍倍送<span class="info">注4</span></p>
      </div>
    </div>
    <div class="cnt cnt2">
      <div class="cnt-box style-blue">
        <h5><div class="img img-cnt2"></div><p><span class="color">野村中國境內新興債券基金</span>(本基金有相當比重投資於非投資等級之高風險債券)</p></h5>
        <h5><div class="img img-cnt2"></div><p><span class="color">野村邊境市場高收益主權債基金</span>(本基金主要係投資於非投資等級之高風險債券且配息來源可能為本金)</p></h5>
        <div class="row">
          <div class="card card1">
            <h6>第1喜</h6>
            <div class="row aic">
              <div class="img img-icon1"></div>
              <p class="text-box">手續費<br class="desktop"><span class="color big">5</span>折</p>
            </div>
          </div>
          <div class="card card2">
            <h6>第2喜<span>買一送二</span></h6>
            <div class="row aic">
              <div class="img img-icon2"></div>
              <p class="text-box">申購送：<span class="color">2張投信股票型基金*</span>單筆申購0%手續費優惠券<span class="info">注3</span></p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="card card3">
            <h6>第3喜<span>紅利倍倍送</span></h6>
            <div class="row aic">
              <div class="img img-icon3"></div>
              <p class="text-box">申購滿<span class="color">10</span>萬,<br class="desktop">加碼紅利！<br class="desktop">(如<span class="desktop">右</span><span class="mobile">下</span>表)</p>
            </div>
          </div>
          <div class="card card4 nostyle">
            <div class="row">
              <table>
                <tr>
                  <th>申購金額</th>
                  <th>加碼紅利</th>
                </tr>
                <tr>
                  <td>100,000~199,999</td>
                  <td>1,000點</td>
                </tr>
                <tr>
                  <td>200,000~499,999</td>
                  <td>3,000點</td>
                </tr>
                <tr>
                  <td>500,000~999,999</td>
                  <td>8,000點</td>
                </tr>
                <tr>
                  <td>1,000,000以上</td>
                  <td>15,000點</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <p class="bottom-text">只要申購 <span class="color">2</span> 檔以上基金，更可享紅利倍倍送<span class="info">注4</span></p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'labelSlider',
  data() {
    return {
      on: 0,
    };
  },
  methods: {
  }
};
</script>

<style lang="scss" scoped>
.mobile { display: none; }

.wrap {
  max-width: 788px;
  width: 100%;
  margin: 54px auto 0;
}
.label_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}
.on {
  &-1 {
    .label1 {
      color: #c02522;
      z-index: 2;
      &:before, &:after {
        visibility: visible;
        background-color: #fffcfa;
      }
    }
    .cnt1 {
      display: block;
      background-color: #fffcfa;
    }
  }
  &-2 {
    .label2 {
      color: #004695;
      z-index: 2;
      &:before, &:after {
        visibility: visible;
        background-color: #fafdff;
      }
    }
    .cnt2 {
      display: block;
      background-color: #fafdff;
    }
  }
}

.label {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 326px;
  width: 100%;
  height: 76px;
  margin: 0 5px;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #fff;
  cursor: pointer;
  span {
    position: relative;
    z-index: 1;
  }
  i {
    font-style: normal;
    font-size: 30px;
  }
  &:before {
    visibility: hidden;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
    height: 70px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: #fff;
    box-shadow: 0 -4px 5px -2px rgba(#000,.3);
  }
  &1 { background-color: #c02522; }
  &2 { background-color: #3a87d1; }
}

.content_wrap {
  position: relative;
  z-index: 1;
}
.cnt {
  display: none;
  padding: 35px 0;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 -4px 2px rgba(#000,.2);
  &-box {
    max-width: 640px;
    width: 100%;
    margin: 0 auto;
  }
}

.style-red {
  .color { color: #c02522; }
  .info {
    color: #c02522;
    background-color: #fddedd;
  }
  .card {
    border-color: #fca4a2;
    &.nostyle { border-color: #fca4a2; }
    &.nostyle:after { background-color: #fca4a2; }
    h6 {
      color: #c02522;
      border-color: #c02522;
    }
  }
  table { border-color: #fcd35d; }
  th { color: #c6a12b; }
  th:nth-of-type(1), td:nth-of-type(1) { border-color: #fcd35d; }
  tr:nth-of-type(even) { background-color: #fcd35d; }
}
.style-blue {
  .color { color: #004695; }
  .info {
    color: #004695;
    background-color: #ddeaff;
  }
  .card {
    border-color: #a4cef9;
    &.nostyle { border-color: #a4cef9; }
    &.nostyle:after { background-color: #a4cef9; }
    h6 {
      color: #004695;
      border-color: #004695;
    }
  }
  table { border-color: #a4cef9; }
  th { color: #013a7a; }
  th:nth-of-type(1), td:nth-of-type(1) { border-color: #a4cef9; }
  tr:nth-of-type(even) { background-color: #a4cef9; }
}

.img {
  background-image: url(./../assets/img/com/p-sprites.png);
  background-repeat: no-repeat;
  &-cnt1 {
    vertical-align: top;
    display: inline-block;
    width: 13px;
    height: 24px;
    margin-right: 10px;
    background-position: -156px -484px;
  }
  &-cnt2 {
    width: 23px;
    height: 23px;
    margin-right: 10px;
    background-position: -527px -377px;
  }
  &-icon1 {
    width: 78px;
    height: 74px;
    margin: 0 46px 0 35px;
    background-position: -239px -377px;
  }
  &-icon2 {
    width: 94px;
    height: 87px;
    margin: 0 26px 0 32px;
    background-position: -10px -377px;
  }
  &-icon3 {
    width: 95px;
    height: 83px;
    margin: 0 32px 0 36px;
    background-position: -124px -377px;
  }
}

h5 {
  text-align: justify;
  letter-spacing: 3px;
  display: flex;
  line-height: 1.4;
  font-size: 24px;
  font-weight: bold;
  p { flex: 1; }
  & ~ h5 { margin-top: 16px; }
}
.info {
  text-align: center;
  display: inline-block;
  width: 40px;
  line-height: 1.4;
  margin-left: 6px;
  font-size: 14px;
  font-weight: bold;
  border-radius: 8px;
}

.row {
  display: flex;
  &.jcc { justify-content: center; }
  &.aic { align-items: center; }
}
.card {
  position: relative;
  width: 50%;
  margin-top: 30px;
  border-left: 1px solid;
  &.nostyle {
    border-left: none;
    &:before { display: block; }
    .row { margin-top: 60px; }
  }
  .row { min-height: 122px; }
}
h6 {
  display: flex;
  align-items: center;
  height: 42px;
  padding-left: 16px;
  margin-left: -1px;
  font-size: 24px;
  font-weight: bold;
  border-left: 11px solid;
  span {
    margin-left: 20px;
    font-size: 28px;
  }
}
.text-box {
  text-align: justify;
  max-width: 46%;
  line-height: 1.4;
  font-size: 20px;
  font-weight: bold;
  color: #333232;
}
.big {
  margin-right: 16px;
  font-size: 47px;
}
table {
  max-width: 266px;
  width: 100%;
  line-height: 1.6;
  margin: 0 0 14px 30px;
  border: 1px solid;
  font-size: 16px;
  font-weight: bold;
}
th:nth-of-type(1), td:nth-of-type(1) { border-right: 1px solid; }
tr:nth-of-type(even) { th:nth-of-type(1), td:nth-of-type(1) { border-color: #fff; } }
td {
  &:nth-of-type(1) {
    padding-left: 20px;
    text-align: left;
  }
  &:nth-of-type(2) {
    padding-right: 20px;
    text-align: right;
  }
}

.bottom-text {
  text-align: right;
  font-size: 20px;
  font-weight: bold;
  color: #333232;
}


@media screen and (max-width: 1024px) {
  .label_wrap { padding: 0 60/1024*100vw; }
  .cnt { padding: 35/1024*100vw; }
}


@media screen and (max-width: 750px) {
  .mobile { display: inline-block; }
  .desktop { display: none; }
  .wrap { margin: 40/750*100vw auto 0; }
  .label_wrap { padding: 0; }
  .label {
    text-align: center;
    height: 124/750*100vw;
    line-height: 1.4;
    margin: 0;
    padding: 10/750*100vw;
    font-size: 22/750*100vw;
    border-top-left-radius: 14/750*100vw;
    border-top-right-radius: 14/750*100vw;
    i { font-size: 32/750*100vw; }
    &:after {
      visibility: hidden;
      content: '';
      position: absolute;
      left: 0;
      bottom: -3/750*100vw;
      width: 100%;
      height: 5/750*100vw;
    }
    &:before {
      height: 118/750*100vw;
      border-top-left-radius: 14/750*100vw;
      border-top-right-radius: 14/750*100vw;
      box-shadow: 0 #{-3/750*100vw} 7/750*100vw 1/750*100vw rgba(#000,.3);
    }
  }
  .cnt {
    padding: 35/750*100vw 40/750*100vw;
    border-radius: 10/750*100vw;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    box-shadow: 0 0 5/750*100vw 1/750*100vw rgba(#000,.3);
  }
  .img {
    background-size: 842/750*100vw 571/750*100vw;
    &-cnt1 {
      width: 13/750*100vw;
      height: 24/750*100vw;
      margin-right: 20/750*100vw;
      margin-top: 4/750*100vw;
      background-position: #{-156/750*100vw} #{-484/750*100vw};
    }
    &-cnt2 {
      width: 23/750*100vw;
      height: 23/750*100vw;
      margin-right: 10/750*100vw;
      margin-top: 4/750*100vw;
      background-position: #{-527/750*100vw} #{-377/750*100vw};
    }
    &-icon1 {
      width: 78/750*100vw;
      height: 74/750*100vw;
      margin: 0 60/750*100vw 0 45/750*100vw;
      background-position: #{-239/750*100vw} #{-377/750*100vw};
    }
    &-icon2 {
      width: 98/750*100vw;
      height: 87/750*100vw;
      margin: 0 46/750*100vw 0 42/750*100vw;
      background-position: #{-10/750*100vw} #{-377/750*100vw};
    }
    &-icon3 {
      width: 95/750*100vw;
      height: 83/750*100vw;
      margin: 0 52/750*100vw 0 46/750*100vw;
      background-position: #{-124/750*100vw} #{-377/750*100vw};
    }
  }
  h5 {
    font-size: 30/750*100vw;
    & ~ h5 { margin-top: 24/750*100vw; }
  }
  .info {
    width: 54/750*100vw;
    margin-left: 6/750*100vw;
    font-size: 20/750*100vw;
    border-radius: 14/750*100vw;
  }
  .row { flex-direction: column; }
  .card {
    width: 84%;
    margin: 40/750*100vw 0 0 40/750*100vw;
    border-left: 1/750*100vw solid;
    .row {
      flex-direction: row;
      height: auto;
      min-height: auto;
      padding: 24/750*100vw 0;
    }
    &.nostyle {
      margin-top: 0;
      border-left: 1/750*100vw solid;
      &:after {
        content: '';
        position: absolute;
        left: -1/750*100vw;
        bottom: -60/750*100vw;
        width: 1px;
        height: 60/750*100vw;
      }
      .row {
        margin-top: 0;
        padding: 0;
      }
    }
  }
  h6 {
    height: 42/750*100vw;
    padding-left: 16/750*100vw;
    margin-left: -1/750*100vw;
    font-size: 30/750*100vw;
    border-left: 11/750*100vw solid;
    span {
      margin-left: 20/750*100vw;
      font-size: 32/750*100vw;
    }
  }
  .text-box {
    letter-spacing: 3/750*100vw;
    max-width: 250/750*100vw;
    font-size: 30/750*100vw;
  }
  .big {
    margin: 0 16/750*100vw;
    font-size: 47/750*100vw;
  }
  table {
    max-width: 414/750*100vw;
    margin: 0 0 24/750*100vw 30/750*100vw;
    border: 1/750*100vw solid;
    font-size: 24/750*100vw;
  }
  th:nth-of-type(1), td:nth-of-type(1) { border-right: 1/750*100vw solid; }
  td {
    &:nth-of-type(1) { padding-left: 34/750*100vw; }
    &:nth-of-type(2) { padding-right: 34/750*100vw; }
  }
  .bottom-text {
    text-align: left;
    width: 512/750*100vw;
    margin-left: auto;
    padding: 0 30/750*100vw;
    font-size: 30/750*100vw;
  }
}
</style>
