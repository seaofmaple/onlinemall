<template>
  <div>
    <Swiper class="home-swiper">
      <SwiperItem v-for="item in banners" :key="item.background">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoad">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "../../../components/common/swiper";
export default {
  name: 'Homecontent',
  components:{
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array,
      default(){ 
        return []
      }
    }
  },
  methods: {
    imgLoad() {
      this.$emit('imgLoad')
    }
  }
}

</script>
<style>
</style>