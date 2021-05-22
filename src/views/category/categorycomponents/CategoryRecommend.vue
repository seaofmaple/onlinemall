<template>
  <div id="categoryRecommend">
    <Tabcontrol :titles="['综合', '新品', '销量']" class="category-tab"/>
    <div class="categoryRecommend">
      <div v-for="(item, index) in detailCategory" :key="index" class="detail-info" @click="itemClick(index)">
        <img :src="item.img">
        <div class="goods-info">
          <p class="title">{{item.title}}</p>
          <span class="price">{{item.price | showPrice}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabcontrol from '../../../components/content/Tabcontrol'

export default {
  name: 'CategoryRecommend',
  props: {
    detailCategory: {
      type: Array
    }
  },
  components: {
    Tabcontrol
  },
  methods: {
    itemClick(index) {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.detailCategory[index].iid
        }
      })
    }
  },
  filters:{
    showPrice(price) {
      return '￥' + price
    }
  }
}

</script>
<style scoped>
.category-tab{
  width: calc(100% - 100px);
  margin-left: 100px;
}
.categoryRecommend{
  margin-left: 100px;
  padding: 3px;
  padding-bottom: 20px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
}
.detail-info{
  position: relative;
  width: 45%;
  height: auto;
  flex: 1;
}
.categoryRecommend img{
  border-radius: 5px;
  width: 150px;
}
.categoryRecommend .price{
  position: relative;
  margin-right: 20px;
  color: #ff5777;
}
.categoryRecommend .title{
  position: relative;
  width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.collect{
  position: relative;
}
.categoryRecommend .collect::before{
  content: '';
    position: absolute;
    left: -15px;
    top: 3px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;
}
.goods-info{
  width: 150px;
}
</style>