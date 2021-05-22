<template>
  <div class="icon" @click="select">
    <img src="../../../assets/images/cart/check.svg" alt="" v-if="!isSelect">
    <img src="../../../assets/images/cart/check_active.svg" alt="" v-else>
  </div>
</template>

<script>
export default {
  name: 'CheckBox',
  props: {
    value: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      isSelect: this.value
    }
  },
  methods: {
    select() {
      this.$emit("select")
    }
  },
  watch: {
    value: function(newvalue){
      this.value = newvalue
      this.isSelect = newvalue
    }
  }
}

</script>
<style scoped>
.icon{
  position: relative;
  margin: 0;
  cursor: pointer;
  height: 0 auto;
}
.icon img {
  width: 30px;
  height: 25px;
}
</style>