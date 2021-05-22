<template>
  <div id="category-data">
    <div v-for="(item, index) in categorydata" :key="index" class="category-detail">
      <img :src="item.image" alt="">
      <div class="title">{{item.title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryData',
  props: {
    categorydata: {
      type: Array
    }
  }
}

</script>
<style scoped>
#category-data{
  width: calc(100% - 110px);
  margin-left: 110px;
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}
#category-data img{
  height: 80px;
  width: 80px;
  flex-grow: 1;
}
.category-detail{
  margin-left: 5px;
  flex: 1;
  width: 80px;
  margin-bottom: 20px;
}
.title{
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  width: 93px;
}
</style>