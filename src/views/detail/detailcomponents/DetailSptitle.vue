<template>
  <div class="detailSptitle">
    <div class="detailSptitle-top">
      <div class="title">{{detaildes.title}}</div>
      <div class="price">{{detaildes.lowNowPrice | showPrice}}~{{detaildes.highPrice | showPrice}}</div>
      <div class="detail-info">
        <div v-for="(item, index) in Ccolumns" :key="index" class="in-info">{{item}}</div>
      </div>
    </div>
    <div class="service">
      <div class="service-item" v-for="(item, index) in service" :key="index">
        <img :src="item.icon" alt="">
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailSptitle',
  props:{
    detaildes:{
      type: Object
    },
    Ccolumns: {
      type: Array,
      default() {
        return []
      }
    },
    service:{
      type: Array
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price
    }
  }
}

</script>
<style scoped>
.detailSptitle-top{
  position: relative;
  margin-top: 10px;
  font-size: 18px;
  border-bottom: 2px solid #c7c6c6;
}
.title{
  padding: 5px;
  color: #808080;
}
.price{
  line-height: 25px;
  font-size: 25px;
  color: #ff5777;
}
.detail-info{
  margin-top: 5px;
  height: 35px;
  line-height: 35px;
  font-size: 14px;
  color: #808080;
  display: flex;
}
.detail-info div{
  flex: 1;
  text-align: center;
}
 .service {
    display: flex;
    justify-content: space-between;
    line-height: 60px;
  }

  .service-item img {
    width: 14px;
    height: 14px;
    position: relative;
    top: 2px;
  }

  .service-item span {
    font-size: 13px;
    color: #333;
  }
</style>