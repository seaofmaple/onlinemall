<template>
  <div class="info">
    <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <div class="detailshow">
      <div class="info-desc clear-fix">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
      </div>
      <div class="imgs">
        <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
        <div class="detail-imgs">
          <img v-for="(item, index) in detailInfo.detailImage[0].list" :key="index" :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'DetailInfo',
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}

</script>
<style scoped>
.goods-info {
  padding: 20px 0;
  border-bottom: 5px solid #f2f5f8;
}
.info{
  border-bottom: 5px solid #f2f5f8;
}
.info-desc {
    padding: 0 15px;
}

.info-desc .start, .info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before, .info-desc .end::after {
  content: '';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.detail-imgs img{
  width: 100%;
  height: auto;
  display: block;
  float: left;
}
.info-key {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
  }
</style>