<template>
  <div id="detail">
    <DetailTopBar class="DetailTopBar"></DetailTopBar>
    <Scroll :probeType="3" 
    class="detail-content"
    ref="scroll"
    @positionOn="isBack"
    :data="[topImages, detaildes, columns, service, shopInfo, detailInfo, itemParams, comments]">
      <div>
        <Detailswiper :topImages="topImages"></Detailswiper>
        <DetailSptitle :detaildes="detaildes" :Ccolumns="columns" :service="service"/>
        <DetailShopInfo :shopInfo="shopInfo"></DetailShopInfo>
        <DetailInfo :detailInfo = "detailInfo"></DetailInfo>
        <DetailItemParams :itemParams = "itemParams"></DetailItemParams>
        <DetailComment :comments="comments"></DetailComment>
        <DetailHotShow :recommend="recommend"></DetailHotShow>
      </div>
    </Scroll>
    <BackTop @click.native="backtop" v-show="showBack"></BackTop>
    <DetailBottomBar @addToCart="addToCart"></DetailBottomBar>
  </div>
</template>

<script>
import DetailTopBar from './detailcomponents/DetailTopBar'
import Detailswiper from './detailcomponents/DetailSwiper'
import DetailSptitle from './detailcomponents/DetailSptitle'
import DetailShopInfo from './detailcomponents/DetailShopInfo'
import DetailBottomBar from './detailcomponents/DetailBottomBar'
import DetailInfo from './detailcomponents/DetailInfo'
import DetailItemParams from './detailcomponents/DetailItemParams'
import DetailComment from './detailcomponents/DetailComment'
import DetailHotShow from './detailcomponents/DetailHotShow'

import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backtop/BackTop'

import { getDetailData, getRecommend } from "../../network/detail"
export default {
  name: 'Detail',
  components: {
    DetailTopBar,
    Detailswiper,
    DetailSptitle,
    DetailShopInfo,
    DetailBottomBar,
    DetailInfo,
    DetailItemParams,
    DetailComment,
    DetailHotShow,
    Scroll,
    BackTop
  },
  data() {
    return {
      iid: '',
      topImages: [],
      detaildes: {},
      columns: [],
      shopInfo: {},
      service: [],
      detailInfo: {},
      itemParams: {},
      comments: {},
      recommend: {},
      showBack: false
    }
  },
  methods: {
    __getDetailData() {
        this.iid = this.$route.query.iid
      getDetailData(this.iid).then(res => {
        const data = res.result
        this.topImages = data.itemInfo.topImages
        this.detaildes = data.itemInfo
        this.columns = data.columns
        this.shopInfo = data.shopInfo
        this.service = data.shopInfo.services
        this.detailInfo = data.detailInfo
        this.itemParams = data.itemParams
        this.comments = data.rate
    })
    },
    __getRecommend() {
      getRecommend().then(res => {
        this.recommend = res.data
      })
    },
    isBack(position) {
      if(position.y < -1800){
        this.showBack = true
      } else {
        this.showBack = false
      }
    },
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    addToCart() {
      let info = {}
      info.iid = this.iid
      info.topImage = this.topImages[0]
      info.desc = this.detaildes.desc
      info.title = this.detaildes.title
      info.price = this.detaildes.lowPrice
      this.$store.commit('addCart', info)
    }
  }, 
  created () {
    this.__getDetailData()
    this.__getRecommend()
  },
  computed: {
  }
}

</script>
<style scoped>
 #detail {
    height: 100vh;
    position: relative;
  }
.detail-content{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 60px;
}
</style>