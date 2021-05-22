<template>
  <div class="tab-item" @click="itemClick">
    <div v-if="!isActive"> 
      <slot name="tab-icon"></slot>
    </div>
    <div v-else>
      <slot name="tab-icon-active"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="tab-content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tabbarcontent',
  data() {
    return {
      
    }
  },
  props: {
    path: {
      type: String
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods:{
    itemClick(){
      this.$router.push(this.path).catch(err => {})
    }
  }
}

</script>
<style scoped>
  .tab-item{
  flex: 1;
  text-align: center;
  height: 49px; 
  margin-top: 3px;
}
.tab-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.active{
  color:#ff5777;
}
</style>