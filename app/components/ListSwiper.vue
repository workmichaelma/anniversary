<template>
  <div v-swiper:listSwiper="swiperOption" class="listSwiper" @slideChange="slideChanged">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <train></train>
      </div>
      <div class="swiper-slide" v-for="(img, k) in list" :key="k">
        <div class="swiper-slide__img">
          <img :src="require(`~/assets/img/${img.path}`)"/>
        </div>
        <div class="swiper-slide__cabin"></div>
        <div class="swiper-slide__cabin"></div>
      </div>
      <div class="swiper-slide">
        <train-tail></train-tail>
      </div>
    </div>
  </div>
</template>

<script>
import Train from './Train.vue'
import TrainTail from './TrainTail.vue'
  export default {
    computed: {
      swiperOption () {
        return {
          slidesPerView: 4,
          centeredSlides: true,
          touchRatio: 0.2,
          slideToClickedSlide: true
        }
      },
      current () {
        return this.$store.state.swipe.current
      }
    },
    data () {
      return {
      }
    },
    components: {
      Train,
      TrainTail
    },
    props: ['list'],
    methods: {
      slideChanged () {
        console.log(this.listSwiper)
        this.$store.commit('swipe/pick', this.listSwiper.activeIndex)
      }
    },
    watch: {
      current (v) {
        if (v !== this.listSwiper.activeIndex) {
          this.listSwiper.slideTo(v)
        }
      }
    },
  }
</script>


<style lang="stylus">

.listSwiper
  height 100%
  width 100%
  .swiper-slide
    display flex
    justify-content center
    align-items center
    position relative
    img
      max-width 100%
      max-height 100%
      border-radius 5px
    &:not(:first-child)
      padding-bottom 10px
    &__img
      width 100%
      height 100%
      border-bottom 2px solid yellow
      display flex
      align-items flex-end
      justify-content center
      padding-top 2px

    &__cabin
      content: ' ';
      color: #fff;
      padding: 8px;
      position: absolute;
      border-radius: 46%;
      border: 6px solid #333;
      bottom: 0;
      left: 17.5%;
      background-color: #666;
      -webkit-animation: spin 4s linear infinite;
      animation: spin 4s linear infinite;
      &:last-child
        left auto
        right: 17.5%;

</style>