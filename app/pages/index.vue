<template>
  <div id="index">
    <div class="blur-bg"></div>
    <div class="wrapper" @click="openGallery(true)">
      <div class="opener">
        <div class="opener__text">
          Click any place to activate.
        </div>
      </div>
    </div>
    <photo-gallery :open="open" v-on:openGallery="openGallery"></photo-gallery>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import PhotoGallery from '~/components/PhotoGallery.vue'

export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    openGallery (v) {
      console.error(v)
      this.open = v
    }
  },
  components: {
    Logo,
    PhotoGallery
  },
}
</script>

<style lang="stylus" scoped>
@keyframes scale {
  0% {
    transform scale(1)
  }
  50% {
    transform scale(1.1)
  }
  100% {
    transform scale(1)
  }
}

#index
  width 100vw
  height 100vh
  overflow hidden
  display flex
  align-items center
  justify-content center
  background-color #eee
.blur-bg
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  background-image url('~assets/cover.jpg')
  background-size 100% 100%
  filter blur(3px)
  z-index 1

.wrapper
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  max-width 768px
  max-height 1024px
  background-size contain
  background-position 50%
  background-repeat no-repeat
  background-image url('~assets/cover.jpg')
  z-index 2
  
  .opener
    position absolute
    background rgb(253, 240, 83)
    left 4%
    bottom 2%
    padding 5px 10px
    border-radius 10px
    animation scale 1s infinite
    will-change transform
    &__text
      font-size 3vw
      font-family 'Montserrat'    

#photo-swiper
  position absolute
  height 50%
  top 50%
  left 31%
  width 42%
</style>
