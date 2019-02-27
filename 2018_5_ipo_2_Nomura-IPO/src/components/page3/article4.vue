<template>
  <article class="article_box article4">
    <h3><span>基金小檔案</span></h3>
    <div class="article_content">
      <div class="table_wrap bg-red">
        <div class="title">
          <p>基金<br>資訊</p>
        </div>
        <table>
          <tr>
            <th>基金類別</th>
            <td>債券型</td>
          </tr>
          <tr>
            <th>風險收益等級</th>
            <td>RR3*</td>
          </tr>
          <tr>
            <th>計價幣別</th>
            <td>新台幣 / 美元 / 人民幣（各有累積以及季配股別）</td>
          </tr>
          <tr>
            <th>基金經理人</th>
            <td><span class="fwb">林詩孟</span>14年專業投資經驗<br><span class="fwb">學歷：</span>東吳大學碩士<br>．專長貨幣市場、短期固定收益產品研究及投資<br>．台灣總經研究及G3外匯分析</td>
          </tr>
          <tr>
            <th>保管銀行</th>
            <td>永豐銀行</td>
          </tr>
          <tr>
            <th>首次配息日</th>
            <td>基金成立屆滿2個月後，於次一季進行首次收益分配</td>
          </tr>
          <tr>
            <th>首次定期<br class="mobile">買回日</th>
            <td>基金成立日次一營業日起屆滿第3年當日</td>
          </tr>
          <tr>
            <th>第二次定期<br class="mobile">買回日</th>
            <td>基金成立日次一營業日起屆滿第4年當日</td>
          </tr>
          <tr>
            <th>基金到期日</th>
            <td>基金成立日次一營業日起屆滿第5年當日</td>
          </tr>
          <tr>
            <th>買回付款日</th>
            <td>定期買回：T+7日內 到期日：T+10日內</td>
          </tr>
        </table>
      </div>

      <div class="table_wrap bg-green">
        <div class="title">
          <p>相關<br>費用</p>
        </div>
        <table>
          <tr>
            <th>經理費</th>
            <td>基金成立第一天收取2.0%，其餘按年率0.6%逐日計收<br>(如受益人提前申請買回或經理公司依本契約辦理定期買回者，前述固定2.0%費用不予退還。）</td>
          </tr>
          <tr>
            <th>保管費</th>
            <td>0.12%</td>
          </tr>
          <tr>
            <th>提前買回費用</th>
            <td>2%（本基金定期買回日及到期日當日，皆不收取買回費用(2%)，其他時間買回皆需收取買回費用(2%)，提前買回費用歸入本基金資產。本基金之定期買回日及到期買回當日，皆不接受受益人提出買回之請求。）</td>
          </tr>
        </table>
      </div>

      <div class="table_wrap bg-blue">
        <div class="title">
          <p>其他</p>
        </div>
        <table>
          <tr>
            <th class="vam">基金成立日起不再接受受益權單位之申購</th>
          </tr>
        </table>
      </div>

      <p class="info">*風險收益等級為投信投顧公會針對基金之價格波動風險程度，依基金投資標的風險屬性與投資地區市場風險狀況編制，分類為RR1-RR5五級，數字越大代表風險越高，此風險級數僅供參考。本基金經金管會核准或同意生效，惟不表示絕無風險。</p>
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
@import './../../assets/css/p3-article.scss';

.mobile { display: none; }
.vam {
  vertical-align: middle;
  height: 91px;
}


.table_wrap {
  display: flex;
  max-width: 904px;
  width: 100%;
  margin: 0 auto 8px;
  &:first-of-type {
    margin-top: 46px;
  }
  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: none;
    width: 134px;
    margin-right: 8px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    border-radius: 10px;
  }
}

table {
  flex: 1;
  max-width: 770px;
  width: 100%;
}

th {
  text-align: left;
  width: 200px;
  height: 100%;
  line-height: 2;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
}

td {
  text-align: justify;
  line-height: 1.4;
  width: 570px;
  padding: 0 20px 6px 0;
  font-size: 19px;
}

.bg-red {
  .title { background-color: #e8342f; }
  th { color: #e8382f; }
  tr:nth-of-type(odd) { background-color: #FDEDEB; }
}
.bg-green {
  .title { background-color: #00a06e; }
  th { color: #00a06e; }
  tr:nth-of-type(odd) { background-color: #DEF4ED; }
}
.bg-blue {
  .title { background-color: #518ca9; }
  th { color: #518ca9; }
  tr:nth-of-type(odd) { background-color: #DDEEF6; }
}

.info {
  max-width: 904px;
  margin: 10px auto 60px;
  padding-left: 20px;
}


.article4 {
  $size: 1.16;
  @media screen and (max-width: 1400px) {
    .table_wrap { max-width: 904*$size/1400*100+vw; }
    .title { width: 134/1400*100+vw; }
    .info { max-width: 904*$size/1400*100+vw; }
  }

  @media screen and (max-width: 1024px) {
    .mobile { display: block; }
    .vam { height: 91px; }
    .table_wrap {
      max-width: 710px;
      &:first-of-type { margin-top: 56px; }
      .title {
        width: 126px;
        font-size: 34px;
        border-radius: 10px;
      }
    }
    table { width: 576px; }
    th {
      width: 214px;
      height: 100%;
      line-height: 1.3;
      padding: 8px 16px;
      font-size: 28px;
    }
    td {
      line-height: 1.3;
      width: auto;
      padding: 0 20px 6px 0;
      font-size: 28px;
    }
    .info {
      max-width: 904px;
      margin: 30px auto 120px;
      padding-left: 20px;
    }
  }


  @media screen and (max-width: 750px) {
    .vam { height: 91/750*100+vw; }
    .table_wrap {
      max-width: 710/750*100+vw;
      margin: 0 auto 8/750*100+vw;
      &:first-of-type { margin-top: 56/750*100+vw; }
      .title {
        width: 126/750*100+vw;
        font-size: 34/750*100+vw;
        border-radius: 10/750*100+vw;
      }
    }
    table { width: 576/750*100+vw; }
    th {
      width: 214/750*100+vw;
      padding: 8/750*100+vw 16/750*100+vw;
      font-size: 28/750*100+vw;
    }
    td {
      padding: 0 20/750*100+vw 6/750*100+vw 0;
      font-size: 28/750*100+vw;
    }
    .info {
      margin: 30/750*100+vw auto 120/750*100+vw;
      padding-left: 20/750*100+vw;
    }
  }
}
</style>
