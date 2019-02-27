<template>
  <footer>
    <div class="footer_box">
      <h4>野村證券投資信託股份有限公司</h4>
      <p class="info"><a href="https://www.google.com/maps/place/110%E5%8F%B0%E5%8C%97%E5%B8%82%E4%BF%A1%E7%BE%A9%E5%8D%80%E4%BF%A1%E7%BE%A9%E8%B7%AF%E4%BA%94%E6%AE%B57%E8%99%9F%E5%8F%B0%E5%8C%97101%E5%A4%A7%E6%A8%9330/@25.0339639,121.5622835,17z/data=!3m1!4b1!4m5!3m4!1s0x3442abb6da9c9e1f:0xd0542b455c5061d!8m2!3d25.0339639!4d121.5644722" target="_blank">11049台北市信義路五段7號30樓(代表地址)</a><span class="desktop">&nbsp;&nbsp;I&nbsp;&nbsp;</span><a href="tel:0287581568" target="_blank">客服專線：(02) 8758-1568</a><span class="desktop">&nbsp;&nbsp;I&nbsp;&nbsp;</span><a href="http://www.nomurafunds.com.tw/aries/index.aspx" target="_blank">野村投資理財網：www.nomurafunds.com.tw</a></p>
      <p class="warings">本基金經金管會核准或同意生效，惟不表示本基金絕無風險。基金經理公司以往之經理績效不保證本基金之最低投資收益；基金經理公司除盡善良管理人之注意義務外，不負責本基金之盈虧，亦不保證最低之收益，投資人申購前應詳閱基金公開說明書。有關基金應負擔之費用已揭露於基金公開說明書，本公司及銷售機構均備有基金公開說明書，投資人亦可至公開資訊觀測站中查詢。<span class="color-red">由於高收益債券之信用評等未達投資等級或未經信用評等，且對利率變動的敏感度甚高，故高收益債券基金可能會因利率上升、市場流動性下降，或債券發行機構違約不支付本金、利息或破產而蒙受虧損。高收益債券基金不適合無法承擔相關風險之投資人，投資人投資以高收益債券為訴求之基金不宜占其投資組合過高之比重。</span>基金配息率不代表基金報酬率，且過去配息率不代表未來配息率；基金淨值可能因市場因素而上下波動。基金的配息可能由基金的收益或本金中支付。任何涉及由本金支出的部份，可能導致原始投資金額減損。本基金由本金支付配息之相關資料，投資人可至本公司網站(www.nomurafunds.com.tw)查詢。本基金配息前未先扣除應負擔之相關費用。基金涉及投資新興市場部份，因其波動性與風險程度可能較高，且其政治與經濟情勢穩定度可能低於已開發國家，也可能使資產價值受不同程度之影響。<span class="color-red">本基金所投資之標的可能投資美國Rule 144A債券，該等債券屬私募性質，較可能發生流動性不足，財務訊息揭露不完整或因價格不透明導致波動性較大之風險，投資人須留意相關風險。</span>本文提及之經濟走勢預測不必然代表基金之績效，基金投資風險請詳閱基金公開說明書。【野村投信獨立經營管理】。</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'nomurafooter',
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>

<style lang="scss" scoped>
.desktop { display: inline-block; }
.color-red { color: #d70029; }

footer {
  padding: 35px 0 30px;
  background-color: #fff;
}

.footer_box {
  text-align: justify;
  max-width: 960px;
  margin: 0 auto;
}

h4 {
  font-size: 16px;
  font-weight: bold;
}

.info {
  margin: 8px 0 10px;
  font-size: 13px;
}

.warings {
  line-height: 1.3;
  font-size: 14px;
  font-weight: bold;
}


@media screen and (max-width: 1400px) {
  .footer_box {
    max-width: 1000/1400*100vw;
    margin-left: 280/1400*100vw;
  }
}


@media screen and (max-width: 1024px) {
  .desktop { display: none; }
  footer {
    padding: 54px 26px 240px;
  }
  .footer_box {
    max-width: 100%;
    margin: 0 auto;
  }
  h4 { font-size: 28px; }
  .info {
    margin: 5px 0 14px;
    font-size: 22px;
    a {
      display: block;
      line-height: 1.4;
    }
  }
  .warings {
    line-height: 1.3;
    font-size: 24px;
  }
}


@media screen and (max-width: 750px) {
  footer { padding: 54/750*100vw 26/750*100vw 240/750*100vw; }
  h4 { font-size: 28/750*100vw; }
  .info {
    margin: 5/750*100vw 0 14/750*100vw;
    font-size: 22/750*100vw;
  }
  .warings { font-size: 24/750*100vw; }
}
</style>
