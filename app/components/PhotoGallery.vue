<template>
  <div class="gallery" v-if="open">
    <div class="gallery__close">
      <div @click="closeGallery"></div>
    </div>
    <div class="gallery__top">
      <list-swiper id="list-swiper" :list="list" ref="listSwiper"></list-swiper>
    </div>
    <div class="gallery__bottom">
      <swiper id="swiper" :list="list" ref="swiper"></swiper>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from '~/components/Swiper.vue'
import ListSwiper from '~/components/ListSwiper.vue'

export default {
  name: 'photo-swiper',
  props: {
    open: {
      default: false,
      type: Boolean
    }
  },
  data () {
    return {
      list: [],
    }
  },
  created () {
    const self = this
    axios.get('/api').then(list => {
      self.list = list.data
    })
  },
  components: {
    Swiper,
    ListSwiper,
  },
  computed: {
  },
  mounted() {
  },
  methods: {
    closeGallery () {
      this.$emit('openGallery', false)
    }
  },
  destroyed() {
    this.$store.commit('swipe/pick', 0)    
  },
}
</script>

<style lang="stylus">
.gallery
  width 100%
  height 100%
  background-color rgba(0, 0, 0, 0.75)
  z-index 3
  &__close
    position relative
    height 30px
    > div
      &:before
        content ''
        position absolute
        right 20px
        top 12px
        width 10px
        height 10px
        transform rotate(135deg)
        border-left 1px solid gold
        border-top 1px solid gold
      &:after
        content ''
        position absolute
        right 7px
        top 12px
        width 10px
        height 10px
        transform rotate(315deg)
        border-left 1px solid gold
        border-top 1px solid gold
  &__top
    height calc( 20% - 30px )
    // height 20%
    #list-swiper
      height 100%

  &__bottom
    height 80%

</style>
