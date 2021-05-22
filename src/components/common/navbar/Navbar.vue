<template>
  <div class="nar-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'Navbar'

}

</script>
<style scoped>
.nar-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
}

  .left, .right {
    width: 40px;
  }

  .center {
    flex: 1;
  }
</style>