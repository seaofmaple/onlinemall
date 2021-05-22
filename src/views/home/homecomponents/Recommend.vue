<template>
  <div id="recommend">
    <div v-for="(item ,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommends: {
      type:Array,
      default() {
        return []
      }
    }
  }
}

</script>
<style scoped>
#recommend{
  display:flex;
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
  padding-bottom: 20px;
  border-bottom: 10px solid #dfdddd;
}
.recommend-item{
  flex: 1;
}
.recommend-item img{
  width: 70px;
  height: 70px;
}
a{
  text-decoration: none;
}
</style>