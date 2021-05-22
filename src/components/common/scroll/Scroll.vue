<template>
  <div ref="wraper" class="cwraper">
      <slot></slot>
  </div>
</template>

<script>
import Bscroll from 'better-scroll';
export default {
  name: 'Scroll',
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    data: {
		    type: Array,
        default: () => {
          return []
        }
      }
  },
  data() {
    return {
      bscroll: null
    }
  },
  mounted() {
    this.bscroll = new Bscroll(this.$refs.wraper,{
      peobetype: this.peobetype,
      click: true,
      pullUpLoad: true
    })
    this.bscroll.on('scroll', (position) => {
      this.$emit('positionOn',position)
    })
    this.bscroll.on('pullingUp',() => {
      this.$emit('pullingUp')
    })
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.bscroll.scrollTo(x, y, time)
    }
  },
  watch: {
    data () {
      /*检测到数据变化时，此时如果不使用$nextTick方法，
      refresh方法会在DOM更新前直接调用*/
      this.$nextTick(() => {
        this.bscroll.refresh()
      })
    }
  }
}

</script>
<style>
</style>