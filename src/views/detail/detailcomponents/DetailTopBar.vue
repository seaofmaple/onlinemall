<template>
  <div id="detail-bar">
    <Navbar class="detail-nav-bar">
      <div class="left" slot="left">
        <img src="../../../assets/images/common/back.svg" @click="back">
      </div>
      <div class="center" slot="center" >
        <span v-for="(item, index) in title" :key="index" 
        class="centeritem" :class="{active:currentIndex==index}"
        @click="itemclick(index)">{{item}}</span>
      </div>
    </Navbar>
  </div>
</template>

<script>
import Navbar from '../../../components/common/navbar/Navbar'
export default {
  name: 'DetailTopBar',
  components: {
    Navbar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods:{
    itemclick(index){
      this.currentIndex = index
    },
    back() {
      this.$router.back()
    }
  }
}

</script>
<style scoped>
.detail-nav-bar{
  background-color: #fff;
}

.center{
  display: flex;
}
.centeritem {
  flex: 1;
}
.active{
  color: #ff5777;
}
</style>