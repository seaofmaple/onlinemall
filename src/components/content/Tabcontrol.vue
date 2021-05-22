<template>
  <div class="tab-ctrl">
    <div v-for="(item, index) in titles" :key="index" 
    class="tab-ctrl-item">
      <span :class="{ctrlactive: index == currentIndex }" @click="ctrlitem(index)">{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabcontrol',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    ctrlitem(index){
      this.currentIndex = index
      this.$emit('ctrlitem',index)
    }
  }
}

</script>
<style scoped>
.tab-ctrl{
  height: 40px;
  line-height: 40px;
  display: flex;
  text-align: center;
  background-color: #fff;
}
.tab-ctrl-item{
  flex: 1;
}
.ctrlactive{
  color: #ff5777;
  padding: 5px;
  border-bottom: 3px solid #ff5777;
}
</style>