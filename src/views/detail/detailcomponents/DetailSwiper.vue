<template>
  <div>
    <Swiper class="detail-swiper">
      <SwiperItem v-for="(item, index) in topImages" :key="index">
        <img :src="item" alt="">
      </SwiperItem>
    </Swiper>
    <div>
      <title></title>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper/index'
export default {
  name: 'Detailswiper',
  components: {
    SwiperItem,
    Swiper
  },
  props: {
    topImages:{
      type: Array
    }
  }
}

</script>
<style scoped>
img{
  position: relative;
  top: 44px;
  right: 0;
  left: 0;
}
.detail-swiper{
  height: 300px;
  overflow: hidden;
  margin: 0;
  padding: 0;
}
</style>