<template>
  <div id="goods">
    <div v-for="(item, index) in goods" :key="index" class="goods" @click="goodsItemClick(index)">
      <img :src="item.show.img" alt="">
      <p class="title">{{item.title}}</p>
      <span class="price">{{item.price | showPrice}}</span>
      <span class="collect">{{item.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }                                                                                           
    }
  },
  methods: {
    goodsItemClick(index) {
      this.$router.push({
        path: '/detail',
        query: {
          iid: this.goods[index].iid
        }
      })
    }
  },
  filters: {
    showPrice(price){
      return '￥' + price;
    }
  }
}
</script>

<style scoped>
#goods{
  color: #666;
  display: flex;
  flex-wrap: wrap;
}
.goods{
  padding: 3px;
  padding-bottom: 20px;
  position: relative;
  width: 48%;
}
.goods img{
  border-radius: 5px;
  flex-grow: 1;
  width: 200px;
}
.price{
  margin-right: 20px;
  color: #ff5777;
}
.title{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.collect{
  position: relative;
}
.goods .collect::before{
  content: '';
    position: absolute;
    left: -15px;
    top: 3px;
    width: 14px;
    height: 14px;
    background: url("../../../assets/images/common/collect.svg") 0 0/14px 14px;
}
</style>