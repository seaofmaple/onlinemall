<template>
  <div id="cart-goods-list">
    <Scroll class="cart-content"
     ref = "scroll"
    :probeType="3"
    :data="[listData]">
    <div>
      <div v-for="(item ,index) in listData" :key="index" class="cart-goods-info">
        <div class="check-box">
          <CheckBox :value="item.checked" class="cart-icon" 
          @select="clickChange(item)" v-model="listData[index].checked"/>
        </div>
        <div class="cart-img">
          <img :src="item.topImage">
        </div>
        <div class="goods-content">
          <div class="cart-title">{{item.title}}</div>
          <div class="cart-desc">商品描述: {{item.desc}}</div>
          <div class="cart-price">￥{{item.price}}</div>
          <div class="cart-count">X {{item.count}}</div>
        </div>
      </div>
    </div>
    </Scroll>
  </div>
</template>

<script>
import CheckBox from './CheckBox'

import Scroll from '../../../components/common/scroll/Scroll'
export default {
  name: 'CartGoodsList',
  components: {
    CheckBox,
    Scroll
  },
  data() {
    return {
      listData: this.$store.getters.showCart
    }
  },
  methods: {
    clickChange(item) {
      item.checked = !item.checked
      return item.checked
    }
  }
}

</script>
<style scoped>
.cart-content{
  position: fixed;
  top: 44px;
  bottom: 103px;
  left: 0;
  right: 0;
  overflow: hidden;
}
.cart-img img{
  width: 80px;
  height: 100px;
  border-radius: 5px;
}
.cart-goods-info{
  display: flex;
  padding: 5px;
  border-bottom: 1px solid rgb(122, 122, 122);
}
.check-box{
  width: 30px;
}
.check-box .cart-icon {
  margin-top: 40px;
}
.goods-content{
  flex: 1;
  margin-left: 5px;
}
.cart-title{
  width: 290px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  font-size: 18px;
}
.cart-desc{
  width: 290px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
  font-size: 16px;
  margin-top: 15px;
  color: rgb(111, 113, 114);
}
.cart-price{
  float: right;
  font-size: 18px;
  margin-top: 20px;
  margin-right: 30px;
  color: #ff5777;
}
.cart-count{
  margin-left: 20px;
  margin-top: 20px;
}
</style>
