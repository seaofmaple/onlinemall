<template>
  <scroll class="category-bar">
    <div>
      <div class="LeftBarItem" 
      v-for="(item, index) in LeftBarItem" :key="index"
      :class="{changeColor: currentIndex == index}"
      @click="leftbarclick(index,item.maitKey)">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import scroll from "../../../components/common/scroll/Scroll"
export default {
  name: 'Lefttabbar',
  components: {
    scroll
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    LeftBarItem: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    leftbarclick(index, maitKet) {
      this.currentIndex = index
      this.$emit('leftbarclick', index, maitKet)
    }
  }
}
</script>

<style scoped>
.category-bar{
  position: fixed;
  top: 0;
  bottom: 48px;
  background-color:#F6F6F6;
}
.LeftBarItem{
  width: 100px;
  height: 45px;
  text-align: center;
  line-height: 45px;
}
.changeColor{
  background: #fff;
  border-left: 3px solid #ff5777;
  font-weight: 600;
  color: #ff5777;
}
</style>