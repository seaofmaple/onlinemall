<template>
  <div>
    <Navbar class="nav">
      <div slot="center">购物街</div>
    </Navbar>
    <Tabcontrol :titles="['流行', '新款', '精选']" 
                @ctrlitem="switchClick"
                v-show="isshowtabctrl" class="showtabctrl"
                ref="Tabcontrol"></Tabcontrol>
    <Scroll class="content"
            @pullingUp = "loadmore"
            @positionOn= "isBack"
            ref = "scroll"
            :probeType="3">
      <div>
        <HomeSwiper :banners="banner" class="swiper1" @imgLoad="imgLoad"></HomeSwiper>
        <Recommend :recommends="recommend"></Recommend>
        <FeatureView></FeatureView>
        <Tabcontrol :titles="['流行', '新款', '精选']" @ctrlitem="switchClick" ref="ScrollTabcontrol"></Tabcontrol>
        <GoodsList :goods="goods[currentstyle].list"></GoodsList>
      </div>
    </Scroll>
    <BackTop @click.native="backtop" v-show="showBack"/>
  </div>
</template>

<script>
import Navbar from '../../components/common/navbar/Navbar'
import Tabcontrol from '../../components/content/Tabcontrol'
import GoodsList from '../../components/content/goods/GoodsList'
import Scroll from '../../components/common/scroll/Scroll'
import BackTop from '../../components/content/backtop/BackTop'

import HomeSwiper from './homecomponents/HomeSwiper'
import Recommend from './homecomponents/Recommend'
import FeatureView from './homecomponents/FeatureView'

import { getHomeMessage, getHomeData } from "../../network/home"
export default {
  name: 'Home',
  components: {
    Navbar,
    Tabcontrol,
    HomeSwiper,
    Recommend,
    FeatureView,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      titleText: ['pop', 'new', 'sell'],
      banner: [],
      recommend: [],
      goods: {
        'pop': {page: 1,list: []},
        'new': {page: 1,list: []},
        'sell': {page: 1,list: []}
      },
      currentstyle: 'pop',
      showBack: false,
      isshowtabctrl: false,
      tabctrlOffsetTop: 0,
      saveY: 0
    }
  },
  created() {
    this.getMessage()
    this.getData('pop',1)
    this.getData('new',1)
    this.getData('sell',1)
  },
  //进入页面时候的位置
    activated() {
      this.$refs.scroll.scrollTo(0, this.saveY, 0)
      this.$refs.scroll.bscroll.refresh()
    },
    //记录离开页面时候的位置
    deactivated() {
      this.saveY = this.$refs.scroll.bscroll.y
    },
  methods: {
    //获取数据列表
    getMessage() {
      return getHomeMessage().then(res => {
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
      })
    },
    //上拉加载换页后的请求数据
    getData(type,page) {
      return getHomeData(type,page).then((res) => {
        for(let i of res.data.list) {
          this.goods[type].list.push(i)
        }
        this.goods[type].page += 1
    })
    },
    //切换显示的数据的信息
    switchClick(index){
      this.currentstyle = this.titleText[index]
      //让两个Tabcontrol的样式一样
      this.$refs.ScrollTabcontrol.currentIndex = index
      this.$refs.Tabcontrol.currentIndex = index
    },

    //上拉加载更多
    loadmore(){
      this.getData(this.currentstyle,this.goods[this.currentstyle].page)
      this.$refs.scroll.bscroll.finishPullUp()
      this.$refs.scroll.bscroll.refresh()
    },
    //回到顶部
    backtop() {
      this.$refs.scroll.scrollTo(0, 0, 500)
    },
    //回到顶部是否显示
    isBack(position) {
      if(position.y < -1800){
        this.showBack = true
      } else {
        this.showBack = false
      }
      this.isshowtabctrl = this.tabctrlOffsetTop < -position.y
    },
    //轮播图加载完成之后获取ScrollTabcontrol的offsetTop
    imgLoad() {
      this.tabctrlOffsetTop = this.$refs.ScrollTabcontrol.$el.offsetTop
    }
    }
}

</script>


<style scoped>
.nav {
  background-color: #ff5777;
  color:#fff;
}
.content{
  position: fixed;
  top: 44px;
  bottom: 49px;
  left: 0;right: 0;
}
.showtabctrl{
  position: fixed;
  top: 44px;
  width: 100%;
  z-index: 20;
}
</style>