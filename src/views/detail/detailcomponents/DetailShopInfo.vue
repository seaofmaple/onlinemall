<template>
  <div class="shop-info">
    <div class="logo">
      <img :src="shopInfo.shopLogo" alt="">
      <span class="title">{{shopInfo.name}}</span>
    </div>
    <div class="shopmid">
      <div class="shop-left">
        <div class="sells">
          <span>{{shopInfo.cSells | showCount}}</span>
          <div><span class="selltext">总销量</span></div>
        </div>
        <div class="allgoods">
          <span>{{shopInfo.cGoods | showCount}}</span>
          <div><span class="goodstext">全部宝贝</span></div>
        </div>
      </div>
      <div class="shop-right">
        <table>
        <tr v-for="(item, index) in shopInfo.score" :key="index">
          <td class="score-name">{{item.name}}</td>
          <td class="score" :class="{'font-color': item.isBetter}">{{item.score}}</td>
          <td class="better" :class="{'better-more': item.isBetter}"><span>{{item.isBetter ? '高':'低'}}</span></td>
        </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shopInfo: {
      type: Object
    }
  },
  filters: {
    showCount(count) {
      if(count < 10000) return count
      return (count/10000).toFixed(1) + '万'
    }
  }
}

</script>
<style d>
.shop-info{
  padding-bottom: 25px;
  border-bottom: 7px solid #f2f5f8;
}
.logo{
  width: 200px;
  height: 50px;
  margin-top: 10px;
  display: flex;
  line-height: 50px;
}
.logo img{
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.logo .title{
  margin-left: 10px;
  vertical-align: center;
}
.shopmid{
  margin-top: 20px;
  display: flex;
}
.shop-left{
  display: flex;
}
.selltext{
  font-size: 14px;
}
.goodstext{
  font-size: 14px;
}
.shop-left,.shop-right{
  flex: 1;
}
.sells,.allgoods{
  font-size: 22px;
  flex: 1;
}
.allgoods{
  border-right: 1px solid #c0c0c0;
}
.shop-right{
  display: flex;
  justify-content: space-evenly;
}
.font-color{
  color: #ff0000;
}
.score{
  color: #5ea732;
}
.better{
  color: #fff;
  background-color: #7fcc50;
}
.better-more{
  background: #ff0000;
}
.shop-bottom {
  text-align: center;
  margin-top: 10px;
}

.enter-shop {
  display: inline-block;
  font-size: 14px;
  background-color: #f2f5f8;
  width: 150px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 10px;
}
</style>