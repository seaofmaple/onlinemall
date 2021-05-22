<template>
  <div id="detail-hot-show">
    <div class="hot-top">
      <span>热门推荐</span>
    </div>
    <div class="detail-hot-show">
      <div v-for="(item, index) in recommend.list" :key="index"
       class="hot-recomment-goods">
        <img :src="item.image" alt="">
        <div class="title">{{item.title}}</div>
        <div>
          <span class="price">{{item.price | showPrice}}</span>
          <span class="collect">{{item.cfav}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHotShow',
  props: {
    recommend: {
      type: Object
    }
  },
  filters: {
    showPrice(value) {
      return '￥' + value
    }
  }
}

</script>
<style scoped>
.hot-top{
  margin-top: 10px;
  margin-bottom: 30px;
}
.detail-hot-show{
  color: #666;
  display: flex;
  flex-wrap: wrap;
}
.hot-recomment-goods{
  padding: 3px;
  padding-bottom: 20px;
  position: relative;
  width: 48%;
}
img{
  border-radius: 5px;
  flex-grow: 1;
  width: 190px;
}
.price{
  margin-right: 20px;
  color: #ff5777;
}
.title{
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.collect{
  position: relative;
}
.collect::before{
  content: '';
    position: absolute;
    left: -15px;
    top: 3px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>