<template>
  <div id="cart-bottom-bar">
    <CheckBox @select="selectAll" class="bar-icon" :value="allSelect"></CheckBox>
    <div class="choose-all">
      <span>全选</span>
    </div>
    <div class="total">
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div class="compute">
      <span>去结算</span>
    </div>
  </div>
</template>

<script>
import CheckBox from './CheckBox'
export default {
  name: 'CartBottomBar',
  components: {
    CheckBox
  },
  methods: {
    selectAll() {
      let select = this.$store.getters.showCart.find(item => !item.checked)
      if(select) {
          this.$store.state.cartList.forEach(item => {
            item.checked = true;
          });
        } else {
          this.$store.state.cartList.forEach(item => {
            item.checked = false;
          });
        }
    },
    
  },
  data() {
    return {
      cartList: this.$store.getters.showCart
    }
  },
  computed: {
    totalPrice() {
      return this.cartList.filter(item =>{
        return item.checked
        }).reduce((preValue,current)=>{
          return preValue + current.count * current.price
        }, 0).toFixed(2)
    },
    allSelect() {
      return this.cartList.every(item => {
        return item.checked
      })
    }
  }
}

</script>
<style scoped>
#cart-bottom-bar{
  position: fixed;
  bottom: 50px;
  font-size: 20px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  background-color: #fff;
}
.bar-icon{
  margin-top: 10px;
}
.compute{
  flex: 1;
  text-align: center;
  background-color: #f80c0c;
  color: #fff;
}
.choose-all{
  width: 45px;
  float: left;
  color: rgb(124, 124, 124);
}
.total{
  flex: 1;
  /* float: left; */
}
</style>