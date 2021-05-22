<template>
  <div id="category">
    <Navbar class="nav-bar">
      <div slot="center">商品分类</div>
    </Navbar>
    <Scroll class="category-scroll"
            ref = "scroll"
            :probeType="3"
            :data="[leftbarItems, categorydata, detailCategory]">
      <div>
        <Lefttabbar @leftbarclick="showItem" :LeftBarItem = "leftbarItems"></Lefttabbar>
        <CategoryData :categorydata="categorydata"></CategoryData>
        <CategoryRecommend :detailCategory="detailCategory"></CategoryRecommend>
      </div>
    </Scroll>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar'
import Scroll from '../../components/common/scroll/Scroll'

import Lefttabbar from "./categorycomponents/Lefttabbar"
import CategoryData from "./categorycomponents/CategoryData"
import CategoryRecommend from "./categorycomponents/CategoryRecommend"

import { getCategoryMessage,
        getCategoryDetailMsg,
        getDetailCategory } from '../../network/category'

export default {
  name: 'Category',
  components: {
    Navbar,
    Lefttabbar,
    CategoryData,
    CategoryRecommend,
    Scroll
  },
  data() {
    return {
      leftbarItems: [],
      maitKey: 3627,
      categorydata: [],
      currentIndex: 0,
      miniWallkey: 10062603,
      detailCategory: []
    }
  },
  created() {
    getCategoryMessage().then(res => {
      this.leftbarItems = res.data.category.list
      
    })
    getCategoryDetailMsg(this.maitKey).then(res => {
      this.categorydata  = res.data.list
    })
    getDetailCategory(this.miniWallkey).then(res => {
          this.detailCategory = res
    })
  },
  methods: {
    showItem(index, maitkey) {
      this.maitKey = maitkey
      this.currentIndex = index
      getCategoryDetailMsg(this.maitKey).then(res => {
        this.categorydata = res.data.list
        this.miniWallkey = this.leftbarItems[this.currentIndex].miniWallkey
      })
      this.__getDetailCategory('pop')
      this.__getDetailCategory('sell')
      this.__getDetailCategory('new')
    },
    __getDetailCategory(type){
      this.miniWallkey = this.leftbarItems[this.currentIndex].miniWallkey
      getDetailCategory(this.miniWallkey,type).then(res => {
          this.detailCategory = res
    })
    }
  }
}

</script>
<style scoped>
#category{
  margin: 0;
  padding: 0;
}
.nav-bar{
  background-color: #ff5777;
  color: #fff;
}
.category-scroll{
  position: fixed;
  top: 44px;
  bottom: 48px;
  left: 0;
  right: 0;
}
</style>