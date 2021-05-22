<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tabbar'

}

</script>
<style scoped>
  #tabbar{
  display: flex;
  background-color: #f6f6f6;
  box-shadow: 0, 1px, 1px,rgb(184, 94, 94);
  position:fixed;
  right: 0;
  left: 0;
  bottom: -1px;
  font-size: 14px;
  z-index: 10;
}
</style>