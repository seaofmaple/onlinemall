<template>
  <div id="app">
    <keep-alive exclude="Detail,Category">
      <router-view></router-view>
    </keep-alive>
    <Tabbarcontent></Tabbarcontent>
  </div>
</template>

<script>
import Tabbarcontent from './components/content/Tabbarcontent'
import store from './store'

export default {
  name: 'App',
  store,
  components: {
    Tabbarcontent,
  }
}
</script>

<style scoped>
body{
  margin: 0;
  padding: 0;
}
</style>
