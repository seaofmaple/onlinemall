<template>
  <div>
    <Tabbar>
      <Tabbaritem path="/home">
        <img slot="tab-icon" src="../../assets/images/tabbar/home.svg">
        <img slot="tab-icon-active" src="../../assets/images/tabbar/home_active.svg">
        <div slot="tab-content">首页</div>
      </Tabbaritem>
      <Tabbaritem path="/category">
        <img slot="tab-icon" src="../../assets/images/tabbar/category.svg">
        <img slot="tab-icon-active" src="../../assets/images/tabbar/category_active.svg">
        <div slot="tab-content">分类</div>
      </Tabbaritem>
      <Tabbaritem path="/cart">
        <img slot="tab-icon" src="../../assets/images/tabbar/shopcart.svg">
        <img slot="tab-icon-active" src="../../assets/images/tabbar/shopcart_active.svg">
        <div slot="tab-content">购物车</div>
      </Tabbaritem>
      <Tabbaritem path="/profile">
        <img slot="tab-icon" src="../../assets/images/tabbar/profile.svg">
        <img slot="tab-icon-active" src="../../assets/images/tabbar/profile_active.svg">
        <div slot="tab-content">我的</div>
      </Tabbaritem>
    </Tabbar>
  </div>
</template>

<script>
import Tabbar from '../common/tabbar/Tabbar'
import Tabbaritem from '../common/tabbar/Tabbaritem'
export default {
  name: 'Tabbarcontent',
  components: {
    Tabbar,
    Tabbaritem
  }
}

</script>
<style>
</style>