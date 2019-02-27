<template>
  <article class="article_box article5">
    <div class="a-title">
      <h3>
        <svg viewBox="0 0 103 103">
          <path fill="#fff" stroke="#d60029" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" d="M87.5,53c3.2,0,6,1.5,7.9,3.7c2,0.3,4.1,0.1,6.1-0.4V25.5H71.4c-0.4-1.8-0.5-3.6-0.3-5.4c2.2-1.9,3.7-4.8,3.7-8c0-5.8-4.6-10.5-10.4-10.5c-5.7,0-10.4,4.7-10.4,10.5c0,3.2,1.4,6.1,3.7,8c0.3,1.8,0.2,3.7-0.3,5.4H27.5v30.2c-0.4,0.2-0.9,0.4-1.3,0.5c-2.1,0.7-4.3,0.9-6.4,0.5C17.9,54.4,15,53,11.9,53C6.1,53,1.5,57.7,1.5,63.5C1.5,69.3,6.1,74,11.9,74c3.2,0,6-1.5,7.9-3.7c2.1-0.3,4.3-0.1,6.4,0.5c0.4,0.1,0.9,0.3,1.3,0.5v30.2h31.4c0.6-2,0.8-4.2,0.5-6.3c-2.2-1.9-3.7-4.8-3.7-8c0-5.8,4.6-10.5,10.4-10.5c5.7,0,10.4,4.7,10.4,10.5c0,3.2-1.4,6.1-3.7,8c-0.3,2.1-0.1,4.2,0.5,6.3h28.3V70.7c-2-0.6-4-0.7-6.1-0.4c-1.9,2.3-4.7,3.7-7.9,3.7c-5.7,0-10.4-4.7-10.4-10.5C77.2,57.7,81.8,53,87.5,53z"/>
        </svg>
        <span>基金小檔案</span>
      </h3>
    </div>
    <div class="article_content">
      <svg style="display:none"><defs><path id="j" d="M0,0v0.4c3.8,0,6.9,2.8,6.9,6.2c0,5.8-6.9,4.8-6.9,12.3c0,5.1,4.6,9.2,10.3,9.2c5.6,0,10.1-4,10.3-9v-0.5c-0.2-7.2-6.9-6.3-6.9-12c0-3.4,3.1-6.2,6.9-6.2V0H0z"/></defs></svg>
      <div class="p-box box1">
        <svg class="jigsaw-icon t color-d" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
        <svg class="jigsaw-icon b color-d" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
        <svg class="jigsaw-icon l color-l" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
        <svg class="jigsaw-icon r color-l" viewBox="0 0 20.6 28.1"><use xlink:href="#j"/></svg>
        <table>
          <tr>
            <th class="vam">投資目標及特色</th>
            <td>
              <ol>
                <li>主要透過布局於中國境內發行的投資級債券，參與中國債券市場全球化的投資契機</li>
                <li>搭配布局中國發行人民幣及非人民幣計價的企業債，目標創造收益並分散投資組合</li>
                <li>高收益債券持有比重：佔基金淨資產40%以下</li>
              </ol>
            </td>
          </tr>
          <tr>
            <th>風險收益等級* </th>
            <td>RR3</td>
          </tr>
          <tr>
            <th>基金類別</th>
            <td>債券型</td>
          </tr>
          <tr>
            <th class="vat">股份類別</th>
            <td>新台幣（累積）/ 美元（累積）/ 人民幣（累積）</td>
          </tr>
          <tr>
            <th>保管銀行</th>
            <td>玉山銀行</td>
          </tr>
          <tr>
            <th>基金經理人</th>
            <td>謝芝朕</td>
          </tr>
          <tr>
            <th>協管基金經理人</th>
            <td>吳鎧</td>
          </tr>
          <tr>
            <th>管理費</th>
            <td>1.5%</td>
          </tr>
          <tr>
            <th>保管費</th>
            <td>0.26%</td>
          </tr>
          <tr>
            <th>閉鎖期</th>
            <td>基金成立滿三個月</td>
          </tr>
          <tr>
            <th>閉鎖期</th>
            <td>3個月</td>
          </tr>
          <tr>
            <th>贖回淨值計算日</th>
            <td>T</td>
          </tr>
          <tr>
            <th>贖回付款日</th>
            <td>T +7</td>
          </tr>
        </table>
        <p class="info">*風險收益等級為投信投顧公會針對基金之價格波動風險程度，依基金投資標的風險屬性與投資地區市場風險狀況編製，分類為RR1-RR5五級，數字越大代表風險越高，此風險級數僅供參考。</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'article4',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
@import './../../assets/css/p2-article.scss';

.article5 { background-color: #fbe2e7; }
.a-title { background-color: #d60029; }

.p-box {
  position: relative;
  max-width: 760px;
  width: 100%;
  margin: 0 70px;
  padding: 20px 0;
  border-radius: 24px;
  background-color: #fff;
  * {
    position: relative;
    z-index: 1;
  }
}
.jigsaw-icon {
  position: absolute;
  width: 46px;
  height: 60px;
  &.t {
    right: 106px;
    top: -1px;
  }
  &.b {
    transform: rotate(180deg);
    right: 106px;
    bottom: -1px;
  }
  &.l {
    transform: rotate(90deg);
    top: 388px;
    left: -52px;
  }
  &.r {
    transform: rotate(-90deg);
    top: 250px;
    right: -52px;
  }
}
.color-l { fill: #fff; }
.color-d { fill: #fbe2e7; }

.vat { vertical-align: top; }
.vam { vertical-align: middle; }

tr:nth-of-type(even) { background-color: #ffcfd9; }
th, td {
  line-height: 1.4;
  padding: 7px 0;
}
th {
  width: 200px;
  padding-left: 22px;
  font-size: 20px;
  font-weight: bold;
}
td {
  font-size: 19px;
  padding-right: 26px;
}
ol {
  list-style: decimal;
  padding-left: 20px;
}
li { margin-bottom: 10px; }

.info { margin: 20px 24px 0; }



.article5 {
  $size: 1.16;
  @media screen and (max-width: 1400px) {
    .p-box {
      max-width: 760/1400*100vw;
      margin: 0 70/1400*100vw;
      padding: 20/1400*100vw 0;
      border-radius: 24/1400*100vw;
    }
    .jigsaw-icon {
      width: 46/1400*100vw;
      height: 60/1400*100vw;
      &.t {
        right: 106/1400*100vw;
        top: -1/1400*100vw;
      }
      &.b {
        right: 106/1400*100vw;
        bottom: -1/1400*100vw;
      }
      &.l {
        top: 388/1400*100vw;
        left: -52/1400*100vw;
      }
      &.r {
        top: 250/1400*100vw;
        right: -52/1400*100vw;
      }
    }
    th, td { padding: 7/1400*100vw 0; }
    th {
      width: 200/1400*100vw;
      padding-left: 22/1400*100vw;
      font-size: 20/1400*100vw;
    }
    td {
      font-size: 19/1400*100vw;
      padding-right: 26/1400*100vw;
    }
    ol { padding-left: 20/1400*100vw; }
    li { margin-bottom: 10/1400*100vw; }
    .info { margin: 20/1400*100vw 24/1400*100vw 0; }
  }


  @media screen and (max-width: 1024px) {
    .p-box {
      max-width: 750px;
      margin: 0 auto;
      padding: 20px 0;
      border-radius: 16px;
    }
    .jigsaw-icon {
      width: 46px;
      height: 60px;
      &.t {
        right: 106px;
        top: -1px;
      }
      &.b {
        right: 106px;
        bottom: -1px;
      }
      &.l, &.r { display: none; }
    }
    th, td { padding: 10px 0; }
    th {
      width: 254px;
      padding-left: 24px;
      font-size: 28px;
    }
    td {
      font-size: 28px;
      padding-right: 26px;
    }
    ol { padding-left: 36px; }
    li {
      text-align: justify;
      margin-bottom: 10px;
    }
    .info {
      text-align: justify;
      margin: 36px 34px 0;
    }
  }


  @media screen and (max-width: 750px) {
    .p-box {
      max-width: 694/750*100vw;
      padding: 20/750*100vw 0;
      border-radius: 16/750*100vw;
    }
    .jigsaw-icon {
      width: 46/750*100vw;
      height: 60/750*100vw;
      &.t {
        right: 106/750*100vw;
        top: -1/750*100vw;
      }
      &.b {
        right: 106/750*100vw;
        bottom: -1/750*100vw;
      }
    }
    th, td { padding: 10/750*100vw 0; }
    th {
      width: 254/750*100vw;
      padding-left: 24/750*100vw;
      font-size: 28/750*100vw;
    }
    td {
      font-size: 28/750*100vw;
      padding-right: 26/750*100vw;
    }
    ol { padding-left: 36/750*100vw; }
    li { margin-bottom: 10/750*100vw; }
    .info { margin: 36/750*100vw 34/750*100vw 0; }
  }
}
</style>
