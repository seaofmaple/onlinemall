<template>
  <div id="cart">
    <Navbar class="nav-bar">
      <div slot="center">购物车({{count}})</div>
    </Navbar>
    <CartGoodsList></CartGoodsList>
    <CartBottomBar></CartBottomBar>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar'

import CartBottomBar from './cartcomponents/CartBottomBar'
import CartGoodsList from './cartcomponents/CartGoodsList'

export default {
  name: 'Cart',
  components: {
    Navbar,
    CartBottomBar,
    CartGoodsList
  },
  data() {
    return {
      count: this.$store.getters.cartCount
    }
  }
}

</script>
<style scoped>
.nav-bar{
  background-color: #ff5777;
  color: #fff;
}
</style>